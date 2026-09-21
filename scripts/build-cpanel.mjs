// Orchestrates `npm run build:cpanel` (DEPLOY_TARGET=cpanel; see
// package.json and deploy/cpanel/README.md).
//
// Static hosting has no Node.js runtime, so `/api/health` can't be a
// genuine runtime health check there (see src/app/api/health/route.ts).
// Next.js's static export also fails the whole build for a Route Handler
// that isn't explicitly marked static, and forcing it static with
// `export const dynamic = "force-static"` would change its behaviour in
// the normal standalone/Docker build too (it would stop re-running on
// every request). Excluding it at the file-system level, by temporarily
// moving `src/app/api` aside for the duration of the export build, avoids
// both problems without touching route.ts or its standalone behaviour.
import { spawnSync } from "node:child_process";
import { existsSync, renameSync, copyFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(rootDir, "src", "app", "api");
const apiDirBackup = path.join(rootDir, "src", "app", "_api.excluded-from-cpanel-export");
const nextCacheDir = path.join(rootDir, ".next");
const outDir = path.join(rootDir, "out");
const htaccessSource = path.join(rootDir, "deploy", "cpanel", ".htaccess");
const htaccessDestination = path.join(outDir, ".htaccess");

// A `.next` cache left over from a normal `npm run build`/`npm run dev`
// (where /api/health still exists) can hold stale generated type files
// that reference it, which then fail to resolve once the route is moved
// aside below. Always start this build from a clean cache.
rmSync(nextCacheDir, { recursive: true, force: true });

const apiDirMoved = existsSync(apiDir);
if (apiDirMoved) {
  renameSync(apiDir, apiDirBackup);
}

let result;
try {
  result = spawnSync("npx next build", {
    cwd: rootDir,
    stdio: "inherit",
    shell: true,
    env: process.env,
  });
} finally {
  // Always restore /api, even if the build failed, so the working tree is
  // never left with the route missing.
  if (apiDirMoved) {
    renameSync(apiDirBackup, apiDir);
  }
}

if (result.error) {
  throw result.error;
}
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (!existsSync(outDir)) {
  throw new Error(
    `Expected a static export at ${outDir}, but "next build" did not produce one.`,
  );
}

copyFileSync(htaccessSource, htaccessDestination);
console.log(
  `Copied ${path.relative(rootDir, htaccessSource)} to ${path.relative(rootDir, htaccessDestination)}`,
);
console.log(
  "Excluded /api (including /api/health) from the static export: static hosting has no live Next.js server to answer it. See deploy/cpanel/README.md.",
);
