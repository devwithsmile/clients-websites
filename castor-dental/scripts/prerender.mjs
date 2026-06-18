import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')
const distDir = resolve(projectRoot, 'dist')
const ssrDir = resolve(projectRoot, 'dist-ssr')

const { render, ROUTE_META, renderHeadHtml } = await import(
  resolve(ssrDir, 'entry-server.js')
)

const template = await readFile(resolve(distDir, 'index.html'), 'utf8')

if (!template.includes('<!--app-head-->')) {
  throw new Error('Expected <!--app-head--> placeholder in built index.html')
}
if (!template.includes('<!--app-html-->')) {
  throw new Error('Expected <!--app-html--> placeholder in built index.html')
}

for (const meta of ROUTE_META) {
  const appHtml = render(meta.path)
  const headHtml = renderHeadHtml(meta)
  const finalHtml = template
    .replace('<!--app-head-->', headHtml)
    .replace('<!--app-html-->', appHtml)

  const outFile = resolve(distDir, meta.outPath)
  await mkdir(dirname(outFile), { recursive: true })
  await writeFile(outFile, finalHtml)
  console.log('  prerendered', meta.path, '→', meta.outPath)
}

// generate sitemap.xml and robots.txt
const SITE_URL = 'https://castor-dental.vedryxtech.com'
const sitemapPriority = {
  '/': '1.0',
  '/services': '0.9',
  '/financing': '0.8',
  '/contact': '0.8',
  '/about': '0.7',
  '/gallery': '0.6',
  '/privacy': '0.3',
}
const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTE_META.map(
  (m) =>
    `  <url>
    <loc>${SITE_URL}${m.path === '/' ? '/' : m.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${m.path === '/privacy' ? 'yearly' : 'monthly'}</changefreq>
    <priority>${sitemapPriority[m.path] ?? '0.5'}</priority>
  </url>`,
).join('\n')}
</urlset>
`
await writeFile(join(distDir, 'sitemap.xml'), sitemap)
console.log('  wrote sitemap.xml')

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
await writeFile(join(distDir, 'robots.txt'), robots)
console.log('  wrote robots.txt')

console.log('prerender complete →', distDir)
