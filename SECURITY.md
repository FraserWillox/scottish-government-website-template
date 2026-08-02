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
transitive dependencies of `eslint` (via `minimatch`/`brace-expansion`, a
devDependency-only, build-time chain) and internal dependencies of `next`
itself (`postcss`, `sharp`). None of these are reachable from application
runtime code, and `npm audit fix --force` would downgrade `next` to an
unrelated, years-old release rather than fix them. Do not run it blindly.
Re-run `npm audit` after upgrading `next`/`eslint` and re-assess before
treating this list as current.

## Supported versions

This template tracks the latest stable releases of Next.js, React and the
Scottish Government Design System at the time of each update. There is no
long-term-support branch. Services built from this template are expected
to fork it and manage their own dependency upgrades from that point.
