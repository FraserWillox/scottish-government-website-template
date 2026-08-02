import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";
import { siteConfig } from "@/config/site";

describe("AboutPage", () => {
  it("renders the page heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "About this template" }),
    ).toBeInTheDocument();
  });

  it("has a contact section with a stable id for the phase banner to link to", () => {
    render(<AboutPage />);
    const contactHeading = screen.getByRole("heading", {
      name: "Contact and support",
    });
    expect(contactHeading).toHaveAttribute("id", "contact");
  });

  it("states this is not an official Scottish Government service", () => {
    render(<AboutPage />);
    expect(
      screen.getByText(/not an official, published/i),
    ).toBeInTheDocument();
  });

  it("links to the Design System documentation", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("link", { name: "Design System documentation" }),
    ).toHaveAttribute("href", siteConfig.links.designSystemDocs);
  });
});
