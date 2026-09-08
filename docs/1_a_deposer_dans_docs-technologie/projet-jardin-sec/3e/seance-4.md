# Séance 4 : Programmer le système complet et faire remonter les données

!!! question "La question du jour"
    Comment écrire le programme final, avec ses sécurités et son hystérésis, et comment transmettre les mesures de chaque jardinière à un poste unique, sans fil ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | demi-groupe | Écrire, mettre au point et exécuter un programme complexe ; Utiliser une communication sans fil entre deux systèmes ; Organiser un programme en fonctions ou en parties identifiables |

## Avant

**Mon hypothèse.** Huit jardinières émettent leur mesure sur la même radio. Selon toi, que faut-il ajouter au message pour que le récepteur s'y retrouve ?

### Les mots à repérer

| Mot | Définition |
|---|---|
| Radio | communication sans fil entre deux micro:bit, sur un même canal et un même groupe |
| Trame | message structuré, dont chaque partie a une signification convenue à l'avance |
| Identifiant | numéro qui permet de savoir de quelle jardinière vient une mesure |
| Constante | valeur nommée fixée en tête de programme, qui ne change pas pendant l'exécution |
| Mise en sommeil | état de faible consommation entre deux mesures |

## Pendant : je recherche

### Activité 1 · je recherche : le programme émetteur

Complète le programme fourni. Les constantes sont déjà déclarées, tu écris la boucle principale.

- Écris la condition qui démarre l'arrosage.
- Écris la condition qui l'arrête.
- Pourquoi la variable arrosage est-elle nécessaire ?
- Écris la ligne qui envoie la mesure.
- Pourquoi utiliser le point-virgule comme séparateur ?
- Le filtre rejette les valeurs hors de 300 à 800. Que fait alors le programme ?

### Activité 2 · je recherche : le programme récepteur

Le récepteur reçoit les messages des huit jardinières et affiche l'humidité de celle qui est sélectionnée par le bouton A.

- Que contient p après le découpage ?
- Écris le test qui garde seulement la jardinière choisie.
- Pourquoi les deux micro:bit doivent-ils avoir le même group ?
- Que se passe-t-il si deux jardinières émettent exactement au même instant ?
- Comment décaler simplement les émissions ?

### Activité 3 · je recherche : essayer à deux cartes

Avec le binôme voisin, réglez deux identifiants différents et vérifiez la réception.

- Le récepteur affiche la mesure des deux cartes alors que tu n'en veux qu'une. Pourquoi ?
- Rien ne s'affiche. Cite trois causes possibles.
- Comment vérifier rapidement que l'émetteur émet bien ?
- Quelle amélioration proposes-tu pour la version installée dehors ?

## Après : ce que je retiens

Le programme final réunit trois éléments : le ________ des valeurs aberrantes, l'_____________ à deux seuils et l'envoi ________ de la mesure.  
La variable __________ mémorise l'état d'un cycle à l'autre : sans elle, l'hystérésis ne fonctionne pas.  
Les valeurs fixes du programme sont écrites en _____________ au début, ce qui permet de les modifier en un seul endroit.  
Le message envoyé est une ________, découpée par des ___________________ : identifiant, humidité, état.  
Deux micro:bit ne communiquent que s'ils sont sur le même ________ radio.  
Pour éviter les _____________, chaque carte décale son émission de ________ secondes par identifiant.

**La question de la prochaine séance.** Le système complet fonctionne et parle. Il reste à répondre à la question posée il y a trois ans en 5e : le jardin tient-il sa promesse d'économie d'eau ?

## Matériel

- 6 micro:bit émetteurs montés, 2 micro:bit récepteurs
- postes avec l'éditeur Python micro:bit
- fichiers 3e_emetteur.py et 3e_recepteur.py fournis
- fiche élève
