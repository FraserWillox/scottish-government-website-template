# Contributing

Thanks for your interest in improving this template.

This repository is currently private and proprietary (see
[LICENSE](LICENSE) and [NOTICE.md](NOTICE.md)). Contributions are accepted
only through the repository owner's review process: opening a pull request
does not create any licence or right to use the template, and accepting a
contribution does not change the repository's proprietary status unless
agreed separately in writing. By submitting a contribution, you confirm
that you have the right to submit it (for example, it is your own original
work, or you otherwise have the necessary rights and permissions).

## Before you start

This is a **starter template** used as a baseline by many different
services, not a product in its own right. Good contributions:

- fix bugs or accessibility issues in the template itself
- improve documentation or make the example content clearer
- keep the design system integration correct as new versions are released
- add tests, or improve CI/Docker/tooling reliability

Contributions that are only useful to one specific service (custom
branding, service-specific content, business logic) belong in that
service's own fork, not here. If you're unsure whether something fits,
open an issue first to discuss it.

## Development setup

```bash
git clone <your fork>
cd scottish-government-website-template
npm install
npm run dev
```

See [README.md](README.md) for the full list of prerequisites and scripts.

## Before opening a pull request

Run the full check locally:

```bash
npm run check      # lint, typecheck, unit tests, build
npm run test:e2e   # Playwright, including accessibility scans
```

Please also:

- Test any UI change with a keyboard, not just a mouse
- Use British English in user-facing copy and documentation
- Avoid adding new runtime dependencies unless there's a clear need
- Keep example content fictional, neutral and clearly labelled as an
  example, not real policy, guidance, or branding

## Commit and PR style

- Keep pull requests focused on one change
- Write commit messages that explain *why*, not just *what*
- Fill in the pull request template's checklist

## Design system changes

If your change touches how a `@scottish-government/designsystem-react`
component is used, please note in the PR description which version of the
package you tested against, and whether you had to change any deep
`dist/components/...` imports. See README.md "Design system integration
decisions" for the current list and why they exist.

## Code of conduct

By participating in this project you agree to abide by the
[Code of Conduct](CODE_OF_CONDUCT.md).
