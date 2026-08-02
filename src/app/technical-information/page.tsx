import type { Metadata } from "next";
import Breadcrumbs from "@scottish-government/designsystem-react/dist/components/Breadcrumbs";
import PageHeader from "@scottish-government/designsystem-react/dist/components/PageHeader";

import PageContainer from "@/components/layout/PageContainer";
import Table from "@/components/design-system-client/Table";
import TechStackList from "@/components/examples/TechStackList";
import NextLinkAdapter from "@/components/navigation/NextLinkAdapter";

export const metadata: Metadata = {
  title: "Technical information",
  description:
    "What this starter template includes and the technology stack it is built on.",
};

const includesRows: Array<{ title: string; description: string }> = [
  {
    title: "Responsive page structure",
    description:
      "The shared header, primary navigation, PhaseBanner, a focusable main content landmark, and footer, used on every page.",
  },
  {
    title: "Code quality checks",
    description: "ESLint (eslint-config-next) and TypeScript in strict mode.",
  },
  {
    title: "Unit testing",
    description: "Vitest and React Testing Library.",
  },
  {
    title: "Browser and accessibility testing",
    description:
      "Playwright end-to-end tests and axe-core accessibility scans, each run against both desktop and mobile viewports.",
  },
  {
    title: "Continuous integration",
    description:
      "A GitHub Actions workflow that runs the checks above on every change.",
  },
  {
    title: "Dependency maintenance",
    description: "Dependabot, configured to open weekly update pull requests.",
  },
  {
    title: "Production build",
    description: "Standalone Next.js output, for a minimal production server.",
  },
  {
    title: "Container configuration",
    description:
      "A multi-stage Dockerfile that builds a non-root production runtime image.",
  },
  {
    title: "Health checking",
    description:
      "A /api/health route for load balancer and container orchestrator probes.",
  },
  {
    title: "Security baseline",
    description:
      "Baseline response headers (see next.config.ts) and an example environment file (.env.example) to start from.",
  },
];

export default function TechnicalInformationPage() {
  return (
    <PageContainer>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/" linkComponent={NextLinkAdapter}>
          Home
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Technical information</Breadcrumbs.Item>
      </Breadcrumbs>

      <PageHeader title="Technical information" />

      <p className="ds_lead">
        Technical detail for developers: the technology stack, what the
        template includes, how it is tested and shipped, and how to adapt
        it for your own service.
      </p>

      <h2>Technology stack</h2>
      <TechStackList />

      <h2>What the template includes</h2>
      <Table smallscreen="boxes">
        <caption>Engineering features included in this template</caption>
        <thead>
          <tr>
            <th scope="col">Template includes</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {includesRows.map((row) => (
            <tr key={row.title}>
              <th scope="row">{row.title}</th>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Quality and testing</h2>
      <p>
        Automated checks run at three levels: unit tests (Vitest and React
        Testing Library), end-to-end tests (Playwright, covering desktop and
        mobile viewports), and automated accessibility scans (axe-core,
        against WCAG 2.0/2.2 A and AA rules). Automated accessibility checks
        do not replace manual testing with a keyboard, a screen reader, or
        people with access needs.
      </p>

      <h2>Production and delivery</h2>
      <p>
        Builds use Next.js standalone output (<code>npm run build</code>),
        served with <code>node .next/standalone/server.js</code> in
        production, as the Dockerfile does. The Dockerfile defines a
        multi-stage build with a non-root runtime user, for building the
        production container image. GitHub Actions runs the checks above on
        every change, and Dependabot opens weekly dependency update pull
        requests. <code>next.config.ts</code> sets a baseline set of
        response headers: a starting point, not a guarantee of security or
        compliance.
      </p>

      <h2>Useful commands</h2>
      <ul>
        <li>
          <code>npm run dev</code>: start the development server
        </li>
        <li>
          <code>npm run build</code>: production build (standalone output)
        </li>
        <li>
          <code>npm run test</code>: unit tests
        </li>
        <li>
          <code>npm run test:e2e</code>: Playwright end-to-end and
          accessibility tests
        </li>
        <li>
          <code>npm run check</code>: lint, typecheck, unit tests and build,
          in sequence
        </li>
      </ul>

      <h2>Adapting the starter</h2>
      <ul>
        <li>
          <code>src/config/site.ts</code>: public, non-secret site values
          (name, description, phase banner wording, external links,
          branding asset paths). Not for secrets or credentials.
        </li>
        <li>
          <code>src/config/navigation.ts</code>: primary and footer
          navigation
        </li>
        <li>
          <code>src/app/</code>: page content for Home, Technical
          information and About
        </li>
        <li>
          <code>.env.example</code>: environment-specific settings; copy it
          to <code>.env.local</code> for local overrides
        </li>
        <li>
          <code>public/branding/</code>: approved branding assets (see the
          licensing notes there before replacing them)
        </li>
        <li>
          <code>next.config.ts</code>: deployment and response-header
          decisions
        </li>
      </ul>

      <p>
        See the <NextLinkAdapter href="/about">About page</NextLinkAdapter> for
        the template&rsquo;s purpose, what to replace before adopting it, and
        how to get in touch.
      </p>
    </PageContainer>
  );
}
