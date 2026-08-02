import type { Metadata } from "next";
import Breadcrumbs from "@scottish-government/designsystem-react/dist/components/Breadcrumbs";
import PageHeader from "@scottish-government/designsystem-react/dist/components/PageHeader";
import InsetText from "@scottish-government/designsystem-react/dist/components/InsetText";

import PageContainer from "@/components/layout/PageContainer";
import NextLinkAdapter from "@/components/navigation/NextLinkAdapter";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "What this starter template is, who it is for, and what adopting teams need to review.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/" linkComponent={NextLinkAdapter}>
          Home
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>About</Breadcrumbs.Item>
      </Breadcrumbs>

      <PageHeader title="About this template" />

      <InsetText>
        This repository is a starter template, not an official, published
        Scottish Government service. Nothing on this site represents
        government policy or guidance.
      </InsetText>

      <h2>Purpose</h2>
      <p>
        {siteConfig.name} gives teams building a new Scottish Government
        website or digital service a working, accessible baseline: a
        Next.js application already wired up to the Scottish Government
        Design System, with the testing, accessibility checks and
        deployment scaffolding a real project needs, so teams can spend
        their time on their own service instead of re-solving the same
        integration problems.
      </p>

      <h2>Who it is for</h2>
      <p>
        Developers and delivery teams starting a new public-facing Scottish
        Government website or service who want a working, accessible
        baseline to clone and adapt, rather than assembling one from
        scratch.
      </p>

      <h2>What you need to replace or review</h2>
      <p>Before adopting this template for a real service, you will need to:</p>
      <ul>
        <li>
          Replace the local branding assets in{" "}
          <code>public/branding/</code> and the site header/footer with
          your own service&rsquo;s approved branding
        </li>
        <li>
          Update the site name, description and links in{" "}
          <code>src/config/site.ts</code> and the navigation in{" "}
          <code>src/config/navigation.ts</code>
        </li>
        <li>
          Replace the example content on the home and about pages with your
          own service&rsquo;s content
        </li>
        <li>
          Decide whether your service needs its own accessibility
          statement, privacy notice and cookies page. This template does
          not ship local versions of these; the footer links to the
          corresponding gov.scot policies instead. Add your own pages
          if your service&rsquo;s content, data collection or cookie usage
          differs from those
        </li>
        <li>
          Review <code>NOTICE.md</code> and confirm your use of Crown
          copyright material and branding with your organisation
        </li>
      </ul>
      <p>
        Every project built from this template remains responsible for its
        own content, accessibility compliance, privacy notice, cookie usage,
        security posture and deployment decisions. This template provides a
        starting structure, not a finished or compliant service.
      </p>

      <h2 id="contact">Contact and support</h2>
      <p>
        To report an issue with this template itself (a bug, an
        accessibility problem in the starter pages, or a broken
        integration), open an issue in this repository once it has a public
        home, or contact whoever maintains your organisation&rsquo;s copy of
        it.
      </p>
      <p>
        For support with Scottish Government Design System components
        themselves, not for this template, and not for services built from
        it, contact the Design System team at{" "}
        <a href={`mailto:${siteConfig.designSystemSupportEmail}`}>
          {siteConfig.designSystemSupportEmail}
        </a>{" "}
        or see the{" "}
        <a
          href={siteConfig.links.designSystemDocs}
          rel="noopener noreferrer"
          target="_blank"
        >
          Design System documentation
        </a>
        .
      </p>

      <h2>Branding and licensing caution</h2>
      <p>
        The Open Government Licence covers the wording used in this
        template&rsquo;s footer. The Scottish Government and Open Government
        Licence logos stored in <code>public/branding/</code> are Crown
        copyright, not covered by this template&rsquo;s own proprietary
        source licence. See <code>NOTICE.md</code> and{" "}
        <code>public/branding/README.md</code> before reusing them outside a
        genuine Scottish Government context.
      </p>
    </PageContainer>
  );
}
