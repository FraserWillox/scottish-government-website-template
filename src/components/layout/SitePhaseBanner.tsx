import PhaseBanner from "@scottish-government/designsystem-react/dist/components/PhaseBanner";

import { siteConfig } from "@/config/site";

/**
 * PhaseBanner uses no hooks (see design-system-client/README.md's "used
 * directly" list), so it can render straight from a server component.
 * No client boundary wrapper needed.
 *
 * feedbackUrl points at an external destination (this template's own
 * GitHub Issues page by default; see `src/config/site.ts`), so this is a
 * plain external anchor rather than the internal `NextLinkAdapter` used
 * for in-app routes elsewhere.
 */
export default function SitePhaseBanner() {
  return (
    <PhaseBanner phaseName={siteConfig.phase.name}>
      This is a starter template. Your{" "}
      <a href={siteConfig.phase.feedbackUrl} target="_blank" rel="noopener noreferrer">
        {siteConfig.phase.feedbackText}
      </a>{" "}
      will help us improve it.
    </PhaseBanner>
  );
}
