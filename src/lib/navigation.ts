/**
 * Determines whether a navigation item should be marked as the current page.
 * The home page only matches on an exact path; other items also match
 * nested routes (e.g. "/components" matches "/components/anything").
 */
export function isNavigationItemActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
