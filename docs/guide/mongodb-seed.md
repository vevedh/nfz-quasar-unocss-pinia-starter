# MongoDB et seed utilisateur

Le starter fournit MongoDB via Docker Compose et des services Feathers branchés sur `@feathersjs/mongodb`.

## Démarrer la base

```bash
bun run db:up
```

## Configuration

La connexion MongoDB est configurée dans `nuxt.config.ts` :

```ts
feathers: {
  database: {
    mongo: {
      url: process.env.MONGODB_URL,
      management: {
        enabled: true,
        basePath: '/mongo-admin',
      },
    },
  },
}
```

## Services MongoDB

Les services `users` et `messages` étendent `MongoDBService`.

```ts
import { MongoDBService } from '@feathersjs/mongodb'

export class MessagesService<ServiceParams extends Params = MessagesParams>
  extends MongoDBService<Message, MessageData, ServiceParams, MessagePatch> {}
```

## Seed idempotent

Le module `server/feathers/modules/seed-users.ts` est exécuté en phase `post`, après l’enregistrement des services.

Il crée :

- un index unique sur `users.userId` ;
- un compte `admin / admin123` ;
- les rôles `admin,user` ;
- un premier message de démonstration.

Le seed est idempotent : relancer l’application ne duplique pas l’utilisateur.

## Bonne pratique

Ne crée pas une connexion MongoDB parallèle dans Nitro pour les mêmes services. Laisse NFZ configurer MongoDB et utilise les services Feathers comme façade unique d’accès aux données.
