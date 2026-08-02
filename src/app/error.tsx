"use client";

import { useEffect } from "react";
import Button from "@scottish-government/designsystem-react/dist/components/Button";

import PageContainer from "@/components/layout/PageContainer";
import NextLinkAdapter from "@/components/navigation/NextLinkAdapter";

/**
 * Catches rendering errors below the root layout. Deliberately shows no
 * stack trace or error detail to the visitor. Check server/CI logs for
 * that. Must be a client component (Next.js requirement for error.tsx).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageContainer>
      <h1>Sorry, there is a problem with this service</h1>
      <p>Try again, or come back later.</p>
      <p>
        <Button onClick={reset}>Try again</Button>
      </p>
      <p>
        <NextLinkAdapter href="/">Return to the home page</NextLinkAdapter>
      </p>
    </PageContainer>
  );
}
