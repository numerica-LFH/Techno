<style>
.assr-hero {
  margin: 0 -0.8rem 2.4rem;
  padding: 3.2rem 1.2rem 3.6rem;
  background: #f7f9fb;
  border-radius: 14px;
  text-align: center;
}
[data-md-color-scheme="slate"] .assr-hero { background: rgba(255,255,255,.04); }

.assr-hero h1.assr-title {
  margin: 0 0 1.1rem;
  font-size: 2.35rem;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -.02em;
  color: #0b1220;
}
[data-md-color-scheme="slate"] .assr-hero h1.assr-title { color: #f2f5f9; }

.assr-hero .assr-lead {
  max-width: 34rem;
  margin: 0 auto;
  font-size: .95rem;
  line-height: 1.6;
  color: #55606e;
}
[data-md-color-scheme="slate"] .assr-hero .assr-lead { color: #b3bcc7; }

.assr-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 1.6rem;
  max-width: 44rem;
  margin: 2.8rem auto 0;
  text-align: left;
}

.assr-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid rgba(15,23,42,.07);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15,23,42,.06), 0 6px 18px rgba(15,23,42,.05);
}
[data-md-color-scheme="slate"] .assr-card {
  background: var(--md-default-bg-color);
  border-color: rgba(255,255,255,.12);
}

.assr-card__head {
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: 1.5rem 1.5rem;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
}
.assr-card--1 .assr-card__head { background: linear-gradient(135deg, #4fbe80 0%, #2f9a5e 100%); }
.assr-card--2 .assr-card__head { background: linear-gradient(135deg, #4fa6e0 0%, #2f80c2 100%); }
.assr-card__head svg { flex: 0 0 auto; width: 1.3rem; height: 1.3rem; }

.assr-card__body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.7rem 1.5rem 1.6rem;
}
.assr-card__body p {
  margin: 0;
  font-size: .88rem;
  line-height: 1.6;
  color: #55606e;
}
[data-md-color-scheme="slate"] .assr-card__body p { color: #b3bcc7; }

.assr-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  margin-top: auto;
  padding: .85rem 1rem;
  border-radius: 9px;
  background: #3b46e2;
  color: #fff !important;
  font-size: .88rem;
  font-weight: 600;
  text-decoration: none;
  transition: background .15s ease, transform .15s ease;
}
.assr-btn:hover, .assr-btn:focus { background: #2f39c9; transform: translateY(-1px); }
.assr-btn svg { width: 1rem; height: 1rem; }
</style>

<div class="assr-hero">
  <h1 class="assr-title">Entraînement ASSR</h1>
  <p class="assr-lead">Préparez-vous à l'examen de sécurité routière avec les plateformes officielles d'entraînement.</p>

  <div class="assr-cards">
    <div class="assr-card assr-card--1">
      <div class="assr-card__head">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>ASSR 1 &ndash; 5ème</span>
      </div>
      <div class="assr-card__body">
        <p>Attestation de sécurité routière de niveau 1. Entraînez-vous avec les quiz officiels pour la classe de 5ème.</p>
        <a class="assr-btn" href="https://e-assr.education-securite-routiere.fr/preparer/assr/1/ASSR1" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          <span>S'entraîner à l'ASSR 1</span>
        </a>
      </div>
    </div>

    <div class="assr-card assr-card--2">
      <div class="assr-card__head">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>ASSR 2 &ndash; 3ème</span>
      </div>
      <div class="assr-card__body">
        <p>Attestation de sécurité routière de niveau 2. Préparez l'examen pour la classe de 3ème avec les exercices officiels.</p>
        <a class="assr-btn" href="https://e-assr.education-securite-routiere.fr/preparer/assr/2/ASSR2" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          <span>S'entraîner à l'ASSR 2</span>
        </a>
      </div>
    </div>
  </div>
</div>

## Les deux attestations

Les attestations scolaires de sécurité routière sont passées au collège. Elles conditionnent l'accès
à la conduite d'un cyclomoteur puis à l'apprentissage de la conduite automobile.

| Attestation | Niveau | Ce qu'elle ouvre |
|---|---|---|
| **ASSR 1** | 5e | Première étape vers le brevet de sécurité routière, obligatoire pour conduire un cyclomoteur avant 18 ans |
| **ASSR 2** | 3e | Obligatoire pour s'inscrire à l'épreuve théorique du permis de conduire |

## Comment se passe l'épreuve

Une série de questions courtes, chacune introduite par une séquence vidéo. Une seule réponse par
question dans la plupart des cas. L'attestation est obtenue à partir de dix bonnes réponses sur
vingt.

L'épreuve est organisée par l'établissement, en général au deuxième trimestre. Un élève absent ou
qui n'obtient pas l'attestation peut se représenter à une session de rattrapage.

!!! tip "Conseil d'entraînement"

    Faire une série complète, noter les questions ratées, puis refaire uniquement celles-là. Deux
    séries de vingt questions bien reprises valent mieux que dix séries survolées.

## Ce qui est évalué

| Thème | Exemples de questions |
|---|---|
| Se déplacer à pied | Traversée, visibilité, zones de danger |
| Se déplacer à vélo | Équipement obligatoire, priorités, signalisation |
| Se déplacer en cyclomoteur | Casque, assurance, vitesse, alcool |
| Passager d'un véhicule | Ceinture, place, comportement |
| Risques et conduites à tenir | Alerter, protéger, secourir |

L'ASSR n'est pas un chapitre de technologie, mais elle est organisée dans le cadre des enseignements
et l'entraînement se fait souvent sur les postes de la salle. Elle est rappelée ici pour que les
élèves et les familles trouvent les liens au même endroit que le reste.
