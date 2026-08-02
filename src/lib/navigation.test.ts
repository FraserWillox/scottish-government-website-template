import { describe, expect, it } from "vitest";
import { isNavigationItemActive } from "./navigation";

describe("isNavigationItemActive", () => {
  it("matches the home link only on an exact path", () => {
    expect(isNavigationItemActive("/", "/")).toBe(true);
    expect(isNavigationItemActive("/about", "/")).toBe(false);
  });

  it("matches other links on an exact path", () => {
    expect(isNavigationItemActive("/about", "/about")).toBe(true);
  });

  it("matches other links on a nested route", () => {
    expect(isNavigationItemActive("/about/anything", "/about")).toBe(true);
  });

  it("matches the technical information link on an exact path", () => {
    expect(
      isNavigationItemActive("/technical-information", "/technical-information"),
    ).toBe(true);
  });

  it("does not match an unrelated path with the same prefix", () => {
    expect(isNavigationItemActive("/about-extra", "/about")).toBe(false);
  });

  it("does not match a different section entirely", () => {
    expect(isNavigationItemActive("/accessibility", "/about")).toBe(false);
  });
});
