import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

const repoName = process.env.GITHUB_REPOSITORY?.split('/').at(1)
const defaultBase = repoName ? `/${repoName}/` : '/nfz-quasar-unocss-pinia-starter/'

export default defineConfig({
  title: 'NFZ Quasar Starter',
  description: 'Starter Nuxt 4 + Quasar 2 + UnoCSS + Pinia + nuxt-feathers-zod',
  lang: 'fr-FR',
  base: process.env.DOCS_BASE || defaultBase,
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'NFZ Quasar UnoCSS Pinia Starter' }],
    ['meta', {
      property: 'og:description',
      content: 'Un starter pédagogique Nuxt 4, Quasar 2, UnoCSS, Pinia, MongoDB et nuxt-feathers-zod.',
    }],
  ],

  vite: {
    plugins: [
      UnoCSS({
        presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography()],
        transformers: [transformerDirectives(), transformerVariantGroup()],
        shortcuts: {
          'nfz-card': 'rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70',
          'nfz-chip': 'inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-700 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200',
          'nfz-link-card': 'block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-250 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-700',
        },
        theme: {
          colors: {
            nfz: {
              blue: '#2563eb',
              teal: '#0f766e',
              slate: '#0f172a',
            },
          },
        },
      }),
    ],
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'NFZ Starter',
    outline: {
      label: 'Sur cette page',
      level: [2, 3],
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Architecture', link: '/guide/architecture' },
      { text: 'Auth + RBAC', link: '/guide/auth-session-rbac' },
      { text: 'MongoDB + Seed', link: '/guide/mongodb-seed' },
      {
        text: 'NFZ 6.5.29',
        items: [
          { text: 'npm', link: 'https://www.npmjs.com/package/nuxt-feathers-zod' },
          { text: 'GitHub', link: 'https://github.com/vevedh/nuxt-feathers-zod' },
          { text: 'Documentation', link: 'https://vevedh.github.io/nuxt-feathers-zod/' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Créer le starter',
        items: [
          { text: 'Présentation', link: '/' },
          { text: 'Démarrage rapide', link: '/guide/getting-started' },
          { text: 'Architecture', link: '/guide/architecture' },
          { text: 'Auth, session et RBAC', link: '/guide/auth-session-rbac' },
          { text: 'MongoDB et seed', link: '/guide/mongodb-seed' },
          { text: 'Publication GitHub Pages', link: '/guide/github-pages' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vevedh/nuxt-feathers-zod' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1.5 7.5h21v9h-6v-6h-3v6h-12zM4.5 10.5v3h3v-3zm6 0v3h3v-3zm9 0v3h-3v-3z"/></svg>',
        },
        link: 'https://www.npmjs.com/package/nuxt-feathers-zod',
      },
    ],
    footer: {
      message: 'Starter pédagogique pour Nuxt 4, Quasar 2, UnoCSS, Pinia et nuxt-feathers-zod 6.5.29.',
      copyright: 'MIT — NFZ Starter',
    },
  },
})
