import Link from "next/link";
import type { LinkComponent } from "@scottish-government/designsystem-react/dist/shared-types";

/**
 * Adapts the design system's `linkComponent` slot (used by SiteNavigation,
 * Breadcrumbs, SiteFooter.Link, ContentsNav, SideNavigation, Pagination and
 * SequentialNavigation) to render `next/link`, so internal navigation uses
 * client-side routing instead of a full page load.
 */
const NextLinkAdapter: LinkComponent = ({ href, children, ...rest }) => (
  <Link href={href ?? "#"} {...rest}>
    {children}
  </Link>
);

export default NextLinkAdapter;

/**
 * SiteNavigation.Item, ContentsNav.Item and SideNavigation.Item accept an
 * `isCurrent` prop, but in 1.1.0 they only apply the resulting
 * `aria-current="page"` to their own internal fallback <a>, not to
 * whatever `linkComponent` renders, and none of them spread extra props
 * either, so there is no other way to pass it through. This adapter sets
 * aria-current itself, using the isCurrent value the caller already
 * computed, so the link is still announced as the current page to screen
 * reader users.
 */
export function createCurrentPageLinkAdapter(isCurrent: boolean): LinkComponent {
  function CurrentPageLinkAdapter({ href, children, ...rest }: Parameters<LinkComponent>[0]) {
    return (
      <Link href={href ?? "#"} aria-current={isCurrent ? "page" : undefined} {...rest}>
        {children}
      </Link>
    );
  }

  return CurrentPageLinkAdapter;
}
