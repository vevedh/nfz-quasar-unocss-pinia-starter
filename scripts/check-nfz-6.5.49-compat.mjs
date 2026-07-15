import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'

const root = process.cwd()

async function read(relativePath) {
  return readFile(join(root, relativePath), 'utf8')
}

const pkg = JSON.parse(await read('package.json'))
const lock = await read('bun.lock')
const seed = await read('server/feathers/modules/seed-users.ts')
const nuxtConfig = await read('nuxt.config.ts')
const envExample = await read('.env.example')

assert.equal(pkg.dependencies?.['nuxt-feathers-zod'], '6.5.49')
assert.equal(pkg.packageManager, 'bun@1.3.6')
for (const dependency of [
  '@feathersjs/authentication',
  '@feathersjs/authentication-local',
  '@feathersjs/errors',
  '@feathersjs/feathers',
  '@feathersjs/mongodb',
  '@feathersjs/schema',
]) {
  assert.equal(pkg.dependencies?.[dependency], '5.0.46', `${dependency} doit rester convergé sur Feathers 5.0.46.`)
}
assert.equal(pkg.overrides?.['@feathersjs/errors'], '5.0.46')
assert.equal(pkg.overrides?.esbuild, '0.27.4')

assert.match(lock, /nuxt-feathers-zod@6\.5\.49/)
assert.match(lock, /@vevedh\/feathers-nitro@0\.5\.0/)
assert.doesNotMatch(lock, /@gabortorma\/feathers-nitro-adapter/)
assert.doesNotMatch(lock, /packages\.applied-caas-gateway1\.internal\.api\.openai\.org/)
assert.doesNotMatch(lock, /@feathersjs\/[^"]+@5\.0\.44/, 'Le lock ne doit plus contenir de paquet Feathers 5.0.44.')
assert.match(await read('scripts/patch-nfz-6.5.49-generated-types.mjs'), /strictement réservé à nuxt-feathers-zod@6\.5\.49/)

assert.match(seed, /NFZ_DEMO_ENABLED/)
assert.match(seed, /UNSAFE_DEMO_PASSWORDS/)
assert.match(seed, /getRuntimeEnvironment\(runtimeConfig\) !== 'production'/)
assert.match(seed, /password\.length < 12/)
assert.doesNotMatch(seed, /console\.(?:info|warn|log)\([^\n]*password/i)

assert.match(nuxtConfig, /enabled:\s*process\.env\.NFZ_DEMO_ENABLED/)
assert.match(envExample, /NFZ_DEMO_ENABLED=true/)

console.info('[nfz-starter] nuxt-feathers-zod 6.5.49 compatibility guard passed.')
