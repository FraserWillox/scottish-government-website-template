import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  usePathname: () => "/about",
}));

import PrimaryHeader from "./PrimaryHeader";

describe("PrimaryHeader", () => {
  it("marks the navigation item matching the current path as current", () => {
    render(<PrimaryHeader />);

    const currentLinks = screen.getAllByRole("link", { name: "About" });
    for (const link of currentLinks) {
      expect(link).toHaveAttribute("aria-current", "page");
    }

    const homeLinks = screen.getAllByRole("link", { name: "Home" });
    for (const link of homeLinks) {
      expect(link).not.toHaveAttribute("aria-current");
    }
  });

  it("renders the Scottish Government logo linking to the homepage", () => {
    render(<PrimaryHeader />);

    const logo = screen.getByRole("img", { name: "Scottish Government" });
    expect(logo).toHaveAttribute("src", "/branding/scottish-government.svg");
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });
});
