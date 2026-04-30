# Architecture du starter

Le starter est volontairement petit, mais il montre une architecture exploitable en production.

## Structure

```txt
app/
├─ composables/
│  ├─ useAdminFeathers.ts      # façade applicative Feathers
│  ├─ useDrawerSafeState.ts    # état QDrawer SSR/client safe
│  └─ useLocalAuthUi.ts        # formulaire login
├─ layouts/
│  ├─ default.vue
│  └─ dashboard.vue
├─ middleware/
│  └─ session.global.ts        # session + RBAC
├─ pages/
│  ├─ login.vue
│  ├─ dashboard.vue
│  ├─ messages.vue
│  └─ session.vue
├─ stores/
│  ├─ studioSession.ts         # session applicative
│  └─ messages.ts              # store métier
└─ utils/
   └─ errors.ts                # normalisation erreurs

services/
├─ users/                      # auth locale MongoDB
└─ messages/                   # messages protégés JWT

server/feathers/modules/
└─ seed-users.ts               # index + seed admin + message initial
```

## Flux principal

<div class="grid gap-4">
  <div class="nfz-card nfz-step">
    <span class="nfz-chip">1</span>
    <h3>Login UI</h3>
    <p><code>login.vue</code> appelle <code>useLocalAuthUi()</code>, qui délègue au store <code>studioSession</code>.</p>
  </div>
  <div class="nfz-card nfz-step">
    <span class="nfz-chip">2</span>
    <h3>Auth réelle</h3>
    <p><code>studioSession.login()</code> utilise le runtime NFZ et appelle <code>/feathers/authentication</code>.</p>
  </div>
  <div class="nfz-card nfz-step">
    <span class="nfz-chip">3</span>
    <h3>Session et RBAC</h3>
    <p><code>session.global.ts</code> restaure la session puis vérifie <code>requiresAuth</code> et <code>roles</code>.</p>
  </div>
  <div class="nfz-card nfz-step">
    <span class="nfz-chip">4</span>
    <h3>Accès service</h3>
    <p>Les stores métier utilisent <code>useAdminFeathers()</code>, qui injecte le JWT dans les appels Feathers.</p>
  </div>
</div>

## Découplage recommandé

Le starter sépare trois responsabilités :

| Couche | Responsabilité |
| --- | --- |
| `useLocalAuthUi()` | État du formulaire, loading, redirection |
| `studioSession` | Session applicative, user, rôles, helpers RBAC |
| `useAdminFeathers()` | Appels Feathers authentifiés et normalisés |

Cette séparation évite de disperser les détails runtime NFZ dans les pages.
