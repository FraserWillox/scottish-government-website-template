import PageHeader from "@scottish-government/designsystem-react/dist/components/PageHeader";
import InsetText from "@scottish-government/designsystem-react/dist/components/InsetText";

import PageContainer from "@/components/layout/PageContainer";
import NextLinkAdapter from "@/components/navigation/NextLinkAdapter";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <PageContainer>
      <PageHeader title={siteConfig.name} />

      <p className="ds_lead">
        This proprietary starter template provides a foundation for teams
        building Scottish Government websites and services with Next.js
        and the Scottish Government Design System. The template itself is
        not an official, published Scottish Government service.
      </p>

      <InsetText>
        See the <NextLinkAdapter href="/about">About page</NextLinkAdapter>{" "}
        for what to review and replace before adopting this template for a
        real service.
      </InsetText>

      <h2>Getting started</h2>
      <ol>
        <li>Clone or use this repository as a template.</li>
        <li>
          Install dependencies with <code>npm install</code>.
        </li>
        <li>
          Replace the example title, content, navigation and metadata in{" "}
          <code>src/config/</code> and <code>src/app/</code>.
        </li>
        <li>Review the branding and legal requirements in {" "}
          <code>NOTICE.md</code> and <code>public/branding/README.md</code>.
        </li>
        <li>
          Run the checks (<code>npm run check</code>) before deployment.
        </li>
      </ol>

      <h2>Find out more</h2>
      <ul>
        <li>
          See the{" "}
          <NextLinkAdapter href="/technical-information">
            Technical information page
          </NextLinkAdapter>{" "}
          for what the template includes and the technology stack it is
          built on.
        </li>
        <li>
          Read the <NextLinkAdapter href="/about">About page</NextLinkAdapter>{" "}
          for the template&rsquo;s purpose, what to replace, and how to get
          in touch.
        </li>
      </ul>
    </PageContainer>
  );
}
