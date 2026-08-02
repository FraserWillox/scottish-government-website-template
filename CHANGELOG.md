# Changelog

All notable changes to this template are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Relicensed the template from MIT to a proprietary, all-rights-reserved
  licence (`LICENSE`, `NOTICE.md`, `package.json`). See
  [README.md](README.md#0-licence-and-permitted-use) for current terms.
  Third-party dependency and Scottish Government branding licence terms
  are unaffected.

### Added

- A `/technical-information` page, holding the detailed technology stack
  summary and "what the template includes" list moved off the Home page.
- An author attribution line near the top of README.md.
- Official Scottish Government branding, stored locally under
  `public/branding/`: header logo, Open Government Licence footer logo,
  and small gov.scot footer organisation logo, plus a matching favicon.
  See `public/branding/README.md` and `NOTICE.md` for sourcing and
  licensing.
- A Beta `PhaseBanner` in the shared page layout, with a feedback link to
  the About page's contact section.
- Unit tests for the header logo, footer logos/licence links, the phase
  banner, and the About page.

### Changed

- Simplified the visible footer Open Government Licence link text to
  "Open Government Licence v3.0" (previously it also spelled out "(opens
  in new tab)"), while keeping the link opening in a new tab via
  `target="_blank"` and `rel="noopener noreferrer"`.
- Reordered the Technical information page into Technology stack, What
  the template includes, Quality and testing, Production and delivery,
  Useful commands, and Adapting the starter.
- Replaced the "What the template includes" bullet list on the Technical
  information page with an accessible table (design system `Table`
  component, wrapped for client-side use), pairing each included feature
  with a short description.
- Centralised public, non-secret site configuration in
  `src/config/site.ts` (phase banner wording, external links, local
  branding asset paths), and updated the header, footer, phase banner and
  About page to read from it instead of duplicating values.
- Reduced the application to a deliberately minimal starter: primary
  navigation is now Home, Technical information and About.
- Shortened the Home page to a brief introduction, getting started steps,
  and links to the Technical information and About pages, moving its
  detailed technology stack and "what the template includes" content to
  the new Technical information page.
- Simplified the Home and About pages to focus on what the template is,
  who it is for, what to replace, and where to get help, rather than
  demonstrating components or example content.
- Updated documentation (README, NOTICE.md, `public/branding/README.md`)
  to describe the smaller application and the bundled branding assets.
- Replaced the local accessibility statement, privacy notice and cookies
  page with footer links to the corresponding gov.scot policies
  (`https://www.gov.scot/accessibility/`, `https://www.gov.scot/privacy/`,
  `https://www.gov.scot/cookies/`), rendered as ordinary external anchors
  opening in the same tab.
- Simplified the starter's public route set further and updated the
  footer and its automated tests to match.

### Removed

- The `/components`, `/form-example` and `/content-example` example
  routes/pages, their supporting components (`ConsultationUpdateForm`,
  `HomeNotice`), and the design-system client wrappers only they used
  (`Checkbox`, `CheckboxGroup`, `RadioButton`, `RadioGroup`,
  `ErrorSummary`, `NotificationBanner`, `TextInput`, `Textarea`,
  `ConfirmationNotification`, `Accordion`, `SummaryList`).
- The placeholder abstract brand mark, replaced by the official logo
  assets described above.
- The local `/accessibility`, `/privacy` and `/cookies` pages, replaced by
  external gov.scot links (see above), and the now-unused `Table`
  design-system client wrapper they were the only user of.
- Tests and e2e coverage tied to the removed routes.

Production engineering (TypeScript, ESLint, Vitest, Playwright, axe,
GitHub Actions CI, Dependabot, Docker, `/api/health`, security headers) is
unchanged.

## [0.1.0] - 2026-07-27

### Added

- Initial release of the Scottish Government website starter template.
- Next.js App Router application (TypeScript, strict mode, `src` directory).
- Scottish Government Design System integration
  (`@scottish-government/designsystem-react` 1.1.0,
  `@scottish-government/design-system` 4.1.1) with shared site header,
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
