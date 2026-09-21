"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@scottish-government/designsystem-react/dist/components/SiteHeader";
// SiteNavigation is not re-exported from the package's public "components"
// barrel in the installed version (currently 1.2.1; it is only referenced
// internally by SiteHeader's types), so it is imported from its narrowest
// stable path instead. See README.md "Design system integration
// decisions" for details.
import SiteNavigation from "@scottish-government/designsystem-react/dist/components/SiteNavigation";

import { primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { isNavigationItemActive } from "@/lib/navigation";
import BrandMark from "@/components/branding/BrandMark";
import NextLinkAdapter, {
  createCurrentPageLinkAdapter,
} from "@/components/navigation/NextLinkAdapter";

/**
 * The design system's SiteHeader and SiteNavigation components use
 * useRef/useEffect internally (to progressively enhance the mobile menu
 * toggle) and this component needs the current pathname to mark the active
 * navigation item, so this whole header is a client component. Everything
 * else in the layout stays a server component.
 */
export default function PrimaryHeader() {
  const pathname = usePathname();

  return (
    <SiteHeader>
      <SiteHeader.Brand
        homeUrl="/"
        siteTitle={siteConfig.name}
        linkComponent={NextLinkAdapter}
      >
        <BrandMark />
      </SiteHeader.Brand>
      <SiteHeader.Navigation>
        <SiteNavigation aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const isCurrent = isNavigationItemActive(pathname, item.href);
            return (
              <SiteNavigation.Item
                key={item.href}
                href={item.href}
                isCurrent={isCurrent}
                linkComponent={createCurrentPageLinkAdapter(isCurrent)}
              >
                {item.label}
              </SiteNavigation.Item>
            );
          })}
        </SiteNavigation>
      </SiteHeader.Navigation>
    </SiteHeader>
  );
}
