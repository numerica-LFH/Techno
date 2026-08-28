# Technologie & SNT, Lycée Français de Tegucigalpa

Site de ressources pédagogiques construit avec [MkDocs](https://www.mkdocs.org/)
et le thème [Material](https://squidfunk.github.io/mkdocs-material/), publié via
GitHub Pages.

## Mise en route

1. Créer un dépôt sur GitHub, puis y déposer le contenu de ce dossier.
2. Dans `mkdocs.yml`, remplacer `VOTRE-COMPTE` et `NOM-DU-DEPOT`.
3. Dans le dépôt : Settings > Pages > Source : *Deploy from a branch*,
   branche `gh-pages`, dossier `/ (root)`.
4. Pousser sur `main`. L'action GitHub construit et publie le site.

## Travailler en local

```bash
python -m venv .venv
source .venv/bin/activate       # Windows : .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Le site est alors visible sur http://127.0.0.1:8000

## Ajouter une page

1. Créer un fichier `.md` dans `docs/`.
2. L'ajouter à la section `nav` de `mkdocs.yml`.
3. Commiter et pousser.
