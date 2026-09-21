# cPanel static deployment

A separate, fully static build of this template for shared/static hosting
with no Node.js runtime, deployed to
[sg-template.fraserwillox.com](https://sg-template.fraserwillox.com).

**This is not the primary deployment path.** The template's normal, fully
supported deployment is the standalone Next.js server build (`npm run
build` / `npm run start`, or the Dockerfile) — see the root
[README.md](../../README.md). This cPanel export exists alongside it for a
static-hosting demonstration and does not replace it.

## Building

```bash
npm run build:cpanel
```

This runs `next build` with `DEPLOY_TARGET=cpanel`,
`NEXT_PUBLIC_SITE_URL=https://sg-template.fraserwillox.com` and
`NEXT_PUBLIC_ALLOW_INDEXING=false` set (via `cross-env`, so the script
works the same in Windows PowerShell as elsewhere), which:

- switches `next.config.ts` to `output: "export"` with `trailingSlash:
  true`, producing a static `out/` directory instead of `.next/standalone`
  (this part is keyed off `DEPLOY_TARGET=cpanel`)
- points page metadata (canonical/Open Graph URLs) at
  `https://sg-template.fraserwillox.com`
- makes `src/app/robots.ts` and the root layout's metadata disallow search
  engine indexing, because `NEXT_PUBLIC_ALLOW_INDEXING=false` is set for
  this specific build (see
  [Permitting indexing later](#permitting-indexing-later)). This is a
  demo-build decision, not something the cPanel/static export implies:
  indexing is controlled by `NEXT_PUBLIC_ALLOW_INDEXING`
  (`siteConfig.allowIndexing` in `src/config/site.ts`), independently of
  which deployment target is being built, and defaults to allowing
  indexing for a normal `npm run build`.

`scripts/build-cpanel.mjs` orchestrates the actual build. It:

- temporarily moves `src/app/api` (only `/api/health`) out of the way
  before running `next build`, and always restores it afterwards, so the
  static export doesn't include it (see
  [No live health check](#no-live-health-check) below) and the working
  tree is never left with the route missing, even if the build fails
- copies [`.htaccess`](.htaccess) into `out/.htaccess` once the build
  succeeds

## Uploading

Upload the **contents of `out/`**, not the `out` folder itself, to the
document root of `sg-template.fraserwillox.com` in cPanel (typically
`public_html/` or a subdomain's own document root folder). For example,
with an FTP client or cPanel's File Manager, select everything inside
`out/` and upload/extract it so that `index.html` sits directly in the
document root, not inside an `out/` subfolder.

`.htaccess` is a hidden file: make sure your FTP client or File Manager is
set to show hidden files, or it will silently not be uploaded and the
redirects/headers below won't apply.

## What's included

- `out/index.html`, `out/about/index.html`,
  `out/technical-information/index.html`: the prerendered pages
  (`trailingSlash: true` gives each one its own folder with an
  `index.html`, so links work without a base path on ordinary static
  hosting)
- `out/404.html`: the not-found page, wired up as the Apache error
  document by `.htaccess`
- `out/_next/`: Next.js's built JS/CSS assets
- `out/branding/`, `out/favicon.ico`: the Scottish Government branding
  assets and favicon
- `out/.htaccess`: copied from [`.htaccess`](.htaccess) by the post-build
  step

## No live Next.js server

This is a static export: there is no Next.js process running on the
server, no server-side rendering per request, and no live API routes.
Everything under `out/` is a plain file served by Apache.

### No live health check

`/api/health` exists in the application source
(`src/app/api/health/route.ts`) for the standalone/Docker deployment's
container health checks, where a real Node.js process can answer it. It
is **not included in this static export**: static hosting has nothing
running to check, so a build-time static copy of its response would just
be a stale, unchanging file pretending to be a live health check.
`scripts/build-cpanel.mjs` moves `src/app/api` aside before `next build`
runs and moves it straight back afterwards, so it never reaches `out/`.
The route itself is untouched, and the standalone/Docker build is
unaffected.

## Permitting indexing later

While this is a review/staging deployment, `npm run build:cpanel` sets
`NEXT_PUBLIC_ALLOW_INDEXING=false`, which both `src/app/robots.ts` and the
root layout's `metadata.robots` (in `src/app/layout.tsx`) read via
`siteConfig.allowIndexing`, so the build always ships a `robots.txt` that
disallows all crawling plus a page-level `noindex` meta tag. When this
deployment is ready to be indexed, remove `NEXT_PUBLIC_ALLOW_INDEXING=false`
from the `build:cpanel` script in `package.json` (or override it with
`NEXT_PUBLIC_ALLOW_INDEXING=true` for one-off builds) and re-run
`npm run build:cpanel`.

## Redeploying updates

1. Make your changes and re-run `npm run build:cpanel`.
2. Upload the new contents of `out/` to the document root again, overwriting
   the previous files (including `.htaccess`).

There is no cache to invalidate on the server beyond your browser's/CDN's
own HTTP caching of the previous files.
