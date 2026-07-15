import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'

const root = process.cwd()
const packageJson = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'))

assert.equal(
  packageJson.dependencies?.['nuxt-feathers-zod'],
  '6.5.49',
  '[nfz-starter] Le correctif des templates générés est strictement réservé à nuxt-feathers-zod@6.5.49.',
)

async function replaceExact(relativePath, replacements) {
  const filePath = join(root, relativePath)
  let source = await readFile(filePath, 'utf8')

  for (const [before, after] of replacements) {
    if (source.includes(after))
      continue

    assert.ok(
      source.includes(before),
      `[nfz-starter] Template NFZ 6.5.49 inattendu dans ${relativePath}; correctif interrompu sans modification partielle.`,
    )
    source = source.replace(before, after)
  }

  await writeFile(filePath, source)
}

await replaceExact('.nuxt/feathers/client/plugin.ts', [
  ['} as const\n\nexport default defineNfzClientPlugin', '}\n\nexport default defineNfzClientPlugin'],
])

await replaceExact('.nuxt/feathers/server/rest-bridge.ts', [
  ['function ensureLeadingSlash(value) {', 'function ensureLeadingSlash(value: string): string {'],
  ['function rewriteLegacyMongoAliases(pathname) {', 'function rewriteLegacyMongoAliases(pathname: string): string {'],
  ['function stripRestPrefix(url) {', 'function stripRestPrefix(url: string): string {'],
  ['await new Promise((resolve, reject) => {', 'await new Promise<void>((resolve, reject) => {'],
  ['const done = (error) => {', 'const done = (error?: unknown) => {'],
])

console.info('[nfz-starter] NFZ 6.5.49 generated TypeScript compatibility patch applied.')
