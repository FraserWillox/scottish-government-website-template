# Scottish Government website template

A starter template for building Scottish Government websites and digital
services with Next.js, React, TypeScript and the
[Scottish Government Design System](https://designsystem.gov.scot/).

**Created and maintained by:** Fraser Willox, Director, Dream Tech Ltd

**Live demo:** <https://sg-template.fraserwillox.com>

> **This is not an official Scottish Government service.** It is a
> reusable, deliberately minimal starting point for teams building one.
> Nothing in this repository represents real government policy, guidance,
> or content. The header/footer branding **is** the official Scottish
> Government branding (bundled locally; see
> [`public/branding/README.md`](public/branding/README.md)), included
> because this starter is intended for authorised Scottish Government
> projects. See [NOTICE.md](NOTICE.md) before adapting this template for
> anything other than a genuine, authorised Scottish Government service.
> See also the About page in the running app.
>
> Use of this repository, including the bundled Scottish Government
> branding, does not imply endorsement by, or affiliation with, the
> Scottish Government.

This template is **open source**, licensed under the
[Apache License, Version 2.0](LICENSE). See
[Licence and branding notice](#licence-and-branding-notice) below for how
that licence relates to the Scottish Government Design System's own MIT
licence and to the bundled Crown copyright branding, which are not the
same thing.

## Quick start

```bash
git clone https://github.com/FraserWillox/scottish-government-website-template.git
cd scottish-government-website-template
npm install
npm run dev
```

Then open <http://localhost:3000>. From there:

1. Update [`src/config/site.ts`](src/config/site.ts) with your service's
   name, description and links.
2. Update [`src/config/navigation.ts`](src/config/navigation.ts) with your
   primary navigation.
3. Replace the example content in [`src/app/`](src/app/) with your own
   pages.
4. Run `npm run check` (lint, typecheck, unit tests, build) before you
   commit.

You can also use this repository as a
[GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
("Use this template" on GitHub) instead of cloning it directly.

## Where engineers customise this starter

| Location | Purpose |
| --- | --- |
| `src/config/site.ts` | Public, non-secret site configuration: name, description, phase banner wording, feedback destination, external links, branding asset paths, indexing. **Never commit secrets, API keys or credentials here**, or to any other source-controlled file: use `.env.local` instead. |
| `src/config/navigation.ts` | Primary header navigation and footer policy links |
| `src/app/` | Routes and page content (Home, Technical information, About, error/loading states) |
| `public/branding/` | Branding assets. See the licensing caution in [`public/branding/README.md`](public/branding/README.md) before reusing or replacing them |
| `.env.example` | Documents available environment variables; copy to `.env.local` for local overrides (git-ignored) |
| `next.config.ts` | Deployment output mode, response headers, and other Next.js configuration |

## 1. Overview

This template combines:

- **Next.js** (App Router) and **React 19**
- **TypeScript** in strict mode
- The **Scottish Government Design System React** components
  (`@scottish-government/designsystem-react`)
- Automated unit and end-to-end/accessibility testing
- A production-oriented Next.js configuration and multi-stage Docker build
- A GitHub Actions CI workflow

It is deliberately small: a Home page, a Technical information page, an
About page, and the production engineering scaffolding (design system
wiring, accessible navigation, Docker/CI) already solved, rather than a
component showcase or a set of policy page templates. It exists so a
delivery team starting a new Scottish Government website doesn't have to
re-solve the same integration problems from scratch.

## 2. Disclaimer

This repository is **not itself a published Scottish Government service**.
It is maintained as a starting point for teams building one. In particular:

- The Home, Technical information and About page content describes this
  template, not a real service. Replace it before launch.
- This template does **not** ship its own accessibility statement, privacy
  notice or cookies page. The footer links to the corresponding gov.scot
  policies instead. Adopting teams must decide whether their own service
  needs local versions of these pages: see the About page and
  [Pages included](#3-pages-included) below.
- The header, footer and favicon use the **official Scottish Government
  branding**, bundled locally under `public/branding/`. That branding is
  Crown copyright and is **not** covered by this template's own Apache-2.0
  source licence. See [`NOTICE.md`](NOTICE.md) and
  [`public/branding/README.md`](public/branding/README.md) before reusing
  it outside a genuine Scottish Government context.

## 3. Pages included

| Route | Purpose |
| --- | --- |
| `/` | Home: a short introduction, getting started steps, and links to the other pages |
| `/technical-information` | Technology stack, what the template includes, testing and production notes, and how to adapt the starter |
| `/about` | Purpose, what to replace, contact and support |
| `/api/health` | JSON health check for container orchestrators |

Plus `not-found`, `error`, `global-error` and `loading` states, a Beta
`PhaseBanner` shown on every page, and a `robots.txt` route.

The footer's three policy links (Accessibility statement, Privacy notice,
Cookies) are ordinary external links to the corresponding gov.scot
policies (`https://www.gov.scot/accessibility/`, `/privacy/`, `/cookies/`),
not local pages. See `src/config/navigation.ts`.

## 4. Tech stack

- [Next.js](https://nextjs.org/) (App Router, standalone output)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [`@scottish-government/designsystem-react`](https://www.npmjs.com/package/@scottish-government/designsystem-react) 1.2.1
- [`@scottish-government/design-system`](https://www.npmjs.com/package/@scottish-government/design-system) 4.2.0
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- [Playwright](https://playwright.dev/) + [`@axe-core/playwright`](https://www.npmjs.com/package/@axe-core/playwright)
- [ESLint](https://eslint.org/) (`eslint-config-next`)
- Docker (multi-stage, non-root runtime)

No Tailwind, no CSS-in-JS, no general-purpose component framework: layout
and components come from the design system, plus a small amount of custom
CSS in `src/app/globals.css`.

## 5. Prerequisites

- Node.js 20.9 or later (Node 22 LTS recommended, matching CI and the
  Dockerfile)
- npm (ships with Node)
- Docker, if you want to build/run the production container locally
  (optional)

## 6. Installation

```bash
git clone https://github.com/FraserWillox/scottish-government-website-template.git
cd scottish-government-website-template
npm install
```

Use `npm ci` instead of `npm install` in CI or any environment where you
want an exact, reproducible install from `package-lock.json`.

PowerShell (Windows) is equivalent throughout: the commands above and
below work unchanged in `pwsh`/`powershell.exe`.

## 7. Local development

```bash
npm run dev
```

Then open <http://localhost:3000>.

## 8. Available npm scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build (standalone output) |
| `npm run build:cpanel` | Optional static export used for Fraser Willox's own cPanel demo deployment (see [§21](#21-optional-cpanel-static-demo-deployment)); not the recommended way to deploy a real service, and does not replace `npm run build` |
| `npm run start` | Start the production server from a build (see note below) |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Unit tests (Vitest, single run) |
| `npm run test:watch` | Unit tests in watch mode |
| `npm run test:coverage` | Unit tests with coverage report |
| `npm run test:e2e` | Playwright end-to-end and accessibility tests |
| `npm run check` | lint + typecheck + test + build, in sequence |

> **Note on `npm run start`:** because `next.config.ts` sets
> `output: "standalone"`, Next.js prints a warning that `next start`
> "does not work" with standalone output. In practice `next start` still
> works locally (it serves from the regular `.next` build output, which is
> produced alongside the standalone one). The warning is about
> *deployment*, where you should run `node .next/standalone/server.js`
> instead, exactly as the Dockerfile does. Playwright's local
> `webServer` config uses `next start` for convenience; the Docker image
> uses the standalone server.

## 9. Testing

- **Unit tests** (`npm run test`) use Vitest and React Testing Library.
  They cover: home page rendering, technical information page rendering
  (including the "What the template includes" table's accessible
  semantics), about page rendering, primary navigation's current-page
  state, the header logo, the footer's OGL and gov.scot logos (including
  the exact Open Government Licence link text), the phase banner, and the
  not-found page.
- **End-to-end tests** (`npm run test:e2e`) use Playwright against a
  production build, at both a desktop and a mobile viewport
  (`chromium-desktop` / `chromium-mobile` projects). They cover
  navigation (including the mobile menu), the skip link, the phase
  banner's feedback link, the footer's Open Government Licence link
  (text, `target` and `rel`), and the 404 page.
- **Accessibility tests** (`e2e/accessibility.spec.ts`) run an automated
  [axe-core](https://github.com/dequelabs/axe-core) scan (WCAG 2.0/2.2 A
  and AA rules) against every public route (`/`, `/technical-information`,
  `/about`), on both viewport sizes.

Deterministic and offline: no test depends on network access or real
timing beyond what Playwright/Vitest manage themselves.

**Automated accessibility checks do not replace manual testing.** Before
treating a real service as accessible, also test with a keyboard only,
with a screen reader, and, ideally, with people who have access needs.

## 10. Accessibility approach

This template targets WCAG 2.2 AA practices:

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`), one `<h1>`
  per page, and a logical heading hierarchy
- A skip link (design system `SkipLinks`) to a focusable `#main-content`
  landmark
- Design system focus styles, left untouched (not overridden anywhere in
  this template)
- `aria-current="page"` on the active navigation item: see
  "Design system integration decisions" below for a fix this required
- `prefers-reduced-motion` respected for the one custom CSS transition
  rule in `globals.css`
- No ARIA where native HTML already provides the semantics

## 11. Production build

```bash
npm run build
npm run start
```

`next.config.ts` sets `output: "standalone"`, `poweredByHeader: false`,
`reactStrictMode: true`, and a set of security response headers (see
[Security headers](#18-security-headerscsp-guidance) below). This is the
recommended, fully supported deployment model for a real Scottish
Government service built from this template. The optional cPanel/static
export described in [§21](#21-optional-cpanel-static-demo-deployment) is a
separate, secondary deployment path used only for Fraser Willox's own
demonstration site.

## 12. Docker usage

```bash
docker build -t scottish-government-website-template .
docker run --rm -p 3000:3000 scottish-government-website-template
```

The `Dockerfile` is a three-stage build (`deps` → `builder` → `runner`):
the final image runs as a non-root `nextjs` user, contains only the
standalone server output, `.next/static`, and `public/` (no source, no
dev dependencies), and defines a `HEALTHCHECK` against `/api/health`.

`.dockerignore` excludes `node_modules`, test artefacts, git metadata and
`.env*` files (except `.env.example`) from the build context.

## 13. Environment variables

See [`.env.example`](.env.example). Copy it to `.env.local` for local
overrides (git-ignored). Currently the available variables are:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL, used to build absolute metadata URLs and `robots.txt` | `http://localhost:3000` |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Set to `false` to disable search engine indexing (`robots.txt` disallow plus a page-level `noindex`). Defaults to allowing indexing | `true` |

The app runs correctly with no environment variables set at all: there
are no required secrets. **Never commit secrets, API keys or tokens** into
`.env.local`-tracked files, `src/config/site.ts`, or any other
source-controlled file.

## 14. Project structure

```
src/
  app/                        Routes (App Router): /, /technical-information,
                               /about, /api/health, robots.ts, error/loading states
  components/
    layout/                   Site chrome: header, footer, phase banner, skip link, page wrapper
    navigation/                next/link adapter for design-system linkComponent props
    branding/                  Header logo (BrandMark.tsx)
    examples/                  Technical information page's technology stack summary list
    design-system-client/      "use client" wrappers for hook-using design system components
                               (currently Table.tsx, used by the "What the
                               template includes" table)
  config/                      site.ts (public site config), navigation.ts
                               (nav items, including the external gov.scot
                               footer links)
  lib/                         Small framework-agnostic helpers
e2e/                           Playwright specs
public/branding/                Locally stored Scottish Government branding assets
deploy/cpanel/                  Optional static demo deployment (see §21)
scripts/                        Build scripts (currently just the cPanel export)
```

## 15. How to customise branding, content, metadata and navigation

- **Public, non-secret site values:** `src/config/site.ts` (site name,
  description, phase banner wording, feedback destination, external
  links, indexing, local branding asset paths). This file is for public
  values only: never add credentials, API keys, tokens or other secrets
  to it, or to any other source-controlled file
- **Primary and footer navigation:** `src/config/navigation.ts`
- **Page content:** edit the Home, Technical information and About pages
  under `src/app/`
- **Environment-specific settings:** `.env.example` documents the
  available variables; copy it to `.env.local` for local overrides
  (git-ignored). See [Environment variables](#13-environment-variables)
- **Branding:** replace the files in `public/branding/` and
  `src/components/branding/BrandMark.tsx` with your own organisation's
  approved logo, and update the footer logos in
  `src/components/layout/PrimaryFooter.tsx`. See
  [`public/branding/README.md`](public/branding/README.md) for what is
  bundled, its source, and the licensing caution that applies before you
  reuse or replace it
- **Feedback destination:** `siteConfig.phase.feedbackUrl` in
  `src/config/site.ts` defaults to this template's own GitHub Issues page.
  Replace it with your own project's issue tracker, support mailbox or
  feedback service
- **Deployment and response headers:** `next.config.ts` (see
  [Security headers](#18-security-headerscsp-guidance) below)
- **Metadata:** each page exports its own `metadata` object (Next.js
  Metadata API); the root layout in `src/app/layout.tsx` sets the title
  template and default description from `siteConfig`

## 16. How to upgrade the design system

1. Read the [design system React changelog](https://github.com/scottish-government-design-system/designsystem-react)
   for breaking changes, in particular to component props and the public
   `components` import path.
2. Update `@scottish-government/designsystem-react` and
   `@scottish-government/design-system` together (the former declares the
   latter as a peer dependency).
3. Run:
   ```bash
   npm ls @scottish-government/designsystem-react
   npm ls @scottish-government/design-system
   ```
   to confirm the resolved versions.
4. Re-check the deep `dist/components/...` imports documented below. A
   new version may add a previously-missing component to the public
   `components` barrel (or remove one from it).
5. Run `npm run check` and `npm run test:e2e`.

## 17. Deployment considerations

- Build with `output: "standalone"` and run `node .next/standalone/server.js`
  (see the Dockerfile) rather than `next start` in production.
- Set `NEXT_PUBLIC_SITE_URL` to your real deployed origin so metadata URLs
  and `robots.txt` resolve correctly.
- `NEXT_PUBLIC_ALLOW_INDEXING` defaults to allowing indexing; set it to
  `false` for a staging/review deployment that shouldn't be crawled.
- The `/api/health` route is suitable for a load balancer or container
  orchestrator health/readiness probe.
- This template does not include authentication, a database, or session
  handling. Add whatever your service actually needs. If that changes
  what people should be told about data collection or cookies, add your
  own accessibility statement, privacy notice and/or cookies page (see
  [Pages included](#3-pages-included)) rather than relying on the generic
  gov.scot policies linked from the footer.

## 18. Security headers/CSP guidance

`next.config.ts` sets, on every route:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`: camera, microphone, geolocation and FLoC/interest
  cohort denied by default
- `Content-Security-Policy: frame-ancestors 'self'` for clickjacking
  protection

**This is deliberately not a full Content-Security-Policy.** A robust CSP
that also restricts `script-src`/`style-src` needs either
`'unsafe-inline'` (which defeats much of the point) or per-request nonces
threaded through Next's rendering, which in turn needs middleware and
knowledge of your actual deployment (CDN, analytics, embedded widgets,
etc.) that this template can't assume. Adding a naive CSP here would
either break Next's own inline hydration data or give a false sense of
security. If you need a full CSP, follow the
[official Next.js CSP guide](https://nextjs.org/docs/app/guides/content-security-policy)
using middleware and nonces, once you know what your deployed service
actually needs to allow.

## 19. Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md). Report security issues privately;
see [SECURITY.md](SECURITY.md).

## 20. Licence and branding notice

This template's own source code is open source, licensed under the
[Apache License, Version 2.0](LICENSE). It depends on the Scottish
Government Design System packages, which are separately MIT licensed under
Crown Copyright. **Neither that dependency's licence, nor this template's
own licence, grants rights to Scottish Government branding or the Scottish
Government logo.** See [NOTICE.md](NOTICE.md) for the full breakdown and
[`public/branding/README.md`](public/branding/README.md) for what to do
before using this template for a real, publicly branded service.

## 21. Optional cPanel static demo deployment

Alongside the standalone/Docker deployment above, which is the
recommended way to deploy a real Scottish Government service built from
this template, a separate static export is used for Fraser Willox's own
demonstration deployment at
[sg-template.fraserwillox.com](https://sg-template.fraserwillox.com), for
shared/static hosting with no Node.js runtime:

```bash
npm run build:cpanel
```

This is an **optional, secondary deployment path**, not a recommendation
for how to deploy a real service. It does not replace `npm run build`:
it's a separate script that builds a static `out/` directory, uploaded to
cPanel by hand, and it explicitly disables search engine indexing (see
[Environment variables](#13-environment-variables)). See
[`deploy/cpanel/README.md`](deploy/cpanel/README.md) for the full upload
and redeployment steps, and [`deploy/cpanel/.htaccess`](deploy/cpanel/.htaccess)
for the Apache configuration that ships with it.

---

## Design system integration decisions

A few things about `@scottish-government/designsystem-react` that aren't
obvious from its type declarations alone, discovered while building this
template, and worth knowing before you extend it:

- **`SiteNavigation` is not exported from the package's public
  `components` barrel**, even though `SiteHeader`'s own types reference
  it. It's imported here from `@scottish-government/designsystem-react/dist/components/SiteNavigation`,
  the narrowest stable path that works. Re-check this on upgrade.
- **The package ships no `"use client"` directives at all**, despite many
  components using hooks internally: `Accordion`,
  `Checkbox`/`CheckboxGroup`, `RadioButton`/`RadioGroup`, `ErrorSummary`,
  `NotificationBanner`, `SiteHeader`, `SkipLinks`, `SideNavigation`,
  `SummaryList`, `Table`, `TextInput`, `Textarea` and
  `ConfirmationNotification` will all crash if rendered directly inside a
  server component. The Technical information page needs `Table` for its
  "What the template includes" table, wrapped in
  `src/components/design-system-client/Table.tsx`; the other pages don't
  need any of the rest, but that folder and its own README document the
  one-line `"use client"` re-export pattern (including the related
  "compound sub-component" gotcha) to follow the moment you add a page
  that does.
- **`SiteNavigation.Item`, `ContentsNav.Item` and `SideNavigation.Item`
  accept an `isCurrent` prop, but don't forward the resulting
  `aria-current="page"` to a custom `linkComponent`**, only to their own
  internal fallback `<a>`. `Pagination.Page` does forward it; these three
  don't. Since none of them spread extra props either, there's no other
  way to pass it through. `src/components/navigation/NextLinkAdapter.tsx`
  exports `createCurrentPageLinkAdapter(isCurrent)` to work around this,
  used in `PrimaryHeader.tsx`.
- **Both `@scottish-government/designsystem-react` and
  `@scottish-government/design-system` ship `.jsx`/`.ts` files whose own
  internal `require()` calls omit the file extension** (their own build
  step appears to emit `.jsx` rather than `.js` for anything containing
  JSX, and some components `require()` small progressive-enhancement
  behaviour modules straight from the base package's TypeScript source
  rather than a compiled file). Both packages are listed in
  `next.config.ts`'s `transpilePackages` so Next compiles them properly.
  `clsx`, a runtime dependency the package uses but only declares as a
  *dev*Dependency, is installed here directly for the same reason.
  Vitest needs its own equivalent fix; see `vitest.setup.ts` and
  `vitest.config.ts` for the details.
- **The mobile navigation toggle is progressively enhanced**: the
  server-rendered markup is a `<label>`/hidden checkbox pair, but on
  mount the design system's own script replaces it with an imperatively
  created `<button>` and hides the original label. Playwright tests that
  need to open the mobile menu wait for and click that button (see
  `e2e/navigation.spec.ts`), not the original label.

No documented prop was invented to work around any of the above. Every
prop used in this template is present in the installed package's `.d.ts`
files.
