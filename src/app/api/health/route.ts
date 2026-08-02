import { NextResponse } from "next/server";

/**
 * Minimal health check for container orchestrators (see the Dockerfile
 * HEALTHCHECK and any Kubernetes/load balancer probe configuration).
 * Deliberately returns no environment or version detail.
 */
export function GET() {
  return NextResponse.json({ status: "ok" });
}
