import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Indexing is controlled by `siteConfig.allowIndexing`
 * (`NEXT_PUBLIC_ALLOW_INDEXING`), not by which deployment target is being
 * built. The reusable template allows indexing by default, whatever
 * output mode it's built with. Fraser Willox's own cPanel demo build
 * (`npm run build:cpanel`) sets `NEXT_PUBLIC_ALLOW_INDEXING=false`
 * explicitly, since it's a demonstration deployment rather than a
 * launched service. See the matching `robots` metadata in layout.tsx and
 * deploy/cpanel/README.md.
 *
 * Explicit, since the output only depends on a build-time env var (never
 * per-request data): required for `output: "export"`, and already how
 * Next statically optimises this route in the standalone build anyway.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.allowIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
