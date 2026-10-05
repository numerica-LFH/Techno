/**
 * Résultats des élèves : évaluations « S'évaluer », évaluations SNT et
 * progression des Missions Scratch et dessins SketchUp du projet jardin sec
 * (site numerica-lfh.github.io/Techno).
 *
 * Chaque envoi :
 *   1. s'inscrit sur une ligne de l'onglet du groupe (5e, 4e, 3e, 2de) ;
 *   2. met à jour l'onglet « synthèse » du groupe (résumé par séquence et
 *      tableau par élève) ;
 *   3. part par courriel à numerica@liceofranco.org (capture d'écran en pièce
 *      jointe pour les Missions Scratch, rangée aussi dans Google Drive).
 *
 * Installation : voir LISEZMOI-apps-script.txt. Après avoir collé ce code dans
 * le projet existant, exécuter une fois la fonction « installer », puis
 * publier une NOUVELLE VERSION du déploiement existant (l'adresse /exec ne
 * change pas, les 74 pages d'évaluation continuent de fonctionner).
 */

var CONFIG = {
  DESTINATAIRE: "numerica@liceofranco.org",
  ID_CLASSEUR: "",                 // laisser vide : classeur lié ou créé automatiquement
  NOM_CLASSEUR: "Résultats élèves · Technologie et SNT",
  DOSSIER_CAPTURES: "Missions Scratch · captures",
  MAIL_EVALUATIONS: true,          // false : plus de courriel pour les évaluations
  MAIL_MISSIONS: true,
  GROUPES: ["5e", "4e", "3e", "2de"]
};

var ENTETES = ["Date", "Nom", "Prénom", "Classe", "Séquence", "Évaluation",
               "Type", "Note", "Points max", "Note /20", "Détail", "Capture"];

// Ordre des missions Scratch (pour savoir laquelle est la plus avancée)
var ORDRE_MISSIONS = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "A1", "A2",
  "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34",
  "35", "36", "A3", "A4", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
  "51", "52", "53", "54", "55", "56", "A5", "A6", "61", "62", "63", "64", "65", "66",
  "67", "68", "A7", "A8"];

/* =====================================================================
 * Fonctions pures (sans service Google) : testables hors Apps Script
 * ===================================================================== */

