import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";
import { siteConfig } from "@/config/site";

describe("HomePage", () => {
  it("renders the site name as the main heading", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { level: 1, name: siteConfig.name }),
    ).toBeInTheDocument();
  });

  it("links to the About page", () => {
    render(<HomePage />);
    expect(
      screen.getAllByRole("link", { name: "About page" })[0],
    ).toHaveAttribute("href", "/about");
  });

  it("links to the Technical information page", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("link", { name: "Technical information page" }),
    ).toHaveAttribute("href", "/technical-information");
  });

  it("does not describe the template as publicly reusable", () => {
    const { container } = render(<HomePage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/open[\s-]source/i);
  });
});
