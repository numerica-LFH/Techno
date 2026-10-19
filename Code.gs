/**
 * Résultats des élèves : évaluations « S'évaluer », évaluations SNT et
 * progression des Missions Scratch et Missions Arduino, dessins SketchUp du projet jardin sec
 * (site numerica-lfh.github.io/Techno).
 *
 * Blog de la classe : les articles proposés par les élèves (page « Proposer
 * un article », envoi de type "article") s'inscrivent dans l'onglet « Blog »
 * avec le statut « À relire » et partent par courriel avec le fichier .md
 * prêt à publier et la photo. Rien n'est publié sans relecture.
 *
 * La semaine en images : les photos de la semaine sont rangées dans
 * Drive (« Blog · semaine en images », un dossier par semaine). Le montage du
 * vendredi (GitHub Actions, scripts/semaine_en_images.py) lit ce dossier avec
 * la clé CLE_MONTAGE, monte la vidéo et la renvoie ici ; elle est rangée dans
 * « Blog · vidéos » et partagée en lecture par lien.
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
  DOSSIER_BLOG: "Blog · propositions",
  DEPOT_BLOG: "https://github.com/numerica-LFH/Techno/upload/main/docs/blog/posts",
  FUSEAU: "America/Tegucigalpa",
  DOSSIER_IMAGES: "Blog · semaine en images",
  DOSSIER_VIDEOS: "Blog · vidéos",
  PAGE_PROPOSITIONS: "https://github.com/numerica-LFH/Techno/pulls",
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
  if (d["Séquence"] === "Missions Arduino") return "Missions Arduino";
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
  if (nom === "Missions Arduino") return [9998, nom];
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
      eleves[k] = { nom: nom, prenom: prenom, classe: l[I["Classe"]], evals: {}, mission: null, arduino: null,
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
    if (l[I["Type"]] === "Missions Arduino") {
      var ida = parseInt(String(l[I["Note"]]).replace(/\D/g, ""), 10);
      if (!isNaN(ida)) {
        S.missions.push(String(ida));
        if (e.arduino === null || ida > e.arduino) e.arduino = ida;
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
    S.missions.forEach(function (id) {
      if (seq === "Missions Arduino") { if (plusLoin === "" || +id > +plusLoin) plusLoin = id; }
      else if (plusLoin === "" || rangMission_(id) > rangMission_(plusLoin)) plusLoin = id;
    });
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
    return s !== "Missions Scratch" && s !== "Missions Arduino" && !sequences[s].etapes.length;
  });
  var ent = ["Nom", "Prénom", "Classe"].concat(seqNotees.map(function (s) { return s + " (/20)"; }))
    .concat(["Moyenne générale", "Missions Scratch : dernière mission", "Missions Arduino : dernière mission",
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
    ligne.push(e.arduino !== null ? "Mission " + (e.arduino < 10 ? "0" : "") + e.arduino : "");
    ligne.push(e.etape !== null ? "Étape " + e.etape : "");
    ligne.push(e.dernier);
    tab.push(ligne);
  });
  return { resume: resume, eleves: tab };
}

/* ---------- Blog : fabrication de l'article (fonctions pures) ---------- */

var RUBRIQUES_BLOG = ["Vie de la classe", "Projets", "Actions", "Veille"];
var ENTETES_BLOG = ["Date", "Nom", "Prénom", "Classe", "Rubrique", "Projet", "Titre",
                    "Statut", "Fichier", "Dossier Drive"];

function slug_(s, max) {
  var t = sansAccents_(s).toLowerCase().replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  t = t.slice(0, max || 50).replace(/-+$/, "");
  return t || "article";
}

