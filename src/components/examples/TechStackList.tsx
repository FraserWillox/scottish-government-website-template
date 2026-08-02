"use client";

import SummaryList from "@scottish-government/designsystem-react/dist/components/SummaryList";

const techStack: Array<{ title: string; detail: string }> = [
  { title: "Framework", detail: "Next.js (App Router)" },
  { title: "UI library", detail: "React 19" },
  { title: "Language", detail: "TypeScript (strict mode)" },
  {
    title: "Design system",
    detail: "Scottish Government Design System React 1.1.0",
  },
  {
    title: "Automated testing",
    detail: "Vitest, React Testing Library and Playwright",
  },
  {
    title: "Accessibility checks",
    detail: "axe-core automated scans, run alongside manual testing",
  },
  { title: "Production build", detail: "Standalone output with a multi-stage Docker image" },
  { title: "Continuous integration", detail: "GitHub Actions" },
];

/**
 * SummaryList uses useId internally, so this is kept in its own small
 * client component rather than making the whole home page a client
 * component.
 */
export default function TechStackList() {
  return (
    <SummaryList>
      {techStack.map((item) => (
        <SummaryList.Item key={item.title} title={item.title}>
          <SummaryList.Value>{item.detail}</SummaryList.Value>
        </SummaryList.Item>
      ))}
    </SummaryList>
  );
}
