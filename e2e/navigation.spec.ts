import { expect, test, type Page } from "@playwright/test";

/**
 * SiteHeader renders two copies of the primary navigation: a desktop one
 * (always in the DOM, shown via CSS from the medium breakpoint up) and a
 * mobile one, only shown once the hamburger menu is opened. Below the
 * medium breakpoint neither is visible until then.
 *
 * The design system's own site-navigation script progressively enhances
 * the initial (CSS-only) checkbox-and-label toggle: on mount it injects a
 * real <button> with the same accessible name ("Menu") and hides the
 * original label, so once React has hydrated, that button is the actual
 * control to interact with.
 */
async function openMobileMenuIfPresent(page: Page) {
  const toggle = page.getByRole("button", { name: "Menu" });
  await toggle.waitFor({ state: "attached", timeout: 5_000 }).catch(() => {});
  if (await toggle.isVisible()) {
    await toggle.click();
  }
}

test.describe("Site navigation", () => {
  test("home page renders the site header, navigation and footer", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Scottish Government website template" }),
    ).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("marks the current page in the primary navigation", async ({ page }) => {
    await page.goto("/about");
    await openMobileMenuIfPresent(page);

    const nav = page.getByRole("navigation", { name: "Primary navigation" });
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    await expect(nav.getByRole("link", { name: "Home" })).not.toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  test("navigates between pages using the primary navigation", async ({
    page,
  }) => {
    await page.goto("/");
    await openMobileMenuIfPresent(page);

    await page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link", { name: "About" })
      .click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "About this template" }),
    ).toBeVisible();
  });

  test("navigates to the Technical information page from the primary navigation", async ({
    page,
  }) => {
    await page.goto("/");
    await openMobileMenuIfPresent(page);

    await page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link", { name: "Technical information" })
      .click();
    await expect(page).toHaveURL(/\/technical-information$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Technical information" }),
    ).toBeVisible();
  });

  test("the skip link moves focus to the main content landmark", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("shows a 404 page for an unknown route with a link home", async ({
    page,
  }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeVisible();
    await page.getByRole("link", { name: "Return to the home page" }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  for (const route of ["/accessibility", "/privacy", "/cookies"]) {
    test(`${route} no longer exists as a local route`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(404);
      await expect(
        page.getByRole("heading", { level: 1, name: "Page not found" }),
      ).toBeVisible();
    });
  }

  test("footer policy links point at the exact gov.scot destinations, not local routes", async ({
    page,
  }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo");

    const expected: Record<string, string> = {
      "Accessibility statement": "https://www.gov.scot/accessibility/",
      "Privacy notice": "https://www.gov.scot/privacy/",
      Cookies: "https://www.gov.scot/cookies/",
    };

    for (const [name, href] of Object.entries(expected)) {
      const link = footer.getByRole("link", { name });
      await expect(link).toHaveAttribute("href", href);
      await expect(link).not.toHaveAttribute("target");
    }
  });

  test("footer Open Government Licence link has the expected text and opens in a new tab", async ({
    page,
  }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo");

    const link = footer.getByRole("link", {
      name: "Open Government Licence v3.0",
    });
    await expect(link).toHaveAttribute(
      "href",
      "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
    );
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(await link.textContent()).not.toMatch(/opens in new tab/i);
  });

  test("shows a Beta phase banner with a feedback link to the GitHub Issues page", async ({
    page,
  }) => {
    await page.goto("/");

    const banner = page.locator(".ds_phase-banner");
    await expect(banner).toBeVisible();
    await expect(banner.getByText("Beta")).toBeVisible();

    const feedbackLink = banner.getByRole("link", { name: "feedback" });
    await expect(feedbackLink).toHaveAttribute(
      "href",
      "https://github.com/FraserWillox/scottish-government-website-template/issues",
    );
    await expect(feedbackLink).toHaveAttribute("target", "_blank");
    await expect(feedbackLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
