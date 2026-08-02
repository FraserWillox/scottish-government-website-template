import type { ReactNode } from "react";

/**
 * Standard page-width wrapper (design system's ds_wrapper) with vertical
 * spacing, used by every page so content lines up consistently.
 */
export default function PageContainer({ children }: { children: ReactNode }) {
  return <div className="ds_wrapper ds_wrapper--page">{children}</div>;
}
