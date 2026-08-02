import PhaseBanner from "@scottish-government/designsystem-react/dist/components/PhaseBanner";

import { siteConfig } from "@/config/site";
import NextLinkAdapter from "@/components/navigation/NextLinkAdapter";

/**
 * PhaseBanner uses no hooks (see design-system-client/README.md's "used
 * directly" list), so it can render straight from a server component.
 * No client boundary wrapper needed.
 */
export default function SitePhaseBanner() {
  return (
    <PhaseBanner phaseName={siteConfig.phase.name}>
      This is a starter template. Your{" "}
      <NextLinkAdapter href={siteConfig.phase.feedbackUrl}>
        {siteConfig.phase.feedbackText}
      </NextLinkAdapter>{" "}
      will help us improve it.
    </PhaseBanner>
  );
}
