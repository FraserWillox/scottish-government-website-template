# Notice

Scottish Government Website Template

Copyright 2026 Fraser Willox

Created and maintained by Fraser Willox, Director, Dream Tech Ltd.

This repository contains original starter-template code created by Fraser
Willox, licensed under the Apache License, Version 2.0 (see
[LICENSE](LICENSE)). This file is informational: it explains what is, and
is not, covered by that licence. It does not itself grant any additional
permission beyond LICENSE.

## 1. This template's own source code

The application code in this repository (everything under `src/`,
configuration files, tests, CI workflows, and documentation, excluding the
third-party material described below) is original work. Fraser Willox
claims copyright only in this original template code and original
documentation, not in third-party packages or Scottish Government
branding. It is licensed to you under the Apache License, Version 2.0; see
[LICENSE](LICENSE) for the full terms.

Scottish Government branding and other third-party assets included in this
repository are not owned by Fraser Willox and are not covered by the
copyright notice for the original template source code. See the branding
documentation in `public/branding/README.md` and the applicable
third-party licence terms below.

## 2. The Scottish Government Design System

This template depends on:

- [`@scottish-government/design-system`](https://www.npmjs.com/package/@scottish-government/design-system)
  (Sass/CSS/JS): MIT licence, Crown Copyright 2019
- [`@scottish-government/designsystem-react`](https://www.npmjs.com/package/@scottish-government/designsystem-react)
  (React components): MIT licence

Both are maintained by the Scottish Government Design System team
(designsystem@gov.scot) and are used here under their published MIT
licences. The **code** of the design system is open source. That licence
covers the code. It does not, by itself, grant a general right to use the
Scottish Government name, logo, or other Crown branding on an unrelated or
unofficial site. This template is independently created and is not
maintained or endorsed by the Scottish Government Design System team
merely because it depends on their design system.

## 3. Crown branding and graphic assets

This repository bundles three Crown copyright graphic assets locally under
`public/branding/`, sourced from a live Scottish Government digital
service (see `public/branding/README.md` for the exact source URLs):

- `scottish-government.svg`: the header logo, rendered via
  `src/components/branding/BrandMark.tsx`
- `ogl.svg`: the Open Government Licence logo, used in the site footer
- `scottish-government--min.svg`: the small gov.scot organisation logo,
  used in the site footer

**These are Crown copyright assets. They are not covered by this
template's own Apache-2.0 source-code licence.** They are included because
this starter is specifically intended for use by authorised Scottish
Government projects. Including them here does not transfer ownership of
them to Fraser Willox, to this repository, or to anyone who uses this
template, and the MIT licence on the two npm packages above (which covers
their *code*) does not, by itself, grant a general right to reuse the
Scottish Government logo, the "saltire" mark, or the Open Government
Licence logo outside a genuine Scottish Government context.

Teams adopting this template remain responsible for confirming that their
service is authorised to use Scottish Government branding before they
publish it. Organisations or projects that are not entitled to use
Scottish Government branding must replace these assets with their own
organisation's approved branding before using this template for a real
service. See `public/branding/README.md` for full detail.

The footer text in this template references the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/),
which is the standard licence Scottish Government content is normally
published under. Using that wording, or the bundled logo, does not itself
grant you rights to Crown branding, and services adapted from this
template should confirm their own licensing position, including for any
real content they publish, with their own organisation.

## Summary

| Material | Licence | Included here? |
| --- | --- | --- |
| This template's source code | Apache License, Version 2.0 (see [LICENSE](LICENSE)) | Yes |
| `@scottish-government/design-system` | MIT (Crown Copyright) | Yes, as an npm dependency |
| `@scottish-government/designsystem-react` | MIT | Yes, as an npm dependency |
| Scottish Government logo, OGL logo, gov.scot logo (`public/branding/*.svg`, favicon) | Crown copyright, not MIT/Apache | **Yes, confirm authorisation before reuse (see above)** |
