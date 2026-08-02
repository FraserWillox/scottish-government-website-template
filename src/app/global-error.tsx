"use client";

import { useEffect } from "react";

/**
 * Catches errors thrown by the root layout itself. Because the root layout
 * (including <html> and <body>) may have failed, this file must render its
 * own minimal <html>/<body>. It cannot rely on design system components
 * or global.css having loaded correctly, so it stays deliberately plain.
 */
export default function GlobalError({
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
    <html lang="en-GB">
      <body>
        <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
          <h1>Sorry, there is a problem with this service</h1>
          <p>Try again, or come back later.</p>
          <p>
            <button type="button" onClick={reset}>
              Try again
            </button>
          </p>
          <p>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- the root layout (and its router context) may itself have failed here, so this must not depend on next/link */}
            <a href="/">Return to the home page</a>
          </p>
        </main>
      </body>
    </html>
  );
}
