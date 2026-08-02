# Notice

Scottish Government Website Template

Copyright © 2026 Fraser Willox

Created by Fraser Willox, Director, Dream Tech Ltd.

This repository mixes three different kinds of material with different
rights attached. Read this before reusing anything from it. This file is
informational: it does not itself grant any permission to use this
template. See [LICENSE](LICENSE) for the applicable terms.

## 1. This template's own source code

The application code in this repository (everything under `src/`,
configuration files, tests, CI workflows, and documentation, excluding the
third-party material described below) is original work. Fraser Willox
claims copyright only in this original template code and original
documentation, not in third-party packages or Scottish Government branding.
This repository is proprietary: see [LICENSE](LICENSE) for the current
terms, which do not permit use, copying, modification or redistribution
without express written agreement.

Scottish Government branding and other third-party assets included in this
repository are not owned by Fraser Willox and are not covered by the
copyright notice for the original template source code. See the branding
documentation in `public/branding/README.md` and the applicable third-party
licence terms below.

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
unofficial site.

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
template's own proprietary source-code licence.** The MIT licence on the
two npm packages above covers their *code*. It does not, by itself, grant a
general right to reuse the Scottish Government logo, the "saltire" mark, or
the Open Government Licence logo outside a genuine Scottish Government
context. Before using this template, including these bundled assets, for
a real, publicly branded service, confirm with your organisation's design,
communications or legal team that your use is authorised, and see
`public/branding/README.md` for full detail.

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
| This template's source code | Proprietary, all rights reserved (see [LICENSE](LICENSE)) | Yes |
| `@scottish-government/design-system` | MIT (Crown Copyright) | Yes, as an npm dependency |
| `@scottish-government/designsystem-react` | MIT | Yes, as an npm dependency |
| Scottish Government logo, OGL logo, gov.scot logo (`public/branding/*.svg`, favicon) | Crown copyright, not MIT | **Yes, confirm authorisation before reuse (see above)** |
