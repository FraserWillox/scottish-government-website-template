# Branding assets

This starter template ships with the official Scottish Government branding
assets used by other live Scottish Government digital services, stored
locally so they render without depending on a third-party host at runtime:

| File | Used for | Source |
| --- | --- | --- |
| `scottish-government.svg` | Site header logo (`SiteHeader.Brand`, via `src/components/branding/BrandMark.tsx`) | `https://dev.energycertificate.service.gov.scot/scottish-government.svg` |
| `ogl.svg` | Open Government Licence logo in the site footer (`SiteFooter.License`) | `https://dev.energycertificate.service.gov.scot/ogl.svg` |
| `scottish-government--min.svg` | Small organisation logo in the site footer (`SiteFooter.Org`), linked to <https://www.gov.scot/> | `https://dev.energycertificate.service.gov.scot/scottish-government--min.svg` |

The favicon (`src/app/favicon.ico`) was sourced the same way, from
`https://dev.energycertificate.service.gov.scot/favicon.ico`.

That source is a live Scottish Government digital service used here only
as a reference for asset sourcing and visual treatment. This template does
not copy its content, business logic, or branding text.

## Licensing: read this before reusing these files elsewhere

These are Crown copyright graphic assets, **not** covered by this
template's own [proprietary source-code licence](../../LICENSE). The MIT
licence on `@scottish-government/design-system` and
`@scottish-government/designsystem-react` (see [NOTICE.md](../../NOTICE.md))
covers their *code*; it does not by itself grant a licence to reuse the
Scottish Government logo, the "saltire" mark, or the Open Government
Licence logo outside a genuine Scottish Government context.

Before using this template, including these bundled assets, for a real,
publicly branded service:

1. Confirm with your organisation's design, communications or legal team
   that your intended use of the Scottish Government logo and Crown
   branding is authorised.
2. Confirm your use complies with the
   [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
3. If your service is not itself an official Scottish Government service,
   do not present these assets in a way that implies it is one.

See also [`NOTICE.md`](../../NOTICE.md) in the repository root, which
distinguishes this template's own proprietary source code from the MIT
licences of its third-party dependencies and from Crown copyright branding.

## Where these are wired up

- `src/components/branding/BrandMark.tsx`: header logo `<img>`, rendered
  inside `SiteHeader.Brand` (see `src/components/layout/PrimaryHeader.tsx`),
  which already wraps it in a link back to the homepage.
- `src/components/layout/PrimaryFooter.tsx`: the OGL logo (linked to the
  licence text) and the small gov.scot organisation logo (linked to
  <https://www.gov.scot/>), using `SiteFooter.License` and `SiteFooter.Org`.

If you replace these with your own organisation's branding, keep the same
integration points (`BrandMark.tsx`, `PrimaryFooter.tsx`) rather than
restructuring the header/footer components, and update this file and
[`NOTICE.md`](../../NOTICE.md) to record the new source and licence.
