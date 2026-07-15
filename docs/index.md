---
layout: home
hero:
  name: NFZ Quasar UnoCSS Pinia Starter
  text: Créer une application Nuxt 4 authentifiée avec Feathers/NFZ
  tagline: Un modèle pédagogique, animé et prêt à lancer avec Quasar 2, UnoCSS, Pinia, MongoDB et nuxt-feathers-zod 6.5.49.
  actions:
    - theme: brand
      text: Démarrer le guide
      link: /guide/getting-started
    - theme: alt
      text: Voir l’architecture
      link: /guide/architecture
features:
  - icon: 🔐
    title: Auth NFZ réelle
    details: Login local Feathers, JWT, session Pinia et middleware global côté Nuxt.
  - icon: 🧩
    title: Stores applicatifs
    details: Store studioSession pour l’auth UI et store messages façon Feathers-Pinia.
  - icon: 🗄️
    title: MongoDB prêt à l’emploi
    details: Docker Compose, services MongoDB et seed admin idempotent.
  - icon: 🎨
    title: Dashboard Quasar + UnoCSS
    details: Layout Quasar sobre, responsive, avec protections anti-overlay QDrawer.
---

<div class="nfz-hero mt-10 p-6 md:p-10">
  <div class="nfz-orb nfz-orb--one"></div>
  <div class="nfz-orb nfz-orb--two"></div>

  <div class="relative grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
    <section>
      <p class="nfz-chip mb-4">Template principal NFZ 6.5.49</p>
      <h2 class="m-0 text-3xl font-900 tracking-tight text-slate-950 md:text-5xl dark:text-white">
        Une base claire pour apprendre, livrer et industrialiser.
      </h2>
      <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
        Ce starter montre le flux recommandé : l’interface auth utilise un store Pinia,
        l’authentification réelle reste dans NFZ/Feathers, et les pages critiques ne
        manipulent pas directement <code>$api.service(...)</code>.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a class="nfz-chip nfz-pulse" href="https://www.npmjs.com/package/nuxt-feathers-zod" target="_blank">npm nuxt-feathers-zod</a>
        <a class="nfz-chip" href="https://github.com/vevedh/nuxt-feathers-zod" target="_blank">GitHub NFZ</a>
        <a class="nfz-chip" href="https://vevedh.github.io/nuxt-feathers-zod/" target="_blank">Docs NFZ</a>
      </div>
    </section>

    <section class="nfz-card">
      <p class="m-0 text-xs font-800 uppercase tracking-widest text-blue-600 dark:text-blue-300">Flow applicatif</p>
      <div class="mt-5 grid gap-4">
        <div class="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/40">
          <strong>UI auth</strong><br>
          <span class="text-sm text-slate-600 dark:text-slate-300">useLocalAuthUi() → studioSession</span>
        </div>
        <div class="rounded-xl bg-teal-50 p-4 dark:bg-teal-950/40">
          <strong>Backend auth</strong><br>
          <span class="text-sm text-slate-600 dark:text-slate-300">NFZ → Feathers → JWT</span>
        </div>
        <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
          <strong>Accès data</strong><br>
          <span class="text-sm text-slate-600 dark:text-slate-300">useAdminFeathers() → stores métier</span>
        </div>
      </div>
    </section>
  </div>
</div>

## Liens utiles NFZ 6.5.49

<div class="grid gap-4 md:grid-cols-3">
  <a class="nfz-link-card" href="https://www.npmjs.com/package/nuxt-feathers-zod" target="_blank">
    <span class="text-2xl">📦</span>
    <h3 class="mb-2 mt-3">npm</h3>
    <p class="m-0 text-sm text-slate-600 dark:text-slate-300">Package officiel <code>nuxt-feathers-zod</code>.</p>
  </a>
  <a class="nfz-link-card" href="https://github.com/vevedh/nuxt-feathers-zod" target="_blank">
    <span class="text-2xl">🐙</span>
    <h3 class="mb-2 mt-3">GitHub</h3>
    <p class="m-0 text-sm text-slate-600 dark:text-slate-300">Sources, issues, exemples et releases du module NFZ.</p>
  </a>
  <a class="nfz-link-card" href="https://vevedh.github.io/nuxt-feathers-zod/" target="_blank">
    <span class="text-2xl">📘</span>
    <h3 class="mb-2 mt-3">GitHub Pages</h3>
    <p class="m-0 text-sm text-slate-600 dark:text-slate-300">Documentation VitePress officielle du module NFZ.</p>
  </a>
</div>
