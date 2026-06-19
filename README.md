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
- **Each Vercel project sets Root Directory = its client folder** (e.g. `castor-dental`). castor-dental's is already set.

> ⚠️ **Deploy from the MONOREPO ROOT, never the subfolder.**
> ```bash
> cd clients-websites        # repo root, NOT clients-websites/<client>
> vercel --prod              # Vercel appends each project's Root Directory and builds it
> ```
> Because Root Directory is `castor-dental`, running `vercel --prod` from inside
> `clients-websites/castor-dental` resolves to `castor-dental/castor-dental` (nonexistent)
> and fails — or worse, a root-built deploy 404s the live domain. This bit prod on 2026-06-19.

### Push-to-deploy (optional)

Now that Root Directory is set per project, git push-to-deploy works once reconnected:
Project → Settings → Git → **Connect** `Vedryx/clients-websites`. After that, `git push`
auto-deploys and skips unaffected clients. Until then, deploy via CLI from the repo root (above).

## Adding a new client

1. `mkdir clients-websites/<client>/` and drop the site in (static HTML/CSS or a framework app — each folder is self-contained, can carry its own `vercel.json`).
2. Create a Vercel project; from `clients-websites/<client>` run `vercel link` then `vercel --prod`.
3. Add the client's domain/subdomain to that Vercel project.
4. (Optional) Enable push-to-deploy via the dashboard steps above.

## Conventions

- Each client folder is self-contained: its own `vercel.json`, assets, SEO (`sitemap.xml`, `robots.txt`), schema.
- Sitemap/canonical/OG URLs use the client's real production domain.
- No fabricated content (reviews, case studies) on any client site.
