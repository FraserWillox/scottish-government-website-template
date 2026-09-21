# Contributing

Thanks for your interest in improving this template.

This repository is open source, licensed under the
[Apache License, Version 2.0](LICENSE) (see also [NOTICE.md](NOTICE.md)).
By submitting a contribution, you confirm that you have the right to
submit it (for example, it is your own original work, or you otherwise
have the necessary rights and permissions), and you agree that your
contribution is made under the repository's Apache-2.0 licence.

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

## How to contribute

1. Fork the repository, or create a branch if you have write access.
2. Make focused changes: keep pull requests to one change at a time.
3. Add or update tests for what you changed.
4. Run the full check locally:
   ```bash
   npm run check      # lint, typecheck, unit tests, build
   npm run test:e2e   # Playwright, including accessibility scans
   ```
5. Open a pull request describing what changed and why.

Please also:

- Test any UI change with a keyboard, not just a mouse
- Use British English in user-facing copy and documentation
- Avoid adding new runtime dependencies unless there's a clear need
- Keep example content fictional, neutral and clearly labelled as an
  example, not real policy, guidance, or branding

## Design system changes

If your change touches how a `@scottish-government/designsystem-react`
component is used, please note in the PR description which version of the
package you tested against, and whether you had to change any deep
`dist/components/...` imports. See README.md "Design system integration
decisions" for the current list and why they exist.

## Code of conduct

By participating in this project you agree to abide by the
[Code of Conduct](CODE_OF_CONDUCT.md).
