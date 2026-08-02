import type { Metadata } from "next";
import "@scottish-government/design-system/dist/css/design-system.css";
import "./globals.css";

import { siteConfig } from "@/config/site";
import SkipToContent from "@/components/layout/SkipToContent";
import PrimaryHeader from "@/components/layout/PrimaryHeader";
import PrimaryFooter from "@/components/layout/PrimaryFooter";
import SitePhaseBanner from "@/components/layout/SitePhaseBanner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <div className="ds_page">
          <div className="ds_page__top">
            <SkipToContent />
            <PrimaryHeader />
            <SitePhaseBanner />
          </div>

          <div className="ds_page__middle">
            {/* tabIndex={-1}: without it, activating the skip link scrolls
                the browser here but never actually moves keyboard focus,
                since a plain <main> isn't focusable. */}
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </div>

          <div className="ds_page__bottom">
            <PrimaryFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
