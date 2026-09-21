# Security policy

## Reporting a vulnerability

If you find a security issue in this template, please report it privately
rather than opening a public issue, for example using your Git hosting
provider's private vulnerability reporting feature ("Report a
vulnerability" under the Security tab), if enabled on this repository.
Include:

- A description of the issue and its potential impact
- Steps to reproduce it
- Any relevant logs or screenshots

We aim to acknowledge reports within 5 working days.

## Scope

This is a starter template, not a deployed service. Please report issues in
the template's own code and configuration (for example, a missing security
header, an unsafe default, or a dependency with a known exploitable
vulnerability that is actually reachable from this template's code).

Issues in a real service built from this template are the responsibility of
the team running that service, not this repository.

## Known, monitored advisories

Running `npm audit` against this project currently reports advisories in
transitive, devDependency-only, build-time dependencies of `eslint` and
`vitest` (`brace-expansion`, `js-yaml`, `nanoid`, `@vitest/mocker`). None
of these are reachable from application runtime code: they only run
during linting, type generation and the test suite, never in the built
application. Fixing them currently requires a major upgrade of `eslint`
or `vitest`, so `npm audit fix --force` is not run automatically. Re-run
`npm audit` periodically and re-assess before treating this list as
current.

## Supported versions

This template tracks the latest stable releases of Next.js, React and the
Scottish Government Design System at the time of each update. There is no
long-term-support branch. Services built from this template are expected
to fork it and manage their own dependency upgrades from that point.