function sansAccents_(s) {
  return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function cleEleve_(nom, prenom) {
  return sansAccents_(nom).toUpperCase().replace(/\s+/g, " ").trim() + "|" +
         sansAccents_(prenom).toLowerCase().replace(/\s+/g, " ").trim();
}

/** Groupe (onglet) à partir du niveau, sinon de la classe. */
function groupeDe_(niveau, classe) {
  var n = sansAccents_(niveau).toLowerCase().replace(/\s/g, "");
  if (/^5/.test(n)) return "5e";
  if (/^4/.test(n)) return "4e";
  if (/^3/.test(n)) return "3e";
  if (/^2|^seconde/.test(n)) return "2de";
  var c = sansAccents_(classe).toLowerCase().replace(/\s/g, "");
  if (/^5/.test(c)) return "5e";
  if (/^4/.test(c)) return "4e";
  if (/^3/.test(c)) return "3e";
  if (/^2|^seconde/.test(c)) return "2de";
  return "Autres";
}

/** "12 / 19" -> {obtenus: 12, max: 19} */
function lireNote_(note) {
  var m = String(note || "").replace(",", ".").match(/(-?[\d.]+)\s*\/\s*([\d.]+)/);
  if (!m) return null;
  return { obtenus: parseFloat(m[1]), max: parseFloat(m[2]) };
}

function nombre_(v) {
  if (v === "" || v === null || v === undefined) return null;
  var x = parseFloat(String(v).replace(",", "."));
  return isNaN(x) ? null : x;
}

/** Type d'envoi : évaluation notée, Missions Scratch ou dessin SketchUp. */
function typeEnvoi_(d) {
  if (d._type === "sketchup" || d["Type"] === "Dessin SketchUp") return "Dessin SketchUp";
  if (d._type === "mission" || d["Séquence"] === "Missions Scratch") return "Missions Scratch";
  return "Évaluation";
}

/** Transforme les données reçues en une ligne du tableau. */
function ligneDepuisEnvoi_(d, lienCapture) {
  var type = typeEnvoi_(d);
  var mission = type !== "Évaluation";
  var note = lireNote_(d["Note"]);
  var sur20 = nombre_(d["Note sur 20"]);
  if (sur20 === null && note && note.max > 0) sur20 = Math.round(note.obtenus / note.max * 200) / 10;
  var detail = type === "Dessin SketchUp"
    ? [d["Fichier"] ? "fichier : " + d["Fichier"] : "",
       d["Commentaire"] ? "commentaire : " + d["Commentaire"] : ""].filter(String).join(" · ")
    : mission
    ? ["Palier " + (d["Palier"] || ""), "réussies : " + (d["Missions réussies"] || "aucune"),
       d["Commentaire"] ? "commentaire : " + d["Commentaire"] : ""].filter(String).join(" · ")
    : (d["Détail par question"] || "");
  return [
    d["Date"] || new Date().toLocaleString("fr-FR"),
    String(d["Nom"] || "").toUpperCase().trim(),
    String(d["Prénom"] || "").trim(),
    String(d["Classe"] || "").trim(),
    d["Séquence"] || "",
    d["Séance"] || d["Séances"] || "",
    type,
    type === "Dessin SketchUp" ? "Étape " + (d["Dernière étape"] || "") :
      mission ? "Mission " + (d["Dernière mission"] || "") : (note ? note.obtenus : (d["Note"] || "")),
    mission ? "" : (note ? note.max : ""),
    mission ? "" : (sur20 === null ? "" : sur20),
    detail,
    lienCapture || ""
  ];
}

function rangSequence_(nom) {
  if (nom === "Missions Scratch") return [9999, nom];
  if (/SketchUp/i.test(nom)) return [9000, nom];
  var m = String(nom).match(/S[ée]quence\s+(\d+)/i);
  if (m) return [parseInt(m[1], 10), nom];
  return [500, nom];
}

function trierSequences_(liste) {
  return liste.slice().sort(function (a, b) {
    var ra = rangSequence_(a), rb = rangSequence_(b);
    return ra[0] - rb[0] || (ra[1] < rb[1] ? -1 : ra[1] > rb[1] ? 1 : 0);
  });
}

function rangMission_(id) {
  var i = ORDRE_MISSIONS.indexOf(String(id));
  return i < 0 ? -1 : i;
}

function moyenne_(t) {
  if (!t.length) return "";
  var s = 0;
  t.forEach(function (x) { s += x; });
  return Math.round(s / t.length * 10) / 10;
}

/**
 * Calcule la synthèse d'un groupe à partir des lignes (sans l'en-tête).
 * Retourne {resume: tableau, eleves: tableau}.
 * Règle : pour chaque élève et chaque évaluation, la meilleure note /20 est
 * retenue ; la moyenne d'une séquence est la moyenne de ces meilleures notes.
 */
function calculerSynthese_(lignes) {
  var I = {};
  ENTETES.forEach(function (h, i) { I[h] = i; });
  var eleves = {}, sequences = {}, ordreEleves = [];
  lignes.forEach(function (l) {
    var nom = l[I["Nom"]], prenom = l[I["Prénom"]];
    if (!nom && !prenom) return;
    var k = cleEleve_(nom, prenom);
    if (!eleves[k]) {
      eleves[k] = { nom: nom, prenom: prenom, classe: l[I["Classe"]], evals: {}, mission: null,
                    etape: null, dernier: "" };
      ordreEleves.push(k);
    }
    var e = eleves[k];
    e.classe = l[I["Classe"]] || e.classe;
    e.dernier = l[I["Date"]] || e.dernier;
    var seq = l[I["Séquence"]] || "Sans séquence";
    sequences[seq] = sequences[seq] || { evals: {}, copies: 0, eleves: {}, notes: [], missions: [], etapes: [] };
    var S = sequences[seq];
    S.copies++;
    S.eleves[k] = true;
    if (l[I["Type"]] === "Dessin SketchUp") {
      var et = parseInt(String(l[I["Note"]]).replace(/\D/g, ""), 10);
      if (!isNaN(et)) {
        S.etapes.push(et);
        if (e.etape === null || et > e.etape) e.etape = et;
      }
      return;
    }
    if (l[I["Type"]] === "Missions Scratch") {
      var id = String(l[I["Note"]]).replace(/^Mission\s*/, "");
      S.missions.push(id);
      if (e.mission === null || rangMission_(id) > rangMission_(e.mission)) e.mission = id;
      return;
    }
    var n = nombre_(l[I["Note /20"]]);
    if (n === null) return;
    var ev = l[I["Évaluation"]] || "?";
    S.evals[ev] = true;
    e.evals[seq] = e.evals[seq] || {};
    if (e.evals[seq][ev] === undefined || n > e.evals[seq][ev]) e.evals[seq][ev] = n;
  });
  var listeSeq = trierSequences_(Object.keys(sequences));
  // meilleures notes par élève, puis statistiques par séquence
  var resume = [["Séquence", "Évaluations", "Élèves", "Envois", "Moyenne /20",
                 "Minimum", "Maximum", "Élèves ≥ 10", "Avancement le plus loin"]];
  listeSeq.forEach(function (seq) {
    var S = sequences[seq];
    var moyEleves = [];
    ordreEleves.forEach(function (k) {
      var ev = eleves[k].evals[seq];
      if (!ev) return;
      var t = Object.keys(ev).map(function (x) { return ev[x]; });
      moyEleves.push(moyenne_(t));
    });
    var plusLoin = "";
    S.missions.forEach(function (id) { if (plusLoin === "" || rangMission_(id) > rangMission_(plusLoin)) plusLoin = id; });
    var sup10 = moyEleves.filter(function (x) { return x >= 10; }).length;
    resume.push([seq, Object.keys(S.evals).length, Object.keys(S.eleves).length, S.copies,
                 moyEleves.length ? moyenne_(moyEleves) : "",
                 moyEleves.length ? Math.min.apply(null, moyEleves) : "",
                 moyEleves.length ? Math.max.apply(null, moyEleves) : "",
                 moyEleves.length ? sup10 + " / " + moyEleves.length : "",
                 plusLoin ? "Mission " + plusLoin :
                   (S.etapes.length ? "Étape " + Math.max.apply(null, S.etapes) : "")]);
  });
  var seqNotees = listeSeq.filter(function (s) {
    return s !== "Missions Scratch" && !sequences[s].etapes.length;
  });
  var ent = ["Nom", "Prénom", "Classe"].concat(seqNotees.map(function (s) { return s + " (/20)"; }))
    .concat(["Moyenne générale", "Missions Scratch : dernière mission",
             "SketchUp : dernière étape", "Dernier envoi"]);
  var tab = [ent];
  ordreEleves.sort(function (a, b) {
    var ea = eleves[a], eb = eleves[b];
    var c = String(ea.classe).localeCompare(String(eb.classe));
    return c || a.localeCompare(b);
  });
  ordreEleves.forEach(function (k) {
    var e = eleves[k], ligne = [e.nom, e.prenom, e.classe], toutes = [];
    seqNotees.forEach(function (seq) {
      var ev = e.evals[seq];
      if (!ev) { ligne.push(""); return; }
      var t = Object.keys(ev).map(function (x) { return ev[x]; });
      var m = moyenne_(t);
      toutes.push(m);
      ligne.push(m);
    });
    ligne.push(toutes.length ? moyenne_(toutes) : "");
    ligne.push(e.mission !== null ? "Mission " + e.mission : "");
    ligne.push(e.etape !== null ? "Étape " + e.etape : "");
    ligne.push(e.dernier);
    tab.push(ligne);
  });
  return { resume: resume, eleves: tab };
}

/* =====================================================================
 * Réception des envois (application web)
 * ===================================================================== */

function doPost(e) {
  var verrou = LockService.getScriptLock();
  try {
    var d = JSON.parse(e.postData.contents);
    verrou.waitLock(30000);
    enregistrer_(d, false);
    return repondre_({ success: true });
  } catch (err) {
    console.error(err);
    return repondre_({ success: false, error: String(err) });
  } finally {
    try { verrou.releaseLock(); } catch (x) {}
  }
}

function doGet() {
  return ContentService.createTextOutput("Service de résultats actif.");
}

function repondre_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function enregistrer_(d, sansMail) {
  var groupe = groupeDe_(d["Niveau"], d["Classe"]);
  var mission = typeEnvoi_(d) !== "Évaluation";  // Missions Scratch ou SketchUp : capture jointe
  var fichier = null, lien = "";
  var piece = null;
  if (mission && d.capture && d.capture.data) {
    piece = Utilities.newBlob(Utilities.base64Decode(d.capture.data),
                              d.capture.type || "image/jpeg",
                              d.capture.nom || "capture.jpg");
    // Rangement dans Drive si l'autorisation Drive est accordée ; sinon la
    // capture part seulement en pièce jointe du courriel.
    try {
      fichier = dossierCaptures_(groupe).createFile(piece);
      lien = fichier.getUrl();
    } catch (err) {
      console.warn("Capture non rangée dans Drive : " + err);
      lien = "pièce jointe du courriel";
    }
  }
  var ligne = ligneDepuisEnvoi_(d, lien);
  var feuille = feuilleGroupe_(groupe);
  feuille.appendRow(ligne);
  if (fichier) {
    feuille.getRange(feuille.getLastRow(), ENTETES.length)
      .setFormula('=HYPERLINK("' + lien + '","capture")');
  }
  majSynthese_(groupe);
  if (!sansMail && ((mission && CONFIG.MAIL_MISSIONS) || (!mission && CONFIG.MAIL_EVALUATIONS))) {
    envoyerMail_(d, ligne, groupe, piece);
  }
}

function envoyerMail_(d, ligne, groupe, piece) {
  var lignes = ENTETES.slice(0, ENTETES.length - 1).map(function (h, i) {
    return "<tr><th style='text-align:left;padding:3px 8px;background:#eef0fb'>" + h +
           "</th><td style='padding:3px 8px'>" + String(ligne[i]).replace(/</g, "&lt;") + "</td></tr>";
  }).join("");
  var corps = "<p>Groupe : <b>" + groupe + "</b></p><table style='border-collapse:collapse'>" +
              lignes + "</table><p><a href='" + classeur_().getUrl() + "'>Ouvrir le classeur des résultats</a></p>";
  var options = { htmlBody: corps, name: "Site Technologie et SNT" };
  if (piece) options.attachments = [piece];
  MailApp.sendEmail(CONFIG.DESTINATAIRE,
                    d._subject || ("Résultat " + ligne[1] + " " + ligne[2]),
                    "Nouveau résultat : voir la version HTML.", options);
}

/* =====================================================================
 * Classeur, onglets, mise en forme
 * ===================================================================== */

function classeur_() {
  var props = PropertiesService.getScriptProperties();
  var id = CONFIG.ID_CLASSEUR || props.getProperty("ID_CLASSEUR");
  if (id) return SpreadsheetApp.openById(id);
  var lie = SpreadsheetApp.getActiveSpreadsheet();
  if (lie) { props.setProperty("ID_CLASSEUR", lie.getId()); return lie; }
  var neuf = SpreadsheetApp.create(CONFIG.NOM_CLASSEUR);
  props.setProperty("ID_CLASSEUR", neuf.getId());
  return neuf;
}

function feuilleGroupe_(groupe) {
  var ss = classeur_();
  var f = ss.getSheetByName(groupe);
  if (!f) {
    f = ss.insertSheet(groupe);
    f.getRange(1, 1, 1, ENTETES.length).setValues([ENTETES])
      .setFontWeight("bold").setBackground("#4051b5").setFontColor("#ffffff");
    f.setFrozenRows(1);
    f.setColumnWidths(1, ENTETES.length, 110);
    f.setColumnWidth(5, 260);
    f.setColumnWidth(6, 260);
    f.setColumnWidth(11, 320);
    var regle = SpreadsheetApp.newConditionalFormatRule()
      .whenNumberLessThan(10).setFontColor("#c62828")
      .setRanges([f.getRange("J2:J")]).build();
    f.setConditionalFormatRules([regle]);
  }
  return f;
}

function majSynthese_(groupe) {
  var ss = classeur_();
  var src = feuilleGroupe_(groupe);
  var n = src.getLastRow();
  var lignes = n > 1 ? src.getRange(2, 1, n - 1, ENTETES.length).getValues() : [];
  var s = calculerSynthese_(lignes);
  var nom = groupe + " synthèse";
  var f = ss.getSheetByName(nom) || ss.insertSheet(nom);
  f.clear();
  f.getRange(1, 1).setValue("Synthèse " + groupe + " · mise à jour " +
                            new Date().toLocaleString("fr-FR")).setFontWeight("bold").setFontSize(12);
  f.getRange(3, 1).setValue("Résumé par séquence").setFontWeight("bold").setFontColor("#4051b5");
  f.getRange(4, 1, s.resume.length, s.resume[0].length).setValues(s.resume);
  f.getRange(4, 1, 1, s.resume[0].length).setFontWeight("bold").setBackground("#eef0fb");
  var debut = 4 + s.resume.length + 2;
  f.getRange(debut, 1).setValue("Par élève (meilleure note de chaque évaluation, moyenne par séquence)")
    .setFontWeight("bold").setFontColor("#4051b5");
  f.getRange(debut + 1, 1, s.eleves.length, s.eleves[0].length).setValues(s.eleves);
  f.getRange(debut + 1, 1, 1, s.eleves[0].length).setFontWeight("bold").setBackground("#eef0fb").setWrap(true);
  f.setFrozenColumns(3);
  f.setColumnWidth(1, 240);
  // ordre des onglets : 5e, 5e synthèse, 4e, 4e synthèse, etc.
  try {
    var place = 1;
    CONFIG.GROUPES.concat(["Autres"]).forEach(function (g) {
      [g, g + " synthèse"].forEach(function (x) {
        var sh = ss.getSheetByName(x);
        if (sh) { ss.setActiveSheet(sh); ss.moveActiveSheet(place++); }
      });
    });
  } catch (e) {}
}

function dossierCaptures_(groupe) {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty("ID_DOSSIER_CAPTURES");
  var racine = null;
  if (id) { try { racine = DriveApp.getFolderById(id); } catch (e) { racine = null; } }
  if (!racine) {
    racine = DriveApp.createFolder(CONFIG.DOSSIER_CAPTURES);
    props.setProperty("ID_DOSSIER_CAPTURES", racine.getId());
  }
  var it = racine.getFoldersByName(groupe);
  return it.hasNext() ? it.next() : racine.createFolder(groupe);
}

/* =====================================================================
 * Fonctions à lancer depuis l'éditeur ou le menu du classeur
 * ===================================================================== */

/** À exécuter une fois : autorisations, onglets, menu. */
function installer() {
  var ss = classeur_();
  CONFIG.GROUPES.forEach(function (g) { feuilleGroupe_(g); majSynthese_(g); });
  dossierCaptures_("5e");
  var defaut = ss.getSheetByName("Feuille 1") || ss.getSheetByName("Sheet1");
  if (defaut && defaut.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(defaut);
  console.log("Classeur : " + ss.getUrl());
}

function onOpen() {
  try {
    SpreadsheetApp.getUi().createMenu("Résultats élèves")
      .addItem("Recalculer les synthèses", "recalculerTout")
      .addItem("Reprendre l'historique d'un ancien onglet", "reprendreHistorique")
      .addToUi();
  } catch (e) {}
}

function recalculerTout() {
  var ss = classeur_();
  CONFIG.GROUPES.concat(["Autres"]).forEach(function (g) {
    if (ss.getSheetByName(g)) majSynthese_(g);
  });
}

/**
 * Recopie dans le nouveau format les lignes d'un ancien onglet dont la
 * première ligne contient au moins Nom, Prénom, Classe et Note (anciens
 * envois). Aucun courriel n'est envoyé. À lancer une seule fois.
 */
function reprendreHistorique() {
  var ss = classeur_();
  var gerees = {};
  CONFIG.GROUPES.concat(["Autres"]).forEach(function (g) { gerees[g] = 1; gerees[g + " synthèse"] = 1; });
  var total = 0;
  ss.getSheets().forEach(function (sh) {
    if (gerees[sh.getName()] || sh.getLastRow() < 2) return;
    var v = sh.getDataRange().getValues();
    var h = v[0].map(String);
    if (h.indexOf("Nom") < 0 || h.indexOf("Classe") < 0 || h.indexOf("Note") < 0) return;
    for (var r = 1; r < v.length; r++) {
      var d = {};
      h.forEach(function (k, i) { d[k] = v[r][i]; });
      if (d["Date"] instanceof Date) d["Date"] = d["Date"].toLocaleString("fr-FR");
      var g = groupeDe_(d["Niveau"], d["Classe"]);
      feuilleGroupe_(g).appendRow(ligneDepuisEnvoi_(d, ""));
      total++;
    }
  });
  recalculerTout();
  console.log(total + " lignes reprises");
}

if (typeof module !== "undefined") {
  module.exports = { groupeDe_: groupeDe_, lireNote_: lireNote_, ligneDepuisEnvoi_: ligneDepuisEnvoi_,
                     calculerSynthese_: calculerSynthese_, trierSequences_: trierSequences_, ENTETES: ENTETES };
}
