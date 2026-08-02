import { siteConfig } from "@/config/site";

/**
 * Site header brand mark.
 *
 * Renders the official Scottish Government logo from a locally stored SVG
 * (public/branding/scottish-government.svg; see public/branding/README.md
 * for its source and licensing notes). A plain <img> is used rather than
 * next/image: the logo is a small, statically hosted vector asset served
 * directly from public/, so next/image's runtime resizing/optimisation
 * pipeline adds no benefit here and SiteHeader.Brand expects to clone a
 * single <img>/<svg> child directly.
 *
 * SiteHeader.Brand (see PrimaryHeader.tsx) wraps this in the homepage link
 * and clones it to add the design system's logo-image class, so only the
 * image itself belongs here.
 */
export default function BrandMark() {
  return (
    <img
      src={siteConfig.branding.headerLogo}
      alt="Scottish Government"
      width={207}
      height={31}
    />
  );
}
