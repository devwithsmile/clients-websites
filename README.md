# clients-websites

Monorepo holding every Vedryx client website. One subfolder per client.

```
clients-websites/
  castor-dental/      # Castor Dental Care — live: castor-dental.vedryxtech.com
  <next-client>/      # add the next client here
```

## How it deploys

- **One GitHub repo** (this one) — clone/manage once. This is the source of truth.
- **One Vercel project per client.** Separate domains require separate Vercel projects (a Vercel constraint), but they all share this single repo.
- **Deploy = CLI from the client subfolder:**
  ```bash
  cd clients-websites/<client>
  vercel --prod        # uploads this folder's contents, aliases to the client domain
  ```
  Each subfolder carries its own gitignored `.vercel/` link to its Vercel project.

### Why CLI deploy and not git push-to-deploy

Git push-to-deploy needs each Vercel project's **Root Directory** set to its client subfolder
(otherwise Vercel builds from the repo root, which has no site — only this README). That Root
Directory setting can only be changed in the Vercel dashboard (the CLI OAuth token can't set it
via the REST API). Until it's set per project, git is left disconnected and we deploy via CLI.

**To enable push-to-deploy for a client** (one-time, in the Vercel dashboard):
1. Project → Settings → General → **Root Directory** → set to the client folder (e.g. `castor-dental`).
2. Project → Settings → Git → **Connect** this repo.
After that, `git push` auto-deploys and skips unaffected clients.

## Adding a new client

1. `mkdir clients-websites/<client>/` and drop the site in (static HTML/CSS or a framework app — each folder is self-contained, can carry its own `vercel.json`).
2. Create a Vercel project; from `clients-websites/<client>` run `vercel link` then `vercel --prod`.
3. Add the client's domain/subdomain to that Vercel project.
4. (Optional) Enable push-to-deploy via the dashboard steps above.

## Conventions

- Each client folder is self-contained: its own `vercel.json`, assets, SEO (`sitemap.xml`, `robots.txt`), schema.
- Sitemap/canonical/OG URLs use the client's real production domain.
- No fabricated content (reviews, case studies) on any client site.
