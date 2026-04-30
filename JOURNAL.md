# JOURNAL — NFZ Quasar UnoCSS Pinia Starter

## 0.1.1 — MongoDB + seed admin

Corrections appliquées :

- ajout de `docker-compose.yaml` avec MongoDB 7 ;
- ajout des variables MongoDB dans `.env.example` ;
- ajout des scripts `db:up`, `db:down`, `db:logs`, `dev:db` ;
- configuration de `feathers.database.mongo` dans `nuxt.config.ts` ;
- activation de Mongo Management sous `/feathers/mongo-admin` ;
- migration des services `users` et `messages` de MemoryService vers `MongoDBService` ;
- ajout des dépendances `@feathersjs/mongodb` et `mongodb` ;
- seed idempotent de l’utilisateur `admin` ;
- création d’indexes MongoDB `users.userId` et `messages.createdAt` ;
- seed d’un message initial ;
- normalisation `_id` MongoDB vers `id` côté façade `useAdminFeathers()` ;
- adaptation du store `messages` pour accepter les ids MongoDB.

## 0.1.0 — Starter initial

Base Nuxt 4 + Quasar 2 + UnoCSS + NFZ 6.5.26 + Pinia avec :

- auth locale ;
- middleware session ;
- store `studioSession` ;
- store `messages` ;
- façade `useAdminFeathers()` ;
- RBAC route meta ;
- layout dashboard Quasar anti-overlay QDrawer.

## 0.1.2 - Fix messages auth params + erreur lisible

- Correction de la page `/messages` lorsque l'utilisateur est authentifié mais que l'appel REST Feathers ne reçoit pas explicitement le JWT.
- Ajout de `app/utils/errors.ts` pour éviter les erreurs UI `[object Object]`.
- `useAdminFeathers()` transmet maintenant `headers.Authorization` et `params.authentication` à chaque appel service critique.
- Suppression du `$sort` imbriqué côté REST pour éviter les incompatibilités de parsing query; tri effectué côté store/couche accès.
- Normalisation Mongo `_id` -> `id` côté messages.
- Amélioration de la bannière d'erreur sur `/messages`.

## 0.1.3 - Hydration / Quasar ripple cleanup

- Correction hydration mismatch sur pages protégées.
- Réduction warnings touchstart liés au ripple Quasar.

## Patch 0.1.4 — VitePress UnoCSS Docs + GitHub Pages

- Ajout d’une documentation VitePress animée sous `docs/` pour présenter et créer simplement le starter.
- Intégration UnoCSS côté VitePress avec `unocss/vite`, `virtual:uno.css`, thème custom et cartes animées.
- Ajout des guides `getting-started`, `architecture`, `auth-session-rbac`, `mongodb-seed`, `github-pages`.
- Ajout des liens officiels NFZ 6.5.29 : npm, GitHub et documentation GitHub Pages.
- Ajout du workflow `.github/workflows/docs.yml` pour publier `docs/.vitepress/dist` sur GitHub Pages.
- Mise à jour du starter pour référencer `nuxt-feathers-zod@6.5.29`.


## 0.1.5 — Bun / esbuild Windows install hardening

- Ajout de `bunfig.toml` avec `install.concurrentScripts = 1`.
- Ajout de `docs/bunfig.toml`.
- Ajout des scripts `install:stable` et `install:clean:win`.
- Isolation des dépendances VitePress dans `docs/package.json`.
- Suppression des dépendances docs du `package.json` racine pour alléger l'installation app.
- Pin `esbuild@0.27.7` et ajout des binaires Windows optionnels.
- Mise à jour du workflow GitHub Pages pour installer avec `--concurrent-scripts=1`.

## Patch 0.1.6 — Docs build esbuild 0.27.4

- Correction de l’échec `bun run docs:build` lié à `esbuild` 0.27.7.
- Symptôme : `Transforming destructuring to the configured target environment ... is not supported yet`.
- Décision : conserver NFZ 6.5.29 et le starter 0.1.5 comme base fonctionnelle, mais verrouiller `esbuild` à `0.27.4` dans la racine et dans `docs/`.
- Ajout des scripts racine `docs:clean:win` et `docs:reinstall:win` pour nettoyer/réinstaller uniquement le sous-projet VitePress.
- Procédure recommandée : `bun run docs:clean:win`, `bun run docs:reinstall:win`, puis `bun run docs:build`.


## 0.1.7 — GitHub Pages Actions source

- Diagnostic : `vitepress preview` local OK, mais GitHub Pages affichait une page Markdown/Jekyll brute.
- Cause probable : dépôt configuré en `Deploy from a branch` au lieu de `GitHub Actions`.
- Correction workflow : ajout de `actions/configure-pages@v5`, `DOCS_BASE`, installation `--optional`, publication de `docs/.vitepress/dist`.
- Ajout de `docs/public/.nojekyll`.
- Mise à jour de `docs/guide/github-pages.md`, `PROMPT_CONTEXT.md` et ajout du patchlog dédié.
