/* Blog de la classe : formulaire « Proposer un article ».
   L'article part au même Apps Script que les évaluations (Code.gs, envoi de
   type "article") : ligne dans l'onglet « Blog » du classeur, courriel à
   numerica@liceofranco.org avec le fichier .md prêt à publier et la photo.
   Rien n'est publié sans la relecture du professeur. */
(function () {
  "use strict";

  var URL_ENVOI = "https://script.google.com/macros/s/AKfycbzcci8gsqn9-S4POXNfiriuP4ymF54N0DN5xSHce67B8LJhhm8JfGmD8141H-rB-PtdJg/exec";
  var CIBLE = "numerica@liceofranco.org";
  var CLE_BROUILLON = "lfh_blog_brouillon";
  var MAX_SOURCES = 4;
  var photo = null; // {data, type, apercu}

  function $(id) { return document.getElementById(id); }
  function val(id) { var e = $(id); return e ? e.value.trim() : ""; }

  /* ---------- sources ---------- */
  function ajouterSource(s) {
    var zone = $("bp-sources");
    var n = zone.children.length;
    if (n >= MAX_SOURCES) return;
    s = s || {};
    var bloc = document.createElement("div");
    bloc.className = "bp-source pm-grille";
    bloc.innerHTML =
      '<label>Titre de la page <input type="text" class="bp-s-titre" maxlength="120"></label>' +
      '<label>Adresse (https://) <input type="text" class="bp-s-url" maxlength="400" inputmode="url"></label>' +
      '<label>Auteur ou organisme <input type="text" class="bp-s-auteur" maxlength="80" placeholder="inconnu si absent"></label>' +
      '<label>Date de publication <input type="text" class="bp-s-date" maxlength="30" placeholder="ex. mars 2026"></label>';
    zone.appendChild(bloc);
    bloc.querySelector(".bp-s-titre").value = s.titre || "";
    bloc.querySelector(".bp-s-url").value = s.url || "";
    bloc.querySelector(".bp-s-auteur").value = s.auteur || "";
    bloc.querySelector(".bp-s-date").value = s.date || "";
    if (zone.children.length >= MAX_SOURCES) $("bp-ajouter-source").hidden = true;
  }

  function lireSources() {
    var t = [];
    Array.prototype.forEach.call(document.querySelectorAll("#bp-sources .bp-source"), function (b) {
      var s = {
        titre: b.querySelector(".bp-s-titre").value.trim(),
        url: b.querySelector(".bp-s-url").value.trim(),
        auteur: b.querySelector(".bp-s-auteur").value.trim(),
        date: b.querySelector(".bp-s-date").value.trim()
      };
      if (s.titre || s.url) t.push(s);
    });
    return t;
  }

  /* ---------- photo ---------- */
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

  function prendrePhoto(fichier) {
    var etat = $("bp-photo-etat");
    if (!fichier || !/^image\//.test(fichier.type)) { etat.textContent = "Ce fichier n'est pas une image."; return; }
    etat.textContent = "Préparation de l'image en cours.";
    compresser(fichier, function (r) {
      if (!r) { etat.textContent = "Image illisible, j'essaie avec une autre photo."; return; }
      photo = r;
      $("bp-apercu").src = r.apercu;
      $("bp-apercu").hidden = false;
      $("bp-legende-zone").hidden = false;
      etat.textContent = "Photo prête. Je vérifie qu'aucun visage n'apparaît.";
    });
  }

  /* ---------- brouillon (dans ce navigateur seulement) ---------- */
  var CHAMPS = ["bp-prenom", "bp-nom", "bp-niveau", "bp-classe", "bp-rubrique", "bp-projet",
                "bp-projet-autre", "bp-titre", "bp-resume", "bp-apport", "bp-verifier", "bp-legende"];

  function garder() {
    var b = { sources: lireSources() };
    CHAMPS.forEach(function (id) { b[id] = val(id); });
    try { localStorage.setItem(CLE_BROUILLON, JSON.stringify(b)); } catch (e) {}
  }

  function reprendre() {
    var b = null;
    try { b = JSON.parse(localStorage.getItem(CLE_BROUILLON) || "null"); } catch (e) { b = null; }
    if (b) CHAMPS.forEach(function (id) { if (b[id] && $(id)) $(id).value = b[id]; });
    var sources = b && b.sources && b.sources.length ? b.sources : [{}];
    sources.forEach(ajouterSource);
  }

  function oublier() { try { localStorage.removeItem(CLE_BROUILLON); } catch (e) {} }

  /* ---------- affichage selon la rubrique ---------- */
  function majRubrique() {
    var veille = $("bp-rubrique").value === "Veille";
    $("bp-resume-titre").textContent = veille ? "Ce que j'ai trouvé" : "Ce qui s'est passé";
    $("bp-apport-zone").hidden = !veille;
    $("bp-sources-aide").textContent = veille
      ? "Au moins une source pour un article de veille."
      : "Facultatif : les liens utiles pour en savoir plus.";
    $("bp-projet-autre-zone").hidden = $("bp-projet").value !== "autre";
  }

  function compter() {
    var n = val("bp-resume").length;
    $("bp-resume-compte").textContent = n + " / 1500 caractères" + (n && n < 200 ? " (200 au moins)" : "");
  }

  /* ---------- contrôle et envoi ---------- */
  function marquer(id, mauvais) {
    var e = $(id);
    if (e) e.classList.toggle("manque", !!mauvais);
    return mauvais ? 1 : 0;
  }

  function verifier() {
    var veille = $("bp-rubrique").value === "Veille";
    var erreurs = 0, messages = [];
    erreurs += marquer("bp-prenom", !val("bp-prenom"));
    erreurs += marquer("bp-nom", !val("bp-nom"));
    erreurs += marquer("bp-niveau", !val("bp-niveau"));
    erreurs += marquer("bp-classe", !val("bp-classe"));
    erreurs += marquer("bp-projet", !val("bp-projet"));
    erreurs += marquer("bp-projet-autre", val("bp-projet") === "autre" && !val("bp-projet-autre"));
    erreurs += marquer("bp-titre", val("bp-titre").length < 8);
    erreurs += marquer("bp-resume", val("bp-resume").length < 200);
    if (val("bp-resume").length < 200) messages.push("le texte principal fait au moins 200 caractères");
    if (veille) erreurs += marquer("bp-apport", val("bp-apport").length < 40);
    var sources = lireSources();
    var urlMauvaise = sources.some(function (s) { return !/^https?:\/\/\S+\.\S+/.test(s.url); });
    if (urlMauvaise) { erreurs++; messages.push("chaque source a une adresse qui commence par https://"); }
    if (veille && !sources.length) { erreurs++; messages.push("un article de veille cite au moins une source"); }
    if (!$("bp-mots").checked || !$("bp-visage").checked) { erreurs++; messages.push("je coche les deux engagements"); }
    if (!erreurs) return null;
    return "Il manque des éléments (cases en rouge)" + (messages.length ? " : " + messages.join(", ") : "") + ".";
  }

  function envoyer() {
    var statut = $("bp-statut");
    var probleme = verifier();
    if (probleme) { statut.className = "pm-statut ko"; statut.textContent = probleme; return; }
    if (val("bp-site")) { statut.className = "pm-statut ok"; statut.textContent = "Article envoyé."; return; }

    var projet = val("bp-projet") === "autre" ? val("bp-projet-autre") : val("bp-projet");
    var prenom = val("bp-prenom"), nom = val("bp-nom");
    var donnees = {
      _type: "article",
      _subject: "Blog · proposition · " + val("bp-classe") + " · " + prenom + " " + nom.toUpperCase() + " · " + val("bp-titre"),
      "Prénom": prenom,
      "Nom": nom,
      "Niveau": val("bp-niveau"),
      "Classe": val("bp-classe"),
      "Rubrique": $("bp-rubrique").value,
      "Projet": projet,
      "Titre": val("bp-titre"),
      "Texte": val("bp-resume"),
      "Apport": $("bp-rubrique").value === "Veille" ? val("bp-apport") : "",
      "À vérifier": val("bp-verifier"),
      "Sources": lireSources(),
      "Légende": photo ? val("bp-legende") : "",
      "Date": new Date().toLocaleString("fr-FR")
    };
    if (photo) donnees.photo = { type: photo.type, data: photo.data };

    var bouton = $("bp-envoyer");
    bouton.disabled = true;
    statut.className = "pm-statut attente";
    statut.textContent = "Envoi en cours.";
    fetch(URL_ENVOI, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(donnees) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (!r || !(r.success === true || r.success === "true")) throw new Error("refus");
        statut.className = "pm-statut ok";
        statut.textContent = "Article envoyé au professeur. Il sera publié après relecture.";
        oublier();
      })
      .catch(function () {
        statut.className = "pm-statut ko";
        var corps = ["Prénom", "Nom", "Classe", "Rubrique", "Projet", "Titre", "Texte", "Apport", "À vérifier"]
          .map(function (k) { return k + " : " + (donnees[k] || ""); }).join("\n") + "\nSources :\n" +
          donnees.Sources.map(function (s) { return "- " + s.titre + " " + s.url + " (" + s.auteur + ", " + s.date + ")"; }).join("\n");
        statut.innerHTML = "L'envoi automatique n'a pas abouti. Mon texte est gardé dans ce navigateur. " +
          '<a href="mailto:' + CIBLE + "?subject=" + encodeURIComponent(donnees._subject) +
          "&body=" + encodeURIComponent(corps) + '">J\'envoie depuis ma messagerie</a>' +
          (photo ? " en joignant ma photo." : ".");
      })
      .then(function () { bouton.disabled = false; });
  }

  function demarrer() {
    if (!$("blog-proposer")) return;
    reprendre();
    majRubrique();
    compter();
    $("bp-rubrique").addEventListener("change", majRubrique);
    $("bp-projet").addEventListener("change", majRubrique);
    $("bp-resume").addEventListener("input", compter);
    $("bp-ajouter-source").addEventListener("click", function () { ajouterSource({}); });
    $("blog-proposer").addEventListener("input", function (e) {
      if (e.target && e.target.classList) e.target.classList.remove("manque");
      garder();
    });
    $("blog-proposer").addEventListener("change", garder);
    $("bp-fichier").addEventListener("change", function () { prendrePhoto(this.files[0]); });
    $("bp-zone").addEventListener("paste", function (e) {
      var items = (e.clipboardData || {}).items || [];
      for (var i = 0; i < items.length; i++) {
        if (/^image\//.test(items[i].type)) { prendrePhoto(items[i].getAsFile()); e.preventDefault(); return; }
      }
      $("bp-photo-etat").textContent = "Le presse-papiers ne contient pas d'image.";
    });
    $("bp-envoyer").addEventListener("click", envoyer);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", demarrer);
  else demarrer();
})();
