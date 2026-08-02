/**
 * Central, public site configuration. Everything here is safe to ship to
 * the browser: site name, description, phase banner wording, external
 * links and local branding asset paths. Adopting teams should replace
 * these values with their own service's details when reusing this
 * template.
 *
 * This file is for public, non-secret values only. Secrets, API keys,
 * tokens and environment-specific settings belong in `.env.local`
 * (see `.env.example`), never in source-controlled configuration like
 * this one. Security response headers live in `next.config.ts`, and
 * primary/footer navigation lives in `src/config/navigation.ts`.
 */
export const siteConfig = {
  name: "Scottish Government website template",
  shortName: "Website template",
  description:
    "A proprietary Next.js starter template for building Scottish Government websites and digital services with the Scottish Government Design System.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  organisation: "The Scottish Government",

  /** Wording and destination for the shared Beta phase banner. */
  phase: {
    name: "Beta",
    feedbackText: "feedback",
    /**
     * This repository currently has no Git remote configured, so there is
     * no GitHub repository URL to derive a /issues link from, so this
     * points at the About page's contact section instead. If you push
     * this repository to GitHub, change this to
     * `https://github.com/<org>/<repo>/issues` and update the About page
     * contact section to match.
     */
    feedbackUrl: "/about#contact",
  },

  /** External destinations referenced from the header, footer and pages. */
  links: {
    organisation: "https://www.gov.scot/",
    designSystemDocs: "https://designsystem.gov.scot/",
    designSystemReactDocs: "https://designsystem-react.vercel.app/",
    designSystemReactRepository:
      "https://github.com/scottish-government-design-system/designsystem-react",
    ogLicence:
      "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
    accessibilityStatement: "https://www.gov.scot/accessibility/",
    privacyNotice: "https://www.gov.scot/privacy/",
    cookies: "https://www.gov.scot/cookies/",
  },

  /** Support for the design system itself, not for this template or any
   * service built from it. See the About page contact section. */
  designSystemSupportEmail: "designsystem@gov.scot",

  /** Local paths under public/branding/, see public/branding/README.md. */
  branding: {
    headerLogo: "/branding/scottish-government.svg",
    ogLicenceLogo: "/branding/ogl.svg",
    organisationLogo: "/branding/scottish-government--min.svg",
  },
} as const;
