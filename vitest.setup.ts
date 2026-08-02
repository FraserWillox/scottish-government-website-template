import NodeModule from "node:module";
import fs from "node:fs";
import ts from "typescript";
import "@testing-library/jest-dom/vitest";

// `_extensions` is Node's legacy but still-functional CommonJS require hook
// API. It isn't part of @types/node's public Module typings.
const Module = NodeModule as unknown as {
  _extensions: NodeJS.RequireExtensions;
};

// @scottish-government/designsystem-react and @scottish-government/design-system
// ship CommonJS files (e.g. dist/components/Table/Table.jsx) containing
// raw JSX, whose own internal require() calls also omit the file extension
// (e.g. require("./Table")). Vite/Next handle this by compiling the
// packages themselves (see transpilePackages in next.config.ts), but under
// Vitest, once one of these packages is loaded, its own nested require()
// calls are handled by Node's native CommonJS loader, which neither
// tries a .jsx extension nor can parse JSX syntax. Registering a loader
// for .jsx (using the TypeScript compiler already in devDependencies)
// makes Node resolve and transpile these files the same way Next does.
const jsxRequireExtension: NodeJS.RequireExtensions[string] = (mod, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const { outputText } = ts.transpileModule(source, {
    fileName: filename,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  });
  (mod as unknown as { _compile: (code: string, filename: string) => void })._compile(
    outputText,
    filename,
  );
};

if (!Module._extensions[".jsx"]) {
  Module._extensions[".jsx"] = jsxRequireExtension;
}

// Several designsystem-react components (Table, TextInput, SiteHeader...)
// import small progressive-enhancement behaviour modules straight from
// @scottish-government/design-system's TypeScript source, e.g.
// require(".../site-navigation/site-navigation") resolving to
// site-navigation.ts. Same problem, same fix, for .ts this time.
if (!Module._extensions[".ts"]) {
  Module._extensions[".ts"] = jsxRequireExtension;
}
