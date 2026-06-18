# Castor Dental Care

Marketing website for Castor Dental Care — a family, cosmetic, restorative, implant, Invisalign, and sedation dental practice at 7258 Castor Avenue, Northeast Philadelphia (PA 19149). Phone: (215) 728-1144.

## Stack

Pure static site. No build step.

- HTML, CSS, vanilla JS
- Google Fonts: Schibsted Grotesk + Hanken Grotesk
- Shared header / footer injected from `chrome.js` (`<div id="site-header"></div>` + `<div id="site-footer"></div>` on every page)
- Single shared stylesheet: `styles.css`

## Deploy target

Vercel — static deployment.
Custom domain: **https://castor-dental.vedryxtech.com**

## Pages

| Path | Purpose |
|---|---|
| `index.html` | Homepage — hero, pathways, services, doctors, gallery preview, FAQ |
| `about.html` | Dr. Joseph Mikolajewski (DMD, UPenn) + Dr. Livia Stancu (DDS) bios |
| `services.html` | Preventive, cosmetic, restorative, implants, Invisalign, sedation |
| `gallery.html` | Before/after case grid — veneers, whitening, crowns, Invisalign, implants, bonding |
| `financing.html` | $169 new patient offer + accepted insurance carriers + financing options |
| `contact.html` | Appointment request form + address, hours, embedded map |
| `privacy.html` | Privacy notice (website data only — HIPAA notice provided in-office) |
| `sitemap.xml` | XML sitemap (all 7 pages) |
| `robots.txt` | Crawl directive — full allow, points at sitemap |

## SEO

- Per-page `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph + Twitter tags
- Schema.org JSON-LD on every page: `Dentist` with full NAP, doctors, hours, geo
- Page-specific schema: `FAQPage` on `index.html`, `MedicalProcedure` graph on `services.html`

## Local preview

Any static file server works. Examples:

```bash
# Python (no install needed on macOS)
python3 -m http.server 4321

# Node alternative
npx serve .

# Or open the file directly in a browser — chrome.js works with file:// too
```

Then visit http://localhost:4321/.

## Deploy (Vercel)

```bash
# First time
vercel link

# Production deploy
vercel --prod
```

The site is static, so no `vercel.json` or framework config is required. Vercel auto-detects the static structure and serves the root. A minimal `vercel.json` is included to set `cleanUrls` and standard headers.

## Source / origin

This site was redesigned from the reference at https://www.castordentalcare.com/. All NAP (name, address, phone), doctor credentials, hours, and the $169 new-patient offer are verified against that source.
