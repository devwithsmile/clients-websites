# clients-websites

Monorepo holding every Vedryx client website. One subfolder per client.

```
clients-websites/
  castor-dental/      # Castor Dental Care — live: castor-dental.vedryxtech.com
  <next-client>/      # add the next client here
```

## How it deploys

- **One GitHub repo** (this one) — clone/manage once.
- **One Vercel project per client.** Each Vercel project sets **Root Directory** = its client subfolder and connects to this repo. Separate domains require separate Vercel projects (a Vercel constraint), but they all share this single repo.
- On `git push`, Vercel auto-detects which subfolder changed and **skips builds for unaffected clients**.

## Adding a new client

1. `mkdir clients-websites/<client>/` and drop the site in (static HTML/CSS or a framework app — each folder is self-contained, can carry its own `vercel.json`).
2. Create a Vercel project, set **Root Directory** = `<client>`, connect it to this repo.
3. Add the client's domain/subdomain to that Vercel project.
4. `git push` → live.

## Conventions

- Each client folder is self-contained: its own `vercel.json`, assets, SEO (`sitemap.xml`, `robots.txt`), schema.
- Sitemap/canonical/OG URLs use the client's real production domain.
- No fabricated content (reviews, case studies) on any client site.
