# Publication GitHub Pages

Le starter publie la documentation VitePress avec GitHub Actions.

## Point critique

Le site local peut être correct avec :

```bash
bun run docs:build
bun run docs:preview
```

mais GitHub Pages peut afficher une page Markdown/Jekyll brute si le dépôt est configuré en mode :

```txt
Deploy from a branch
```

Pour ce starter, il faut utiliser le mode :

```txt
Settings → Pages → Build and deployment → Source → GitHub Actions
```

## Workflow officiel

Le workflow est situé ici :

```txt
.github/workflows/docs.yml
```

Il doit construire VitePress puis publier uniquement :

```txt
docs/.vitepress/dist
```

## Commandes locales

```bash
bun run docs:build
bun run docs:preview
```

Sur Windows, en cas de cache ou dépendances corrompues :

```powershell
bun run docs:clean:win
bun run docs:reinstall:win
bun run docs:build
```

## Base VitePress

La base est calculée automatiquement dans `docs/.vitepress/config.mts` à partir de `GITHUB_REPOSITORY`, avec une valeur par défaut :

```txt
/nfz-quasar-unocss-pinia-starter/
```

Le workflow définit aussi explicitement :

```txt
DOCS_BASE=/nfz-quasar-unocss-pinia-starter/
```

pour éviter toute ambiguïté en CI.

## Checklist de publication

1. Pousser le code sur `main`.
2. Aller dans `Settings → Pages`.
3. Choisir `Source: GitHub Actions`.
4. Aller dans `Actions`.
5. Lancer ou relancer `Deploy VitePress Docs`.
6. Vérifier que le déploiement utilise l’artefact `docs/.vitepress/dist`.

Si la page publiée affiche le Markdown brut ou ne contient pas le header VitePress, c’est presque toujours que GitHub Pages publie encore depuis une branche au lieu du workflow Actions.
