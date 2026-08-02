import PageContainer from "@/components/layout/PageContainer";

/**
 * Shown while a route segment's server component is rendering. None of the
 * example pages fetch remote data, so this rarely appears for long. It is
 * included as a working pattern for pages you add that do.
 */
export default function Loading() {
  return (
    <PageContainer>
      <p role="status">Loading…</p>
    </PageContainer>
  );
}
