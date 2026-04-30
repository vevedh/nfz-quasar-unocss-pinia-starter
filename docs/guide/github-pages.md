# Publication GitHub Pages

Le starter contient un workflow GitHub Actions prêt à publier cette documentation VitePress + UnoCSS sur GitHub Pages.

## Workflow inclus

```txt
.github/workflows/docs.yml
```

Le workflow :

1. installe Bun ;
2. installe les dépendances ;
3. construit la documentation avec `bun run docs:build` ;
4. publie `docs/.vitepress/dist` sur GitHub Pages.

## Configuration GitHub

Dans le dépôt GitHub :

1. ouvre **Settings** ;
2. va dans **Pages** ;
3. choisis **Source: GitHub Actions** ;
4. pousse sur `main`.

## Base VitePress

La base est calculée automatiquement à partir du nom du dépôt GitHub :

```ts
const repoName = process.env.GITHUB_REPOSITORY?.split('/').at(1)
const defaultBase = repoName ? `/${repoName}/` : '/nfz-quasar-unocss-pinia-starter/'
```

Tu peux la surcharger :

```bash
DOCS_BASE=/mon-repo/ bun run docs:build
```

## Liens NFZ 6.5.29

- npm : <https://www.npmjs.com/package/nuxt-feathers-zod>
- GitHub : <https://github.com/vevedh/nuxt-feathers-zod>
- Docs GitHub Pages : <https://vevedh.github.io/nuxt-feathers-zod/>
