# Démarrage rapide

Ce guide crée une application **Nuxt 4 + Quasar 2 + UnoCSS + Pinia + NFZ 6.5.29** avec MongoDB et un compte administrateur seedé automatiquement.

## 1. Installer les dépendances

```bash
bun install
```

## 2. Préparer l’environnement

```bash
cp .env.example .env
```

Le fichier `.env.example` contient une configuration MongoDB locale prête pour Docker Compose.

```env
MONGODB_URL=mongodb://root:changeMe@127.0.0.1:27037/nfz_starter?authSource=admin
NFZ_DEMO_USER=admin
NFZ_DEMO_PASSWORD=admin123
NFZ_DEMO_ROLES=admin,user
```

## 3. Démarrer MongoDB

```bash
bun run db:up
```

Le service MongoDB est exposé localement sur le port `27037`.

## 4. Lancer Nuxt

```bash
bun dev
```

Ou en une commande :

```bash
bun run dev:db
```

## 5. Se connecter

Compte créé au démarrage par le module de seed Feathers :

```txt
admin / admin123
```

## 6. Pages disponibles

| Route | Rôle | Description |
| --- | --- | --- |
| `/login` | public | Connexion locale Feathers/NFZ |
| `/dashboard` | user/admin | Dashboard protégé |
| `/messages` | user/admin | CRUD message via store Pinia |
| `/session` | user/admin | Diagnostic session/UI |

## Bonne pratique

Garde le flow suivant :

```txt
pages → stores Pinia → useAdminFeathers() → NFZ/Feathers
```

Évite les appels directs à `$api.service(...)` dans les pages critiques. Cela garde l’auth, la normalisation d’erreurs et la sérialisation des paramètres dans une seule couche maintenable.


## Installation stable sous Windows

Le starter fournit un `bunfig.toml` qui limite les scripts postinstall concurrents :

```toml
[install]
concurrentScripts = 1
```

Cela stabilise l'installation des binaires `esbuild` utilisés par Nuxt/Vite.
Après un échec d'installation partielle, utilise :

```bash
bun run install:clean:win
```