/** Texte d'élève -> markdown sûr : pas de HTML, pas de titre ni de bloc spécial. */
function texteSur_(s) {
  var t = String(s || "").replace(/\r\n?/g, "\n").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  var paragraphes = t.split(/\n+/).map(function (l) {
    l = l.trim();
    if (/^(#|!!!|\?\?\?|---|\*\*\*|___|=+$|\[\^|\*\[)/.test(l)) l = "\\" + l;
    return l;
  }).filter(String);
  return paragraphes.join("\n\n");
}

function ligneSure_(s) {
  return texteSur_(s).replace(/\n+/g, " ").replace(/^\\/, "");
}

function yaml_(s) {
  return '"' + String(s || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/[\r\n]+/g, " ") + '"';
}

function majuscule_(s) {
  s = String(s || "").trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function sourceMarkdown_(src) {
  var titre = ligneSure_(src.titre || src.url || "Source").replace(/([\[\]])/g, "\\$1");
  var url = String(src.url || "").trim();
  var lien = /^https?:\/\/[^\s<>"]+$/.test(url)
    ? "[" + titre + "](" + url.replace(/\(/g, "%28").replace(/\)/g, "%29") + ")"
    : titre;
  var auteur = src.auteur ? ligneSure_(src.auteur) : "auteur non indiqué";
  var date = src.date ? "publié " + ligneSure_(src.date) : "date non indiquée";
  return lien + ", " + auteur + ", " + date + ".";
}

/**
 * Construit le fichier markdown d'un article proposé.
 * d : données reçues du formulaire ; dateIso : "2026-10-18" ;
 * nomPhoto : nom du fichier image joint, ou "" sans photo.
 * Retourne {base, nomFichier, contenu}.
 */
function construireArticle_(d, dateIso, nomPhoto) {
  var rubrique = RUBRIQUES_BLOG.indexOf(d["Rubrique"]) >= 0 ? d["Rubrique"] : "Veille";
  var veille = rubrique === "Veille";
  var titre = ligneSure_(d["Titre"]) || "Article sans titre";
  var prenom = majuscule_(ligneSure_(d["Prénom"]));
  var classe = ligneSure_(d["Classe"]);
  var projet = ligneSure_(d["Projet"]);
  var base = dateIso + "-" + slug_(titre, 45) + "-" + slug_(prenom, 15);
  var texte = texteSur_(d["Texte"]).split("\n\n");
  var sources = (d["Sources"] || []).filter(function (x) { return x && (x.titre || x.url); });
  var l = ["---", "date: " + dateIso, "slug: " + slug_(titre, 60), "categories:", "  - " + rubrique];
  if (projet) l.push("tags:", "  - " + yaml_(projet));
  l.push("---", "", "# " + titre, "", texte[0], "", "<!-- more -->", "");
  if (texte.length > 1) l.push(texte.slice(1).join("\n\n"), "");
  if (nomPhoto) {
    var legende = ligneSure_(d["Légende"]) || titre;
    l.push("![" + legende.replace(/([\[\]])/g, "\\$1") + "](" + nomPhoto + ")", "", "*" + legende + "*", "");
  }
  if (veille && d["Apport"]) l.push("## Ce que ça apporte au projet", "", texteSur_(d["Apport"]), "");
  if (sources.length) {
    l.push("## Sources", "");
    sources.forEach(function (x, i) { l.push((i + 1) + ". " + sourceMarkdown_(x)); });
    l.push("");
  }
  if (d["À vérifier"]) l.push("## À vérifier", "", texteSur_(d["À vérifier"]), "");
  l.push("---", "", "*Article proposé par " + prenom + (classe ? " (" + classe + ")" : "") + ".*", "");
  return { base: base, nomFichier: base + ".md", contenu: l.join("\n") };
}

/* ---------- Semaine en images : calcul des semaines (fonctions pures) ---------- */

var MOIS_FR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
               "août", "septembre", "octobre", "novembre", "décembre"];

function isoJour_(t) {
  var d = new Date(t);
  return d.getUTCFullYear() + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2);
}

/** "2026-10-21" -> {id: "2026-S43", lundi: "2026-10-19", vendredi: "2026-10-23"} (semaine ISO). */
function semaineDe_(dateIso) {
  var m = String(dateIso).match(/^(\d{4})-(\d{2})-(\d{2})/);
  var t = Date.UTC(+m[1], +m[2] - 1, +m[3]);
  var jour = (new Date(t).getUTCDay() + 6) % 7;          // lundi = 0
  var lundi = t - jour * 86400000;
  var jeudi = lundi + 3 * 86400000;
  var annee = new Date(jeudi).getUTCFullYear();
  var premier = Date.UTC(annee, 0, 1);
  var num = Math.floor((jeudi - premier) / 86400000 / 7) + 1;
  return { id: annee + "-S" + ("0" + num).slice(-2), lundi: isoJour_(lundi), vendredi: isoJour_(lundi + 4 * 86400000) };
}

/** "2026-S43" -> même objet que semaineDe_. */
function semaineDepuisId_(id) {
  var m = String(id).match(/^(\d{4})-S(\d{1,2})$/);
  if (!m) return null;
  var jan4 = Date.UTC(+m[1], 0, 4);
  var lundi1 = jan4 - ((new Date(jan4).getUTCDay() + 6) % 7) * 86400000;
  return semaineDe_(isoJour_(lundi1 + (+m[2] - 1) * 7 * 86400000));
}

/** Nom du dossier Drive : "2026-S43 · 19 au 23 octobre". */
function nomDossierSemaine_(sem) {
  var a = sem.lundi.split("-"), b = sem.vendredi.split("-");
  var jour = function (j) { return +j === 1 ? "1er" : String(+j); };
  var debut = jour(a[2]) + (a[1] !== b[1] ? " " + MOIS_FR[+a[1] - 1] : "");
  return sem.id + " · " + debut + " au " + jour(b[2]) + " " + MOIS_FR[+b[1] - 1];
}

/* =====================================================================
 * Réception des envois (application web)
 * ===================================================================== */

function doPost(e) {
  var verrou = LockService.getScriptLock();
  try {
    var d = JSON.parse(e.postData.contents);
    verrou.waitLock(30000);
    if (d._type === "video") {
      return repondre_(recevoirVideo_(d));
    }
    if (d._type === "article") {
      enregistrerArticle_(d);
      return repondre_({ success: true });
    }
    enregistrer_(d, false);
    return repondre_({ success: true });
  } catch (err) {
    console.error(err);
    return repondre_({ success: false, error: String(err) });
  } finally {
    try { verrou.releaseLock(); } catch (x) {}
  }
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action) {
    try { return repondre_(montage_(p)); }
    catch (err) { console.error(err); return repondre_({ success: false, error: String(err) }); }
  }
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
 * Blog : réception d'un article proposé
 * ===================================================================== */

function enregistrerArticle_(d) {
  var dateIso = Utilities.formatDate(new Date(), CONFIG.FUSEAU, "yyyy-MM-dd");
  var aPhoto = !!(d.photo && d.photo.data);
  var essai = construireArticle_(d, dateIso, "");
  var nomPhoto = aPhoto ? essai.base + ".jpg" : "";
  var art = construireArticle_(d, dateIso, nomPhoto);
  var pieces = [Utilities.newBlob(art.contenu, "text/plain", art.nomFichier)];
  if (aPhoto) {
    pieces.push(Utilities.newBlob(Utilities.base64Decode(d.photo.data), d.photo.type || "image/jpeg", nomPhoto));
  }
  var lienDossier = "", lienFichier = "";
  try {
    var dossier = dossierBlog_().createFolder(art.base);
    var f = dossier.createFile(pieces[0]);
    if (aPhoto) dossier.createFile(pieces[1]);
    lienDossier = dossier.getUrl();
    if (aPhoto) {
      var copie = dossierSemaine_(dateIso).createFile(pieces[1].copyBlob().setName("eleve-" + nomPhoto));
      var leg = String(d["Légende"] || d["Titre"] || "").trim();
      copie.setDescription(leg + " · " + String(d["Prénom"] || "").trim() + " (" + String(d["Classe"] || "").trim() + ")");
    }
    lienFichier = f.getUrl();
  } catch (err) {
    console.warn("Article non rangé dans Drive : " + err);
  }
  var feuille = feuilleBlog_();
  feuille.appendRow([
    d["Date"] || new Date().toLocaleString("fr-FR"),
    String(d["Nom"] || "").toUpperCase().trim(),
    String(d["Prénom"] || "").trim(),
    String(d["Classe"] || "").trim(),
    d["Rubrique"] || "", d["Projet"] || "", d["Titre"] || "",
    "À relire", art.nomFichier, lienDossier
  ]);
  if (lienDossier) {
    feuille.getRange(feuille.getLastRow(), ENTETES_BLOG.length)
      .setFormula('=HYPERLINK("' + lienDossier + '","dossier")');
  }
  envoyerMailArticle_(d, art, pieces, aPhoto, lienDossier);
}

function envoyerMailArticle_(d, art, pieces, aPhoto, lienDossier) {
  var esc = function (s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
  var corps =
    "<p><b>" + esc(d["Prénom"]) + " " + esc(String(d["Nom"] || "").toUpperCase()) + "</b> (" +
    esc(d["Classe"]) + ") propose un article pour le blog.</p>" +
    "<p>Rubrique : " + esc(d["Rubrique"]) + " · Projet : " + esc(d["Projet"]) + "</p>" +
    "<p><b>Pour publier</b> : relire le fichier joint, le corriger si besoin, puis " +
    "<a href='" + CONFIG.DEPOT_BLOG + "'>déposer " + (aPhoto ? "les deux fichiers joints" : "le fichier joint") +
    " dans docs/blog/posts sur GitHub</a> (Commit changes). Le site se met à jour en deux minutes. " +
    "Pour refuser, ne rien faire et passer le statut à « Refusé » dans l'onglet Blog.</p>" +
    (aPhoto ? "<p>La photo est aussi copiée dans le dossier de la semaine (« " + CONFIG.DOSSIER_IMAGES +
     " ») pour la vidéo du vendredi. Si l'article est refusé, supprimer le fichier « eleve-… » de ce dossier.</p>" : "") +
    (lienDossier ? "<p><a href='" + lienDossier + "'>Copie dans Google Drive</a></p>" : "") +
    "<pre style='white-space:pre-wrap;background:#eef0fb;padding:10px;border-radius:6px'>" +
    esc(art.contenu) + "</pre>";
  MailApp.sendEmail(CONFIG.DESTINATAIRE,
                    d._subject || ("Blog · proposition · " + (d["Titre"] || "")),
                    "Nouvel article proposé : voir la version HTML.",
                    { htmlBody: corps, name: "Blog de la classe", attachments: pieces });
}

function feuilleBlog_() {
  var ss = classeur_();
  var f = ss.getSheetByName("Blog");
  if (!f) {
    f = ss.insertSheet("Blog");
    f.getRange(1, 1, 1, ENTETES_BLOG.length).setValues([ENTETES_BLOG])
      .setFontWeight("bold").setBackground("#4051b5").setFontColor("#ffffff");
    f.setFrozenRows(1);
    f.setColumnWidths(1, ENTETES_BLOG.length, 110);
    f.setColumnWidth(7, 300);
    f.setColumnWidth(9, 280);
    var statuts = SpreadsheetApp.newDataValidation()
      .requireValueInList(["À relire", "Publié", "Refusé"], true).build();
    f.getRange("H2:H").setDataValidation(statuts);
  }
  return f;
}

function dossierBlog_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty("ID_DOSSIER_BLOG");
  if (id) { try { return DriveApp.getFolderById(id); } catch (e) {} }
  var dossier = DriveApp.createFolder(CONFIG.DOSSIER_BLOG);
  props.setProperty("ID_DOSSIER_BLOG", dossier.getId());
  return dossier;
}

/* =====================================================================
 * Semaine en images : dossiers, lecture pour le montage, réception vidéo
 * ===================================================================== */

function aujourdhui_() {
  return Utilities.formatDate(new Date(), CONFIG.FUSEAU, "yyyy-MM-dd");
}

function dossierParNom_(cleProp, nom) {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty(cleProp);
  if (id) { try { return DriveApp.getFolderById(id); } catch (e) {} }
  var dossier = DriveApp.createFolder(nom);
  props.setProperty(cleProp, dossier.getId());
  return dossier;
}

function dossierImages_() { return dossierParNom_("ID_DOSSIER_IMAGES", CONFIG.DOSSIER_IMAGES); }
function dossierVideos_() { return dossierParNom_("ID_DOSSIER_VIDEOS", CONFIG.DOSSIER_VIDEOS); }

/** Dossier de la semaine qui contient dateIso, créé s'il manque. */
function dossierSemaine_(dateIso, creer) {
  var sem = semaineDe_(dateIso);
  var it = dossierImages_().getFolders();
  while (it.hasNext()) {
    var f = it.next();
    if (f.getName().indexOf(sem.id) === 0) return f;
  }
  return creer === false ? null : dossierImages_().createFolder(nomDossierSemaine_(sem));
}

/** Déclencheur du lundi : prépare le dossier de la semaine pour les dépôts du téléphone. */
function creerDossierSemaine() {
  var f = dossierSemaine_(aujourdhui_());
  console.log("Dossier de la semaine : " + f.getName() + " " + f.getUrl());
}

function cleMontage_() {
  var props = PropertiesService.getScriptProperties();
  var cle = props.getProperty("CLE_MONTAGE");
  if (!cle) { cle = Utilities.getUuid().replace(/-/g, ""); props.setProperty("CLE_MONTAGE", cle); }
  return cle;
}

/** Lecture protégée pour le montage : liste de la semaine ou contenu d'une image. */
function montage_(p) {
  if (!p.cle || p.cle !== cleMontage_()) return { success: false, error: "clé refusée" };
  var racine = dossierImages_();
  if (p.action === "semaine") {
    var sem = p.semaine ? semaineDepuisId_(p.semaine) : semaineDe_(aujourdhui_());
    if (!sem) return { success: false, error: "semaine illisible" };
    var dossier = dossierSemaine_(sem.lundi, false);
    var images = [];
    if (dossier) {
      var it = dossier.getFiles();
      while (it.hasNext()) {
        var f = it.next();
        if (!/^image\//.test(f.getMimeType()) || f.isTrashed()) continue;
        images.push({ id: f.getId(), nom: f.getName(), legende: f.getDescription() || "",
                      date: f.getDateCreated().toISOString(), mime: f.getMimeType(), octets: f.getSize() });
      }
    }
    images.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    return { success: true, semaine: sem.id, lundi: sem.lundi, vendredi: sem.vendredi,
             titre: nomDossierSemaine_(sem), dossier: dossier ? dossier.getUrl() : "", images: images };
  }
  if (p.action === "image") {
    var fichier = DriveApp.getFileById(p.id);
    var parents = fichier.getParents();
    var autorise = false;
    while (parents.hasNext()) {
      var par = parents.next().getParents();
      while (par.hasNext()) { if (par.next().getId() === racine.getId()) autorise = true; }
    }
    if (!autorise) return { success: false, error: "image hors du dossier de la semaine" };
    return { success: true, mime: fichier.getMimeType(),
             data: Utilities.base64Encode(fichier.getBlob().getBytes()) };
  }
  return { success: false, error: "action inconnue" };
}

/** Vidéo montée par GitHub Actions : rangée dans Drive, partagée en lecture par lien. */
function recevoirVideo_(d) {
  if (!d.cle || d.cle !== cleMontage_()) return { success: false, error: "clé refusée" };
  var nom = "semaine-en-images-" + String(d.semaine || "").replace(/[^0-9A-Za-z-]/g, "") + ".mp4";
  var dossier = dossierVideos_();
  var anciens = dossier.getFilesByName(nom);
  while (anciens.hasNext()) anciens.next().setTrashed(true);
  var f = dossier.createFile(Utilities.newBlob(Utilities.base64Decode(d.data), "video/mp4", nom));
  f.setDescription(String(d.titre || ""));
  var partage = true;
  try { f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); }
  catch (err) { partage = false; console.warn("Partage par lien refusé : " + err); }
  MailApp.sendEmail(CONFIG.DESTINATAIRE, "Blog · la semaine en images " + (d.semaine || "") + " est prête",
    "Vidéo prête : voir la version HTML.", { name: "Blog de la classe", htmlBody:
      "<p>La vidéo de la semaine (" + String(d.nombre || "?") + " images) est rangée dans Drive : <a href='" +
      f.getUrl() + "'>" + nom + "</a>.</p>" +
      (partage ? "" : "<p><b>Le partage par lien a été refusé par le domaine</b> : la vidéo ne sera pas " +
       "visible sur le blog tant qu'elle n'est pas partagée « Tous les utilisateurs disposant du lien ».</p>") +
      "<p>L'article « La semaine en images » attend ta validation sur GitHub : <a href='" +
      CONFIG.PAGE_PROPOSITIONS + "'>ouvrir les propositions</a>, relire, puis « Merge pull request ». " +
      "Pour ne pas publier cette semaine, fermer la proposition.</p>" });
  return { success: true, id: f.getId(), url: f.getUrl(), partage: partage };
}

/** Affiche la clé et les dossiers à reporter dans GitHub (Settings > Secrets). */
function afficherCleMontage() {
  console.log("CLE_MONTAGE (secret GitHub) : " + cleMontage_());
  console.log("Dossier des images : " + dossierImages_().getUrl());
  console.log("Dossier de la semaine : " + dossierSemaine_(aujourdhui_()).getUrl());
  console.log("Dossier des vidéos : " + dossierVideos_().getUrl());
}

/** À exécuter une fois : dossier de la semaine recréé chaque lundi à 5 h. */
function installerDeclencheurs() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === "creerDossierSemaine") ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger("creerDossierSemaine").timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(5).inTimezone(CONFIG.FUSEAU).create();
  creerDossierSemaine();
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
  feuilleBlog_();
  dossierBlog_();
  dossierSemaine_(aujourdhui_());
  dossierVideos_();
  cleMontage_();
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
                     calculerSynthese_: calculerSynthese_, trierSequences_: trierSequences_, ENTETES: ENTETES,
                     construireArticle_: construireArticle_, slug_: slug_, texteSur_: texteSur_,
                     semaineDe_: semaineDe_, semaineDepuisId_: semaineDepuisId_,
                     nomDossierSemaine_: nomDossierSemaine_ };
}
