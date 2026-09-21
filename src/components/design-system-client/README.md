# Client-boundary design system wrappers

`@scottish-government/designsystem-react` (currently 1.2.1) does not mark any of its
files with a `"use client"` directive. Most components are plain functions
with no React state and render fine inside server components, but a subset
use hooks (`useState`, `useEffect`, `useRef`, `useId`, `useContext`) to
progressively enhance behaviour (character counts, accordion open/close
state, mobile navigation, error summary IDs, and so on). Rendering those
directly inside a server component fails, because hooks only work inside a
client component tree.

Each file in this folder re-exports one such component behind a local
`"use client"` boundary:

```tsx
"use client";
export { default } from "@scottish-government/designsystem-react/dist/components/Accordion";
```

Pages and other server components can then import from here and pass
server-rendered JSX as children/props: only this thin wrapper becomes part
of the client bundle, not the page around it.

Some of these components attach sub-components as static properties (for
example `Accordion.Item`, `SummaryList.Item`). A server component can
render the parent directly, but **cannot** access a sub-component like
`.Item` on it. A property access on a client-boundary export doesn't
survive the server/client split, and fails at render time with "Element
type is invalid". Where a server page needs the sub-component too, it
should be re-exported under its own name from the wrapper file (`export
const FooItem = Foo.Item`) so it gets its own client reference and can be
imported and rendered directly, for example:

```tsx
// src/components/design-system-client/Foo.tsx
"use client";
import Foo from "@scottish-government/designsystem-react/dist/components/Foo";
export default Foo;
export const FooItem = Foo.Item;
```

This is only needed when the sub-component is used from a server component.
If everything lives inside one "use client" file already, plain dot access
works as normal.

`Table.tsx` is currently the only wrapper in use, re-exporting the design
system's `Table` behind a `"use client"` boundary so the Technical
information page (a server component) can render the "What the template
includes" table by passing plain `<thead>`/`<tbody>` markup as children.
The rest of this folder is kept because it's the documented pattern to
follow the moment you add a page that needs one of the other hook-using
components.

Components used directly (no hooks, safe in server components): Breadcrumbs,
PageHeader, InsetText, WarningText, Details, Tag, Button, ButtonGroup,
Select, ErrorMessage, Pagination, SequentialNavigation, PageMetadata,
ContentsNav, CategoryList, CategoryItem, SiteFooter, PhaseBanner.

`SiteHeader`, `SiteNavigation` and `SkipLinks` also need a client boundary,
but because they need extra logic (the current pathname, fixed props) they
have their own bespoke wrappers in `src/components/layout/` instead of a
plain re-export here.
