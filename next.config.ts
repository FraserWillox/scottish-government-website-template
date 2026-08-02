import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deny by default; enable individual features per-page if you add one
  // that genuinely needs it (for example camera=(self) on an upload page).
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Prevents this site being framed by another origin (clickjacking
  // protection). Prefer this over X-Frame-Options, which CSP supersedes.
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
];

const nextConfig: NextConfig = {
  // Produces a self-contained server build (.next/standalone) for the
  // Docker image, instead of requiring a full node_modules install in the
  // runtime container. See Dockerfile.
  output: "standalone",

  // Removes the "X-Powered-By: Next.js" response header.
  poweredByHeader: false,

  reactStrictMode: true,

  // The published dist output of @scottish-government/designsystem-react
  // ships JSX-containing files with a .jsx extension whose own internal
  // require() calls omit the extension (e.g. require("./Table")), and
  // several of its components import small progressive-enhancement
  // behaviour modules directly from @scottish-government/design-system's
  // TypeScript source (e.g. .../src/components/table/table.ts) rather than
  // a compiled dist file. Both packages need Next's own compiler to run
  // over them so those files resolve and parse correctly.
  transpilePackages: [
    "@scottish-government/designsystem-react",
    "@scottish-government/design-system",
  ],

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
