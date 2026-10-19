---
hide:
  - toc
---

# Proposer un article

Ce formulaire envoie un article au professeur. Il le relit, le corrige si
besoin, puis le publie sur le blog avec le prénom et la classe de l'élève. Le
nom de famille sert seulement au professeur et n'est jamais publié.

!!! info "Avant d'envoyer"

    - J'écris avec mes propres mots. Une phrase recopiée se met entre
      guillemets, avec sa source.
    - Je cite au moins une source : titre, adresse, auteur ou organisme, date.
    - Ma photo, si j'en joins une, montre un objet, une maquette, des mains ou
      un écran. Aucun visage, aucun nom lisible. Elle peut aussi apparaître,
      avec sa légende, dans la vidéo « La semaine en images » du vendredi.

<div id="blog-proposer" class="pm-formulaire bp-formulaire" markdown="0">
  <noscript>Ce formulaire a besoin de JavaScript pour fonctionner.</noscript>

  <h3>Qui écrit</h3>
  <div class="pm-grille">
    <label>Prénom <input type="text" id="bp-prenom" maxlength="40" autocomplete="given-name"></label>
    <label>Nom (non publié) <input type="text" id="bp-nom" maxlength="40" autocomplete="family-name"></label>
    <label>Niveau
      <select id="bp-niveau">
        <option value="">choisir</option>
        <option>5e</option><option>4e</option><option>3e</option><option>2de</option>
      </select>
    </label>
    <label>Classe <input type="text" id="bp-classe" maxlength="12" placeholder="ex. 4e B"></label>
  </div>

  <h3>L'article</h3>
  <div class="pm-grille">
    <label>Rubrique
      <select id="bp-rubrique">
        <option value="Veille">Veille</option>
        <option value="Projets">Avancement d'un projet</option>
        <option value="Vie de la classe">Vie de la classe</option>
      </select>
    </label>
    <label>Projet concerné
      <select id="bp-projet">
        <option value="">choisir</option>
        <option>Projet jardin sec</option>
        <option>Club robotique</option>
        <option>La Nuit du Code</option>
        <option>Semaine du numérique</option>
        <option>Développement durable</option>
        <option>Concours et compétitions</option>
        <option>Missions Scratch</option>
        <option>Missions Arduino</option>
        <option>Impression 3D</option>
        <option>SNT</option>
        <option value="autre">Autre projet</option>
      </select>
    </label>
    <label id="bp-projet-autre-zone" hidden>Nom du projet <input type="text" id="bp-projet-autre" maxlength="40"></label>
  </div>
  <label class="pm-large">Titre de l'article
    <input type="text" id="bp-titre" maxlength="90" placeholder="ex. Un capteur d'humidité qui ne rouille pas">
  </label>
  <label class="pm-large"><span id="bp-resume-titre">Ce que j'ai trouvé</span>
    <textarea id="bp-resume" rows="6" maxlength="1500"></textarea>
    <span class="bp-compteur" id="bp-resume-compte"></span>
  </label>
  <label class="pm-large" id="bp-apport-zone">Ce que ça apporte au projet
    <textarea id="bp-apport" rows="4" maxlength="1000" placeholder="Quelle décision ou quelle étape cette information éclaire-t-elle ?"></textarea>
  </label>

  <h3>Sources</h3>
  <p class="bp-aide" id="bp-sources-aide">Au moins une source pour un article de veille.</p>
  <div id="bp-sources"></div>
  <button type="button" class="md-button" id="bp-ajouter-source">Ajouter une source</button>

  <label class="pm-large">À vérifier (facultatif)
    <textarea id="bp-verifier" rows="3" maxlength="600" placeholder="Ce qui reste incertain, ou à tester en classe."></textarea>
  </label>

  <h3>Photo (facultatif)</h3>
  <div class="pm-capture" id="bp-zone" tabindex="0">
    Je choisis une photo, ou je clique ici puis je colle une capture
    (Ctrl + V ou Cmd + V).
    <input type="file" id="bp-fichier" accept="image/*">
    <p id="bp-photo-etat" class="pm-etat"></p>
    <img id="bp-apercu" alt="Aperçu de la photo" hidden>
  </div>
  <label class="pm-large" id="bp-legende-zone" hidden>Légende de la photo
    <input type="text" id="bp-legende" maxlength="120" placeholder="ex. Le prototype du bac, vue de dessus">
  </label>

  <div class="bp-cases">
    <label class="bp-case"><input type="checkbox" id="bp-mots"> J'ai écrit avec mes propres mots et j'ai cité mes sources.</label>
    <label class="bp-case"><input type="checkbox" id="bp-visage"> Ma photo ne montre aucun visage ni aucun nom (ou je n'envoie pas de photo).</label>
  </div>
  <label class="bp-piege" aria-hidden="true">Ne pas remplir <input type="text" id="bp-site" tabindex="-1" autocomplete="off"></label>

  <p><button type="button" class="md-button md-button--primary" id="bp-envoyer">Envoyer au professeur</button></p>
  <p id="bp-statut" class="pm-statut" role="status"></p>
</div>

<script src="../assets/proposer.js"></script>
