import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TechnicalInformationPage from "./page";

describe("TechnicalInformationPage", () => {
  it("renders the page heading", () => {
    render(<TechnicalInformationPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Technical information" }),
    ).toBeInTheDocument();
  });

  it("shows Technology stack before What the template includes", () => {
    render(<TechnicalInformationPage />);
    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);

    const techStackIndex = headings.indexOf("Technology stack");
    const includesIndex = headings.indexOf("What the template includes");

    expect(techStackIndex).toBeGreaterThanOrEqual(0);
    expect(includesIndex).toBeGreaterThanOrEqual(0);
    expect(techStackIndex).toBeLessThan(includesIndex);
  });

  it("lists the technology stack, including the installed Design System version", () => {
    render(<TechnicalInformationPage />);
    expect(screen.getByText("Next.js (App Router)")).toBeInTheDocument();
    expect(
      screen.getAllByText("Scottish Government Design System React 1.1.0")
        .length,
    ).toBeGreaterThan(0);
  });

  it("renders an accessible table with the expected column headings", () => {
    render(<TechnicalInformationPage />);

    const table = screen.getByRole("table");
    expect(table).toHaveAccessibleName(
      "Engineering features included in this template",
    );

    expect(
      screen.getByRole("columnheader", { name: "Template includes" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Description" }),
    ).toBeInTheDocument();
  });

  it("renders the expected rows in the What the template includes table", () => {
    render(<TechnicalInformationPage />);

    const expectedRows = [
      "Responsive page structure",
      "Code quality checks",
      "Unit testing",
      "Browser and accessibility testing",
      "Continuous integration",
      "Dependency maintenance",
      "Production build",
      "Container configuration",
      "Health checking",
      "Security baseline",
    ];

    for (const title of expectedRows) {
      expect(
        screen.getByRole("rowheader", { name: title }),
      ).toBeInTheDocument();
    }
  });

  it("links to the About page", () => {
    render(<TechnicalInformationPage />);
    expect(
      screen.getAllByRole("link", { name: "About page" })[0],
    ).toHaveAttribute("href", "/about");
  });
});
