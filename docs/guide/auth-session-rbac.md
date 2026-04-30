# Auth, session et RBAC

Le starter suit une règle simple :

```txt
UI auth → useLocalAuthUi() + studioSession
Auth réelle → NFZ / Feathers /authentication
Pages critiques → pas d’appel direct $api.service(...)
Accès services protégés → useAdminFeathers()
```

## Store session

Le store `studioSession` encapsule le runtime auth NFZ.

```ts
const session = useStudioSessionStore()

await session.login({
  userId: 'admin',
  password: 'admin123',
})
```

Il expose :

```txt
user
roles
isAuthenticated
isReady
can(role)
hasAnyRole(roles)
login()
logout()
restore()
```

## Middleware global

Les pages privées déclarent leurs besoins via `definePageMeta()`.

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  requiresAuth: true,
  roles: ['admin', 'user'],
})
</script>
```

Le middleware global lit cette méta, restaure la session et redirige vers `/login` si nécessaire.

## Accès Feathers protégé

Les stores métier passent par `useAdminFeathers()`.

```ts
const adminFeathers = useAdminFeathers()

const messages = await adminFeathers.findMessages({
  query: { $limit: 50 },
})
```

La couche injecte le JWT dans les appels REST :

```ts
headers: {
  Authorization: `Bearer ${accessToken}`,
},
authentication: {
  strategy: 'jwt',
  accessToken,
}
```

## Bonne pratique RBAC

Utilise les rôles pour la navigation et les pages, puis applique les protections réelles côté Feathers avec des hooks. L’UI peut masquer une action, mais le backend doit toujours refuser l’action non autorisée.
