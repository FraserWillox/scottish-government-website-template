"use client";

import SkipLinks from "@scottish-government/designsystem-react/dist/components/SkipLinks";

/**
 * SkipLinks uses useEffect internally to progressively enhance focus
 * behaviour, so it needs to run inside a client component.
 */
export default function SkipToContent() {
  return <SkipLinks mainContentId="main-content" mainLinkText="Skip to main content" />;
}
