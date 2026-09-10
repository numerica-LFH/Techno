# Séance 2 — Du serveur au rang d'une page

!!! info "Séquence 1 · séance 2 sur 3 · 55 minutes"

    URL, requête et réponse HTTP, cookies, classement d'une page.

    Les fichiers écrits en séance 1 sont réutilisés : ils servent d'exemple pour le graphe.

## Ce qu'on a cherché

Une page n'est pas un fichier posé sur un serveur. On ouvre les outils de développement du
navigateur pour compter ce qui est réellement demandé, puis on se demande comment un moteur choisit
l'ordre de ses résultats.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **Requête** | La demande envoyée par le navigateur au serveur |
| **Réponse** | Ce que le serveur renvoie, accompagné d'un code |
| **HTTP** | Le protocole qui règle cet échange |
| **Cookie** | Une information déposée par le site et relue à la visite suivante |
| **Rang** | La place d'une page dans la liste des résultats d'un moteur |
| **Graphe orienté** | Des pages reliées par des liens qui ne se parcourent que dans un sens |

### Les trois temps

Le navigateur demande, le serveur répond, le navigateur affiche. Tout le reste est une variation
sur ces trois temps.

### Lire une URL

```
https://numerica-lfh.github.io/Techno/snt/web/
└──┬──┘ └────────────┬───────────┘└─────┬────┘
protocole      nom du serveur     chemin de la ressource
```

### Les codes de réponse à connaître

| Code | Ce qu'il signifie |
|---|---|
| 200 | La ressource a été trouvée et envoyée |
| 301 | La ressource a changé d'adresse |
| 404 | La ressource demandée n'existe pas |
| 500 | Le serveur a rencontré une erreur |

Les codes en 400 concernent la demande, ceux en 500 concernent le serveur.

### Ce que je retiens

Une page web n'est pas un fichier : c'est le résultat de beaucoup de requêtes. L'onglet Réseau des
outils de développement en montre plusieurs dizaines, souvent des centaines, pour une seule page.

L'onglet Éléments montre la page assemblée, JavaScript compris. L'onglet Réseau montre ce que le
serveur a réellement envoyé. Les deux diffèrent sur presque tous les sites modernes.

Pour classer les pages, un moteur combine la popularité mesurée sur le graphe des liens, la qualité
de ces liens et la pertinence du contenu. Le simple comptage des liens entrants ne suffit pas : sur
le mini-site de la séance 1, les trois pages en ont exactement un chacune, et rien ne les départage.
Un lien venant d'un site très visité ne vaut pas un lien venant d'une page inconnue, et n'importe
qui peut fabriquer des centaines de pages qui pointent vers la sienne.

### Ce que je dois savoir refaire

- Découper une URL en protocole, serveur et chemin.
- Dire ce que signifie un code 200, 301, 404 ou 500.
- Dessiner le graphe orienté d'un petit ensemble de pages et compter les liens entrants.
- Expliquer pourquoi ce comptage seul ne suffit pas à classer des résultats.

## Pour aller plus loin

- HTTPS et le chiffrement de la connexion.
- Ce que révèle une requête : adresse IP, en-têtes, cookies.

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
