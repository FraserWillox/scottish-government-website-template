import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PrimaryFooter from "./PrimaryFooter";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";

describe("PrimaryFooter", () => {
  it("links each policy item to the exact gov.scot destination", () => {
    render(<PrimaryFooter />);

    expect(footerNavigation).toEqual([
      { label: "Accessibility statement", href: "https://www.gov.scot/accessibility/" },
      { label: "Privacy notice", href: "https://www.gov.scot/privacy/" },
      { label: "Cookies", href: "https://www.gov.scot/cookies/" },
    ]);

    for (const item of footerNavigation) {
      const link = screen.getByRole("link", { name: item.label });
      expect(link).toHaveAttribute("href", item.href);
    }
  });

  it("renders the policy links as ordinary external anchors, not local routes", () => {
    render(<PrimaryFooter />);

    for (const item of footerNavigation) {
      const link = screen.getByRole("link", { name: item.label });
      expect(link.getAttribute("href")).toMatch(/^https:\/\/www\.gov\.scot\//);
      expect(link.getAttribute("href")).not.toMatch(/^\//);
    }
  });

  it("does not open the policy links in a new tab", () => {
    render(<PrimaryFooter />);

    for (const item of footerNavigation) {
      const link = screen.getByRole("link", { name: item.label });
      expect(link).not.toHaveAttribute("target");
    }
  });

  it("renders the Open Government Licence logo linked to the licence text", () => {
    render(<PrimaryFooter />);

    const oglLogo = screen.getByRole("img", {
      name: "Open Government Licence",
    });
    expect(oglLogo).toHaveAttribute("src", "/branding/ogl.svg");
    expect(oglLogo.closest("a")).toHaveAttribute("href", siteConfig.links.ogLicence);
  });

  it("links the licence wording to the Open Government Licence", () => {
    render(<PrimaryFooter />);

    const licenceLinks = screen.getAllByRole("link", {
      name: /Open Government Licence/i,
    });
    for (const link of licenceLinks) {
      expect(link).toHaveAttribute("href", siteConfig.links.ogLicence);
    }
  });

  it("uses exactly 'Open Government Licence v3.0' as the licence link text, opening in a new tab", () => {
    render(<PrimaryFooter />);

    const link = screen.getByRole("link", {
      name: "Open Government Licence v3.0",
    });
    expect(link).toHaveAttribute("href", siteConfig.links.ogLicence);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link.textContent).not.toMatch(/opens in new tab/i);
  });

  it("renders the gov.scot logo linked to gov.scot", () => {
    render(<PrimaryFooter />);

    const orgLogo = screen.getByRole("img", { name: "gov.scot" });
    expect(orgLogo).toHaveAttribute(
      "src",
      "/branding/scottish-government--min.svg",
    );
    expect(orgLogo.closest("a")).toHaveAttribute(
      "href",
      siteConfig.links.organisation,
    );
  });

  it("retains the required licence and copyright wording", () => {
    render(<PrimaryFooter />);

    expect(
      screen.getByText(/All content is available under the/i),
    ).toBeInTheDocument();
    expect(screen.getByText("© Crown copyright")).toBeInTheDocument();
  });
});
