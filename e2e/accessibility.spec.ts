import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Automated accessibility scans catch a useful subset of WCAG issues, but
 * they do not replace manual testing (keyboard-only use, screen readers,
 * and testing with people who have access needs). See README.md
 * "Accessibility approach".
 */
const routes = ["/", "/technical-information", "/about"];

for (const route of routes) {
  test(`${route} has no detectable automated accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
      .analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual(
      [],
    );
  });
}
