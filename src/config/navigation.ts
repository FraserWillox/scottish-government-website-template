import { siteConfig } from "@/config/site";

export interface NavigationItem {
  label: string;
  href: string;
}

/**
 * Primary site navigation, rendered in the site header.
 * Add or remove entries here rather than duplicating links across pages.
 */
export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Technical information", href: "/technical-information" },
  { label: "About", href: "/about" },
];

/**
 * Secondary links, rendered in the site footer. These point at the
 * corresponding gov.scot policies rather than local pages. This template
 * does not ship its own accessibility statement, privacy notice or
 * cookies page. Adopting teams should decide whether their own service
 * needs its own local policy pages and, if so, replace these with links
 * to them.
 */
export const footerNavigation: NavigationItem[] = [
  { label: "Accessibility statement", href: siteConfig.links.accessibilityStatement },
  { label: "Privacy notice", href: siteConfig.links.privacyNotice },
  { label: "Cookies", href: siteConfig.links.cookies },
];
