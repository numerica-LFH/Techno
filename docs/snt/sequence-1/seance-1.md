# Séance 1 — Écrire une page

!!! info "Séquence 1 · séance 1 sur 3 · 55 minutes"

    HTML, CSS, adresse absolue et adresse relative.

    Éditeur : [Phoenix Code](https://web.phcode.dev/), dans le navigateur, rien à installer.

## Ce qu'on a cherché

Plutôt que de regarder une page finie, on en fabrique une. Deux fichiers HTML reliés par un lien,
puis une feuille de style qui les met en forme.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **HTML** | Le langage qui décrit le contenu et la structure de la page |
| **CSS** | Le langage qui décrit la présentation : couleurs, marges, alignement |
| **Balise** | Un mot entre chevrons qui ouvre ou ferme un élément, par exemple `<h1>` et `</h1>` |
| **Attribut** | Une précision écrite dans la balise ouvrante, par exemple `href="page2.html"` |
| **Sélecteur** | Le mot placé avant l'accolade en CSS, qui dit à quels éléments la règle s'applique |
| **Adresse absolue** | Une adresse complète, avec `https://` et le nom du serveur |
| **Adresse relative** | Un simple nom de fichier, cherché à côté de la page courante |

### La structure minimale d'une page

```html
<!DOCTYPE html>
<html>
    <head>
        <title>page 1</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>Sciences Numériques et Technologie</h1>
        <h2>Page 1</h2>
        <a href="https://www.meteofrance.com">Météo France</a>
        <a href="page2.html">Page 2</a>
    </body>
</html>
```

Le `head` contient ce qui ne s'affiche pas dans la page : le titre de l'onglet, le rattachement de
la feuille de style. Le `body` contient ce qui s'affiche.

### La feuille de style de l'activité

```css
body { background-color: #AB3016; }
h1   { color: white; margin: 50px; }
h2   { text-align: center; }
a    { color: #2999E7; }
```

Chaque règle a la même forme : un sélecteur, une accolade, une ou plusieurs déclarations
`propriété: valeur;`, une accolade fermante. Le point-virgule à la fin de chaque déclaration n'est
pas décoratif : sans lui, le navigateur abandonne la lecture du bloc.

### Ce que je retiens

Le HTML donne le contenu et la structure. Le CSS donne la présentation. C'est le **navigateur** qui
assemble les deux et affiche le résultat. Les trois rôles sont distincts, et ils sont dans trois
fichiers différents.

Un lien vers un site extérieur exige une adresse complète, avec `https://`. Un lien vers un fichier
voisin se contente de son nom. C'est toute la différence entre une adresse absolue et une adresse
relative, et c'est pourquoi `page1.html` et `page2.html` doivent rester dans le même dossier.

### Là où ça bloque

| Symptôme | Cause la plus fréquente |
|---|---|
| Le lien vers `page2.html` ne fait rien | Les deux fichiers ne sont plus dans le même dossier |
| La page s'affiche comme du texte brut | Le fichier a été enregistré en `.txt` et non en `.html` |
| Le CSS ne s'applique pas | La balise `link` manque, ou un point-virgule a été oublié |
| Le lien externe échoue | L'adresse a été écrite sans `https://`, ou sans guillemets |

## La question de la séance suivante

La page est écrite, elle s'affiche. Mais quand j'ouvre un site déjà en ligne, que se passe-t-il
entre le moment où je tape l'adresse et le moment où la page apparaît ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
