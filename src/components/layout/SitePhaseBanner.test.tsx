import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SitePhaseBanner from "./SitePhaseBanner";
import { siteConfig } from "@/config/site";

describe("SitePhaseBanner", () => {
  it("renders the Beta tag", () => {
    render(<SitePhaseBanner />);
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("renders feedback text with a link to a valid destination", () => {
    render(<SitePhaseBanner />);

    const link = screen.getByRole("link", { name: siteConfig.phase.feedbackText });
    expect(link).toHaveAttribute("href", siteConfig.phase.feedbackUrl);
    expect(screen.getByText(/This is a starter template/)).toBeInTheDocument();
  });
});
