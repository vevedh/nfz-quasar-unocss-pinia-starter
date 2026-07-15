import{_ as a,o as e,c as n,a2 as t}from"./chunks/framework.luI1U3gZ.js";const h=JSON.parse('{"title":"Architecture du starter","description":"","frontmatter":{},"headers":[],"relativePath":"guide/architecture.md","filePath":"guide/architecture.md","lastUpdated":null}'),p={name:"guide/architecture.md"};function i(l,s,r,c,o,d){return e(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="architecture-du-starter" tabindex="-1">Architecture du starter <a class="header-anchor" href="#architecture-du-starter" aria-label="Permalink to &quot;Architecture du starter&quot;">​</a></h1><p>Le starter est volontairement petit, mais il montre une architecture exploitable en production.</p><h2 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app/</span></span>
<span class="line"><span>├─ composables/</span></span>
<span class="line"><span>│  ├─ useAdminFeathers.ts      # façade applicative Feathers</span></span>
<span class="line"><span>│  ├─ useDrawerSafeState.ts    # état QDrawer SSR/client safe</span></span>
<span class="line"><span>│  └─ useLocalAuthUi.ts        # formulaire login</span></span>
<span class="line"><span>├─ layouts/</span></span>
<span class="line"><span>│  ├─ default.vue</span></span>
<span class="line"><span>│  └─ dashboard.vue</span></span>
<span class="line"><span>├─ middleware/</span></span>
<span class="line"><span>│  └─ session.global.ts        # session + RBAC</span></span>
<span class="line"><span>├─ pages/</span></span>
<span class="line"><span>│  ├─ login.vue</span></span>
<span class="line"><span>│  ├─ dashboard.vue</span></span>
<span class="line"><span>│  ├─ messages.vue</span></span>
<span class="line"><span>│  └─ session.vue</span></span>
<span class="line"><span>├─ stores/</span></span>
<span class="line"><span>│  ├─ studioSession.ts         # session applicative</span></span>
<span class="line"><span>│  └─ messages.ts              # store métier</span></span>
<span class="line"><span>└─ utils/</span></span>
<span class="line"><span>   └─ errors.ts                # normalisation erreurs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services/</span></span>
<span class="line"><span>├─ users/                      # auth locale MongoDB</span></span>
<span class="line"><span>└─ messages/                   # messages protégés JWT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server/feathers/modules/</span></span>
<span class="line"><span>└─ seed-users.ts               # index + seed admin + message initial</span></span></code></pre></div><h2 id="flux-principal" tabindex="-1">Flux principal <a class="header-anchor" href="#flux-principal" aria-label="Permalink to &quot;Flux principal&quot;">​</a></h2><div class="grid gap-4"><div class="nfz-card nfz-step"><span class="nfz-chip">1</span><h3>Login UI</h3><p><code>login.vue</code> appelle <code>useLocalAuthUi()</code>, qui délègue au store <code>studioSession</code>.</p></div><div class="nfz-card nfz-step"><span class="nfz-chip">2</span><h3>Auth réelle</h3><p><code>studioSession.login()</code> utilise le runtime NFZ et appelle <code>/feathers/authentication</code>.</p></div><div class="nfz-card nfz-step"><span class="nfz-chip">3</span><h3>Session et RBAC</h3><p><code>session.global.ts</code> restaure la session puis vérifie <code>requiresAuth</code> et <code>roles</code>.</p></div><div class="nfz-card nfz-step"><span class="nfz-chip">4</span><h3>Accès service</h3><p>Les stores métier utilisent <code>useAdminFeathers()</code>, qui injecte le JWT dans les appels Feathers.</p></div></div><h2 id="decouplage-recommande" tabindex="-1">Découplage recommandé <a class="header-anchor" href="#decouplage-recommande" aria-label="Permalink to &quot;Découplage recommandé&quot;">​</a></h2><p>Le starter sépare trois responsabilités :</p><table tabindex="0"><thead><tr><th>Couche</th><th>Responsabilité</th></tr></thead><tbody><tr><td><code>useLocalAuthUi()</code></td><td>État du formulaire, loading, redirection</td></tr><tr><td><code>studioSession</code></td><td>Session applicative, user, rôles, helpers RBAC</td></tr><tr><td><code>useAdminFeathers()</code></td><td>Appels Feathers authentifiés et normalisés</td></tr></tbody></table><p>Cette séparation évite de disperser les détails runtime NFZ dans les pages.</p>`,10)])])}const m=a(p,[["render",i]]);export{h as __pageData,m as default};
