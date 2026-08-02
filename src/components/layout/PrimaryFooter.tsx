import SiteFooter from "@scottish-government/designsystem-react/dist/components/SiteFooter";

import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * SiteFooter does not use any hooks internally, so, unlike PrimaryHeader,
 * it can stay a plain server component.
 *
 * The policy links in footerNavigation are external gov.scot URLs, not
 * local routes, so no linkComponent is passed here. SiteFooter.Link falls
 * back to rendering a plain <a href>, which is what an external link
 * should be (no next/link client-side routing, no target="_blank").
 */
export default function PrimaryFooter() {
  return (
    <SiteFooter>
      <SiteFooter.Links>
        {footerNavigation.map((item) => (
          <SiteFooter.Link key={item.href} href={item.href}>
            {item.label}
          </SiteFooter.Link>
        ))}
      </SiteFooter.Links>
      <SiteFooter.License>
        <a
          className="ds_site-footer__copyright-logo"
          href={siteConfig.links.ogLicence}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={siteConfig.branding.ogLicenceLogo} alt="Open Government Licence" />
        </a>
        <p>
          All content is available under the{" "}
          <a
            href={siteConfig.links.ogLicence}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Government Licence v3.0
          </a>
          , except for graphic assets and where otherwise stated.
        </p>
        <p>© Crown copyright</p>
      </SiteFooter.License>
      <SiteFooter.Org href={siteConfig.links.organisation} title={siteConfig.organisation}>
        <img src={siteConfig.branding.organisationLogo} alt="gov.scot" />
      </SiteFooter.Org>
    </SiteFooter>
  );
}
