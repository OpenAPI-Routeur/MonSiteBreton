# Commande : Nettoyage des fichiers orphelins

## Description

Identifie, archive ou supprime les fichiers qui ne participent plus au site publie afin de garder le depot clair.

## Etapes

### 1. Identifier les fichiers suspects

**Fichiers a nettoyer ou a archiver en priorite :**
- `styles.css` (racine) - ancien fichier CSS legacy
- `script.js` (racine) - ancien fichier JS legacy
- `landing-section-tailwind.html` - prototype a archiver plutot qu'a laisser en racine
- `.claude/references/site-material/` - materiaux de travail a conserver hors du flux de production

**Fichiers a conserver comme source active :**
- `tailwind.config.cjs` - configuration de la home Tailwind-like
- `assets/index.tailwind.css` - source de travail compilee dans `assets/index.css`

### 2. Verifier avant suppression

Pour chaque fichier suspect :

```bash
# Verifier si le fichier est reference quelque part
rg "nom-du-fichier" .
```

Ne supprimer QUE si le fichier n'est reference nulle part.

### 3. Trier les references de travail

Les notes, concepts PNG et prototypes doivent vivre dans `.claude/references/` pour sortir la documentation de travail de la racine publiee.

### 4. Nettoyer

```bash
# Deplacer les brouillons ou references hors de la racine
mv prototype.html .claude/references/

# Supprimer les fichiers confirmes comme orphelins
rm fichier-orphelin.ext

# Committer le nettoyage
git add -A
git commit -m "Nettoyer : supprimer les fichiers orphelins non utilises"
```

## Regles

- Ne JAMAIS supprimer un fichier sans avoir verifie qu'il n'est reference nulle part
- Ne JAMAIS supprimer les fichiers dans `.claude/`, `assets/fonts/`, `assets/projects/`
- Ne PAS supprimer `tailwind.config.cjs` ou `assets/index.tailwind.css` sans migration explicite
- Toujours committer la suppression avec un message explicite
- En cas de doute, deplacer plutot que supprimer
