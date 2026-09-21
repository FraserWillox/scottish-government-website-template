import { NextResponse } from "next/server";

/**
 * Minimal health check for container orchestrators (see the Dockerfile
 * HEALTHCHECK and any Kubernetes/load balancer probe configuration).
 * Deliberately returns no environment or version detail.
 *
 * Not applicable to the cPanel static export (`npm run build:cpanel`):
 * static hosting has no running Node.js process to check, so a build-time
 * static copy of this response would be a misleading, unchanging file
 * rather than a genuine runtime health check. scripts/build-cpanel.mjs
 * excludes this route from that build entirely. This route is untouched,
 * and unaffected, in the normal standalone/Docker build.
 */
export function GET() {
  return NextResponse.json({ status: "ok" });
}
