/* Missions Scratch : missions cochées et envoi « Où j'en suis » au professeur.
   L'envoi passe par le même script Google Apps Script que les évaluations :
   courriel à numerica@liceofranco.org (capture en pièce jointe) et ligne dans
   le classeur des résultats. */
(function () {
  "use strict";
  var URL_ENVOI = "https://script.google.com/macros/s/AKfycbzcci8gsqn9-S4POXNfiriuP4ymF54N0DN5xSHce67B8LJhhm8JfGmD8141H-rB-PtdJg/exec";
  var CIBLE = "numerica@liceofranco.org";
  var CLE_REUSSIES = "lfh_missions_scratch";
  var CLE_ELEVE = "lfh_eleve";

  function lire(cle, defaut) {
    try { var v = JSON.parse(localStorage.getItem(cle) || "null"); return v === null ? defaut : v; }
    catch (e) { return defaut; }
  }
  function ecrire(cle, v) { try { localStorage.setItem(cle, JSON.stringify(v)); } catch (e) {} }

  /* ---------- cases « J'ai réussi » ---------- */
  function cases() {
    var faites = lire(CLE_REUSSIES, {});
    var boites = document.querySelectorAll(".mission-reussie input[data-mission]");
    Array.prototype.forEach.call(boites, function (b) {
      var id = b.getAttribute("data-mission");
      b.checked = !!faites[id];
      b.parentNode.classList.toggle("faite", b.checked);
      b.addEventListener("change", function () {
        var f = lire(CLE_REUSSIES, {});
        if (b.checked) { f[id] = new Date().toISOString(); } else { delete f[id]; }
        ecrire(CLE_REUSSIES, f);
        b.parentNode.classList.toggle("faite", b.checked);
        majResume();
      });
    });
  }

  var missions = [];
  function reussies() {
    var f = lire(CLE_REUSSIES, {});
    return missions.filter(function (m) { return f[m.id]; }).map(function (m) { return m.id; });
  }
  function majResume() {
    var r = document.getElementById("pm-resume");
    if (!r) return;
    var ids = reussies();
    r.textContent = ids.length ? "Missions cochées sur cette page : " + ids.join(", ") + "."
                               : "Aucune mission cochée sur cette page pour l'instant.";
    var sel = document.getElementById("pm-derniere");
    if (sel && ids.length && !sel.dataset.touche) sel.value = ids[ids.length - 1];
    if (MODE === "sketchup") r.textContent = "J'indique la dernière étape réussie et j'ajoute la capture de mon dessin.";
  }

  /* ---------- formulaire ---------- */
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) { if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]); }
    if (html) e.innerHTML = html;
    return e;
  }

  var capture = null; // {data, type, nom}
  var MODE = "scratch";
  var TXT = {
    scratch: { derniere: "Dernière mission terminée", capture: "Capture d'écran de mon programme",
               bloque: "Ce qui me bloque ou ce que j'ai ajouté (facultatif)", bouton: "J'envoie ma progression",
               manqueCapture: "J'ajoute d'abord la capture d'écran de mon programme." },
    sketchup: { derniere: "Dernière étape terminée", capture: "Capture d'écran de mon dessin SketchUp",
                bloque: "Ce qui me bloque ou ce que j'ai ajouté (facultatif)", bouton: "J'envoie mon dessin",
                manqueCapture: "J'ajoute d'abord la capture d'écran de mon dessin." }
  };

  function compresser(fichier, rappel) {
    var lecteur = new FileReader();
    lecteur.onload = function () {
      var img = new Image();
      img.onload = function () {
        var max = 1600, w = img.width, h = img.height;
        if (w > max || h > max) { var r = Math.min(max / w, max / h); w = Math.round(w * r); h = Math.round(h * r); }
        var c = document.createElement("canvas");
        c.width = w; c.height = h;
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        var url = c.toDataURL("image/jpeg", 0.85);
        rappel({ data: url.split(",")[1], type: "image/jpeg", apercu: url });
      };
      img.onerror = function () { rappel(null); };
      img.src = lecteur.result;
    };
    lecteur.readAsDataURL(fichier);
  }

  function prendreCapture(fichier) {
    var etat = document.getElementById("pm-capture-etat");
    if (!fichier || !/^image\//.test(fichier.type)) { etat.textContent = "Ce fichier n'est pas une image."; return; }
    etat.textContent = "Préparation de l'image en cours.";
    compresser(fichier, function (r) {
      if (!r) { etat.textContent = "Image illisible, je réessaie avec une autre capture."; return; }
      capture = r;
      document.getElementById("pm-apercu").src = r.apercu;
      document.getElementById("pm-apercu").hidden = false;
      etat.textContent = "Capture prête.";
    });
  }

  function construire(boite) {
    var pal = boite.getAttribute("data-palier");
    MODE = boite.getAttribute("data-type") === "sketchup" ? "sketchup" : "scratch";
    var T = TXT[MODE];
    var niveau = boite.getAttribute("data-niveau");
    var options = missions.map(function (m) {
      return '<option value="' + m.id + '">' + (MODE === "sketchup" ? "Étape " : "Mission ") + m.id + " · " + m.titre + "</option>";
    }).join("");
    boite.className = "pm-formulaire";
    boite.innerHTML =
      '<p id="pm-resume" class="pm-resume"></p>' +
      '<div class="pm-grille">' +
      '<label>Nom de famille<input id="pm-nom" type="text" autocomplete="family-name"></label>' +
      '<label>Prénom<input id="pm-prenom" type="text" autocomplete="given-name"></label>' +
      '<label>Classe<input id="pm-classe" type="text" placeholder="' + niveau + 'A" autocomplete="off"></label>' +
      '<label>Niveau<select id="pm-niveau"><option>5e</option><option>4e</option><option>3e</option><option>2de</option></select></label>' +
      "</div>" +
      '<label class="pm-large">' + T.derniere + '<select id="pm-derniere">' + options + "</select></label>" +
      (MODE === "sketchup" ? '<label class="pm-large">Nom du fichier enregistré dans SketchUp (facultatif)<input id="pm-nomfichier" type="text" autocomplete="off"></label>' : "") +
      '<label class="pm-large">' + T.bloque + '<textarea id="pm-commentaire" rows="2"></textarea></label>' +
      '<div class="pm-capture" id="pm-zone" tabindex="0">' +
      "<strong>" + T.capture + "</strong><br>" +
      "Je fais la capture (Windows + Maj + S, ou Cmd + Ctrl + Maj + 4 sur Mac), je clique ici puis je colle (Ctrl + V ou Cmd + V)." +
      '<br>Ou je choisis le fichier : <input id="pm-fichier" type="file" accept="image/*">' +
      '<p id="pm-capture-etat" class="pm-etat"></p><img id="pm-apercu" alt="Aperçu de la capture" hidden>' +
      "</div>" +
      '<button id="pm-envoyer" class="md-button md-button--primary" type="button">' + T.bouton + "</button>" +
      '<p id="pm-statut" class="pm-statut" role="status"></p>';

    document.getElementById("pm-niveau").value = niveau;
    var eleve = lire(CLE_ELEVE, null);
    if (eleve) {
      document.getElementById("pm-nom").value = eleve.nom || "";
      document.getElementById("pm-prenom").value = eleve.prenom || "";
      document.getElementById("pm-classe").value = eleve.classe || "";
    }
    var sel = document.getElementById("pm-derniere");
    sel.addEventListener("change", function () { sel.dataset.touche = "1"; });
    document.getElementById("pm-fichier").addEventListener("change", function (e) {
      prendreCapture(e.target.files[0]);
    });
    document.getElementById("pm-zone").addEventListener("paste", function (e) {
      var items = (e.clipboardData || {}).items || [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") === 0) { prendreCapture(items[i].getAsFile()); e.preventDefault(); return; }
      }
      document.getElementById("pm-capture-etat").textContent = "Le presse-papiers ne contient pas d'image.";
    });
    document.getElementById("pm-envoyer").addEventListener("click", function () { envoyer(pal); });
    majResume();
  }

  function envoyer(pal) {
    var statut = document.getElementById("pm-statut");
    var champs = ["pm-nom", "pm-prenom", "pm-classe"].map(function (id) { return document.getElementById(id); });
    var manque = false;
    champs.forEach(function (c) { c.classList.toggle("manque", !c.value.trim()); if (!c.value.trim()) manque = true; });
    if (manque) { statut.className = "pm-statut ko"; statut.textContent = "Nom, prénom et classe sont obligatoires."; return; }
    if (!capture) {
      statut.className = "pm-statut ko";
      statut.textContent = TXT[MODE].manqueCapture;
      document.getElementById("pm-zone").classList.add("manque");
      return;
    }
    document.getElementById("pm-zone").classList.remove("manque");
    var nom = champs[0].value.trim(), prenom = champs[1].value.trim(), classe = champs[2].value.trim();
    ecrire(CLE_ELEVE, { nom: nom, prenom: prenom, classe: classe });
    var id = document.getElementById("pm-derniere").value;
    var m = missions.filter(function (x) { return x.id === id; })[0] || { id: id, titre: "" };
    var niveau = document.getElementById("pm-niveau").value;
    var donnees = MODE === "sketchup" ? {
      _type: "sketchup",
      _subject: "SketchUp " + niveau + " · Étape " + m.id + " · " + nom.toUpperCase() + " " + prenom,
      "Nom": nom.toUpperCase(),
      "Prénom": prenom,
      "Classe": classe,
      "Niveau": niveau,
      "Séquence": "Projet jardin sec · SketchUp",
      "Séance": pal + " · Étape " + m.id + " " + m.titre,
      "Dernière étape": m.id,
      "Fichier": (document.getElementById("pm-nomfichier") || { value: "" }).value.trim(),
      "Commentaire": document.getElementById("pm-commentaire").value.trim(),
      "Date": new Date().toLocaleString("fr-FR"),
      "capture": { nom: "sketchup-etape-" + m.id + "-" + nom.toLowerCase() + ".jpg", type: capture.type, data: capture.data }
    } : {
      _type: "mission",
      _subject: "Missions Scratch " + niveau + " · Mission " + m.id + " · " + nom.toUpperCase() + " " + prenom,
      "Nom": nom.toUpperCase(),
      "Prénom": prenom,
      "Classe": classe,
      "Niveau": niveau,
      "Séquence": "Missions Scratch",
      "Séance": "Palier " + pal + " · Mission " + m.id + " " + m.titre,
      "Dernière mission": m.id,
      "Palier": pal,
      "Missions réussies": reussies().join(", "),
      "Commentaire": document.getElementById("pm-commentaire").value.trim(),
      "Date": new Date().toLocaleString("fr-FR"),
      "capture": { nom: "mission-" + m.id + "-" + nom.toLowerCase() + ".jpg", type: capture.type, data: capture.data }
    };
    var bouton = document.getElementById("pm-envoyer");
    bouton.disabled = true;
    statut.className = "pm-statut attente";
    statut.textContent = "Envoi en cours.";
    fetch(URL_ENVOI, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(donnees) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (r && (r.success === true || r.success === "true")) {
          statut.className = "pm-statut ok";
          statut.textContent = (MODE === "sketchup" ? "Dessin envoyé au professeur (étape " : "Progression envoyée au professeur (mission ") +
            m.id + "). Rien d'autre à faire.";
        } else { throw new Error("refus"); }
      })
      .catch(function () {
        statut.className = "pm-statut ko";
        var corps = Object.keys(donnees).filter(function (k) { return k.charAt(0) !== "_" && k !== "capture"; })
          .map(function (k) { return k + " : " + donnees[k]; }).join("\n");
        statut.innerHTML = "L'envoi automatique n'a pas abouti. " +
          '<a href="mailto:' + CIBLE + "?subject=" + encodeURIComponent(donnees._subject) +
          "&body=" + encodeURIComponent(corps + "\n\n(Je joins ma capture d'écran à ce message.)") +
          '">J\'envoie depuis ma messagerie</a> en joignant ma capture.';
      })
      .then(function () { bouton.disabled = false; });
  }

  function demarrer() {
    cases();
    var boite = document.getElementById("progression-missions");
    var data = document.getElementById("missions-data");
    if (!boite || !data) return;
    try { missions = JSON.parse(data.textContent); } catch (e) { missions = []; }
    construire(boite);
  }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", demarrer); }
  else { demarrer(); }
})();
