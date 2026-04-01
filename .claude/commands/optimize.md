# Commande : Optimiser les performances

## Description

Optimise les images, le CSS et le JS du site pour ameliorer les scores Lighthouse et le temps de chargement.

## Etapes

### 1. Optimisation des images

**Verifier les poids actuels :**
```bash
find assets/projects -type f -exec ls -lh {} \;
```

**Actions :**
- Convertir les PNG > 200 Ko en WebP si pas deja fait
- Utiliser `<picture>` avec source WebP et fallback PNG sur toutes les images de projets
- Verifier que les attributs `width`, `height`, `loading`, `decoding` sont presents
- Compresser les PNG de fallback si > 500 Ko

### 2. Optimisation CSS

**Verifier les fichiers orphelins :**
- Lister tous les fichiers CSS dans `assets/` et a la racine
- Verifier lesquels sont references dans le HTML
- Signaler les fichiers non utilises

**Actions :**
- Identifier et supprimer les classes CSS non utilisees (optionnel, audit)
- Verifier qu'il n'y a pas de proprietes dupliquees

### 3. Optimisation JS

**Verifier la taille totale :**
```bash
wc -c assets/contact-form.js
```

**Actions :**
- S'assurer qu'aucun JS n'est charge dans le `<head>` de maniere bloquante
- Verifier que les scripts sont en fin de `<body>`
- Pas de dependance externe inutile

### 4. Optimisation polices

**Verifier le poids total des polices :**
```bash
du -sh assets/fonts/
```

**Actions :**
- S'assurer que seul le format `.woff2` est utilise
- Verifier que `font-display: swap` est present dans `fonts.css`
- Evaluer si toutes les graisses chargees sont reellement utilisees

## Resultat attendu

- Score Lighthouse Performance > 90
- Temps de chargement < 3s sur connexion 3G simulee
- Pas de fichier > 500 Ko charge directement par le navigateur
