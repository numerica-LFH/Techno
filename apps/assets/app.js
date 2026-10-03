/* Moteur des applications interactives de technologie
   Lycée franco-hondurien de Tegucigalpa
   Aucune dépendance externe. Chaque page définit window.CHAPITRE avant d'appeler ce script. */

(function () {
  "use strict";

  var C = window.CHAPITRE;
  if (!C) { return; }

  var etat = { section: 0, vues: {} };

  function el(balise, classe, texte) {
    var n = document.createElement(balise);
    if (classe) { n.className = classe; }
    if (texte !== undefined) { n.textContent = texte; }
    return n;
  }

  function memoireLire(cle) {
    try { return window.localStorage.getItem(cle); } catch (e) { return null; }
  }
  function memoireEcrire(cle, valeur) {
    try { window.localStorage.setItem(cle, valeur); } catch (e) { /* stockage indisponible */ }
  }

  /* ---------- En-tête ---------- */

  function construireEntete() {
    var entete = el("header", "app-entete");
    var interne = el("div", "app-entete-interne");

    var retour = el("a", "app-retour", "← Retour au cours");
    retour.href = C.retour || "../";
    interne.appendChild(retour);

    interne.appendChild(el("span", "app-niveau", C.niveau));
    interne.appendChild(el("span", "app-titre-court", C.titre));

    var outils = el("div", "app-outils");

    var lecture = el("button", "app-bouton-outil", "Lecture facilitée");
    lecture.type = "button";
    lecture.setAttribute("aria-pressed", "false");
    lecture.addEventListener("click", function () {
      var actif = document.body.classList.toggle("lecture-facilitee");
      lecture.setAttribute("aria-pressed", actif ? "true" : "false");
      memoireEcrire("techno-lecture-facilitee", actif ? "1" : "0");
    });
    if (memoireLire("techno-lecture-facilitee") === "1") {
      document.body.classList.add("lecture-facilitee");
      lecture.setAttribute("aria-pressed", "true");
    }
    outils.appendChild(lecture);

    var imprimer = el("button", "app-bouton-outil", "Imprimer");
    imprimer.type = "button";
    imprimer.addEventListener("click", function () { window.print(); });
    outils.appendChild(imprimer);

    interne.appendChild(outils);
    entete.appendChild(interne);

    var progression = el("div", "app-progression");
    progression.appendChild(el("span"));
    entete.appendChild(progression);

    return entete;
  }

  /* ---------- Onglets ---------- */

  function construireOnglets() {
    var nav = el("nav", "app-onglets");
    nav.setAttribute("aria-label", "Étapes du chapitre");
    C.sections.forEach(function (section, i) {
      var b = el("button", "app-onglet", section.titre);
      b.type = "button";
      b.addEventListener("click", function () { aller(i); });
      nav.appendChild(b);
    });
    return nav;
  }

  /* ---------- Bloc d'ouverture ---------- */

  function construireOuverture() {
    var carte = el("section", "app-carte");
    carte.appendChild(el("h1", null, C.titre));
    if (C.sousTitre) { carte.appendChild(el("p", "app-sous-titre", C.sousTitre)); }

    if (C.question) {
      var q = el("div", "app-question");
      q.appendChild(el("span", "etiquette", "Question du chapitre"));
      q.appendChild(el("p", null, C.question));
      carte.appendChild(q);
    }

    if (C.objectifs && C.objectifs.length) {
      carte.appendChild(el("h2", null, "Ce que je dois savoir faire à la fin"));
      var liste = el("ul", "app-objectifs");
      C.objectifs.forEach(function (o) {
        var item = el("li", "app-objectif");
        item.appendChild(el("b", null, o.verbe));
        item.appendChild(document.createTextNode(o.texte));
        liste.appendChild(item);
      });
      carte.appendChild(liste);
    }

    if (C.competences) {
      var enc = el("div", "app-encadre");
      enc.innerHTML = "<p><b>Programme.</b> " + C.competences + "</p>";
      carte.appendChild(enc);
    }

    return carte;
  }

  /* ---------- Quiz ---------- */

  function construireQuiz(section, conteneur) {
    var formulaire = el("form", "app-quiz");
    formulaire.setAttribute("novalidate", "novalidate");

    section.quiz.forEach(function (q, i) {
      var bloc = el("div", "app-quiz-question");
      bloc.appendChild(el("p", "app-quiz-enonce", (i + 1) + ". " + q.enonce));

      var choix = el("div", "app-quiz-choix");
      q.choix.forEach(function (texte, j) {
        var label = el("label");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + i;
        input.value = String(j);
        label.appendChild(input);
        label.appendChild(el("span", null, texte));
        choix.appendChild(label);
      });
      bloc.appendChild(choix);

      var retour = el("p", "app-quiz-retour");
      retour.textContent = q.explication || "";
      bloc.appendChild(retour);

      formulaire.appendChild(bloc);
    });

    var actions = el("div", "app-actions");
    var verifier = el("button", "app-bouton", "Vérifier mes réponses");
    verifier.type = "submit";
    var recommencer = el("button", "app-bouton secondaire", "Recommencer");
    recommencer.type = "button";
    actions.appendChild(verifier);
    actions.appendChild(recommencer);
    formulaire.appendChild(actions);

    var score = el("p", "app-score");
    formulaire.appendChild(score);

    formulaire.addEventListener("submit", function (evenement) {
      evenement.preventDefault();
      var justes = 0;
      section.quiz.forEach(function (q, i) {
        var bloc = formulaire.querySelectorAll(".app-quiz-question")[i];
        var labels = bloc.querySelectorAll(".app-quiz-choix label");
        var choisi = formulaire.querySelector('input[name="q' + i + '"]:checked');
        Array.prototype.forEach.call(labels, function (label, j) {
          label.classList.remove("juste", "faux");
          if (j === q.bonne) { label.classList.add("juste"); }
          if (choisi && Number(choisi.value) === j && j !== q.bonne) { label.classList.add("faux"); }
        });
        if (choisi && Number(choisi.value) === q.bonne) { justes += 1; }
        bloc.querySelector(".app-quiz-retour").classList.add("visible");
      });
      score.textContent = "Score : " + justes + " sur " + section.quiz.length +
        (justes === section.quiz.length ? ". Tout est juste." : ". Je relis les explications puis je recommence.");
      score.classList.add("visible");
    });

    recommencer.addEventListener("click", function () {
      formulaire.reset();
      Array.prototype.forEach.call(formulaire.querySelectorAll(".app-quiz-choix label"), function (l) {
        l.classList.remove("juste", "faux");
      });
      Array.prototype.forEach.call(formulaire.querySelectorAll(".app-quiz-retour"), function (r) {
        r.classList.remove("visible");
      });
      score.classList.remove("visible");
    });

    conteneur.appendChild(formulaire);
  }

  /* ---------- Sections ---------- */

  function construireSections() {
    var zone = el("div", "app-sections");
    C.sections.forEach(function (section, i) {
      var bloc = el("section", "app-carte app-section");
      bloc.id = "section-" + i;
      bloc.setAttribute("tabindex", "-1");
      if (i === 0 && C.ouvertureDansPremiereSection !== false) {
        // la première section suit le bloc d'ouverture
      }
      bloc.appendChild(el("h2", null, section.titre));
      if (section.html) {
        var corps = el("div");
        corps.innerHTML = section.html;
        bloc.appendChild(corps);
      }
      if (section.quiz) { construireQuiz(section, bloc); }
      zone.appendChild(bloc);
    });
    return zone;
  }

  function construireNavBas() {
    var nav = el("div", "app-nav-bas");
    var precedent = el("button", "app-bouton secondaire", "Précédent");
    precedent.type = "button";
    precedent.addEventListener("click", function () { aller(etat.section - 1); });
    var position = el("span", "app-position");
    var suivant = el("button", "app-bouton", "Suivant");
    suivant.type = "button";
    suivant.addEventListener("click", function () { aller(etat.section + 1); });
    nav.appendChild(precedent);
    nav.appendChild(position);
    nav.appendChild(suivant);
    return nav;
  }

  function aller(index) {
    if (index < 0 || index >= C.sections.length) { return; }
    etat.section = index;
    etat.vues[index] = true;

    Array.prototype.forEach.call(document.querySelectorAll(".app-section"), function (s, i) {
      s.style.display = i === index ? "block" : "none";
    });
    Array.prototype.forEach.call(document.querySelectorAll(".app-onglet"), function (o, i) {
      o.setAttribute("aria-current", i === index ? "true" : "false");
      if (etat.vues[i] && i !== index) { o.classList.add("fait"); }
    });

    document.querySelector(".app-progression span").style.width =
      Math.round(((index + 1) / C.sections.length) * 100) + "%";
    document.querySelector(".app-position").textContent =
      "Étape " + (index + 1) + " sur " + C.sections.length;
    document.querySelector(".app-nav-bas .secondaire").disabled = index === 0;
    document.querySelector(".app-nav-bas .app-bouton:not(.secondaire)").disabled =
      index === C.sections.length - 1;

    var actif = document.getElementById("section-" + index);
    if (actif) { actif.focus({ preventScroll: true }); }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", "#etape-" + (index + 1));
    }
  }

  /* ---------- Montage ---------- */

  function demarrer() {
    document.title = C.titre + " - Technologie LFH";
    document.body.appendChild(construireEntete());
    document.body.appendChild(construireOnglets());

    var contenu = el("main", "app-contenu");
    contenu.appendChild(construireOuverture());
    contenu.appendChild(construireSections());
    contenu.appendChild(construireNavBas());
    document.body.appendChild(contenu);

    var pied = el("footer", "app-pied");
    pied.innerHTML = C.pied ||
      "Lycée franco-hondurien de Tegucigalpa. Contenu aligné sur le programme de technologie du cycle 4, BO n° 9 du 29 février 2024.";
    document.body.appendChild(pied);

    var depart = 0;
    var ancre = /^#etape-(\d+)$/.exec(window.location.hash || "");
    if (ancre) { depart = Math.min(C.sections.length - 1, Math.max(0, Number(ancre[1]) - 1)); }
    aller(depart);

    document.dispatchEvent(new CustomEvent("app-pret", { detail: { chapitre: C } }));

    document.addEventListener("keydown", function (e) {
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) { return; }
      if (e.key === "ArrowRight") { aller(etat.section + 1); }
      if (e.key === "ArrowLeft") { aller(etat.section - 1); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", demarrer);
  } else {
    demarrer();
  }
}());
