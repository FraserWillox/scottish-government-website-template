import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Both design system packages ship .jsx files containing raw JSX syntax,
// which Node cannot parse via a plain require(). ssr.noExternal tells
// Vite's SSR pipeline to transform them (the same reason next.config.ts
// lists them in transpilePackages) instead of handing them to Node's
// native, untransformed require().
const designSystemPackages = [
  "@scottish-government/designsystem-react",
  "@scottish-government/design-system",
];

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  ssr: {
    noExternal: designSystemPackages,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    css: true,
    server: {
      deps: {
        inline: designSystemPackages,
      },
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.d.ts", "src/**/*.test.{ts,tsx}"],
    },
  },
});
