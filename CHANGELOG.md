# Changelog

All notable changes to this template are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-09-21

Initial public, open-source release.

### Added

- Next.js App Router and TypeScript starter, with React 19 and the
  official Scottish Government React Design System integration.
- Shared Scottish Government site header, primary navigation, Beta
  PhaseBanner, and footer (Open Government Licence and gov.scot logos).
- Central, public site configuration (`src/config/site.ts`,
  `src/config/navigation.ts`).
- Home, Technical information and About pages.
- Unit tests (Vitest, React Testing Library), browser and automated
  accessibility tests (Playwright, axe-core).
- GitHub Actions CI and Dependabot.
- Docker/standalone production deployment configuration and an
  `/api/health` endpoint.
- An optional static export deployment (`deploy/cpanel/`), used for a
  secondary demonstration deployment; not the recommended way to deploy a
  real service.
- Open-source release under the Apache License, Version 2.0.

## [0.1.0] - 2026-07-27

### Added

- Initial internal version of the Scottish Government website starter
  template.
- Next.js App Router application (TypeScript, strict mode, `src` directory).
- Scottish Government Design System integration with shared site header,
  navigation, and footer.
- Example pages: home, components showcase, form example, content example,
  about, accessibility, privacy, cookies.
- Error and status handling: `not-found`, `error`, `global-error`,
  `loading`, and a `/api/health` route.
- Unit tests (Vitest, React Testing Library) and end-to-end/accessibility
  tests (Playwright, axe-core).
- Production configuration: security headers, standalone output,
  multi-stage Dockerfile.
- GitHub Actions CI, Dependabot, issue and pull request templates.
