import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";

test.use({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });

test("the hero presents the role without repeating the name or overlapping navigation", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator('section[aria-labelledby="hero-title"]');
  const heading = hero.getByRole("heading", { level: 1, name: "Senior Human Factors Design Engineer at Intuitive Surgical" });
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await expect(hero.getByText("Brandon Allan Fluegel")).toHaveCount(0);
  for (const width of [320, 390, 430, 1024]) {
    await page.setViewportSize({ width, height: 844 });
    const headingBox = await heading.boundingBox();
    const navBox = await nav.boundingBox();
    expect(headingBox!.y).toBeGreaterThanOrEqual(navBox!.y + navBox!.height);
    expect(headingBox!.x).toBeGreaterThanOrEqual(0);
    expect(headingBox!.x + headingBox!.width).toBeLessThanOrEqual(width);
    await expect(hero.getByRole("link", { name: "Scroll to case studies" })).toBeVisible();
  }
});

test("the hero stays below a taller mobile navigation and the navigation remains pinned", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  const heading = page.getByRole("heading", { level: 1 });
  await nav.evaluate((element) => { element.style.paddingTop = "59px"; });
  await expect(nav).toHaveCSS("padding-top", "59px");
  const navBox = await nav.boundingBox();
  const headingBox = await heading.boundingBox();
  expect(headingBox!.y - (navBox!.y + navBox!.height)).toBeGreaterThanOrEqual(24);
  await page.evaluate(() => window.scrollTo(0, 500));
  await expect.poll(async () => (await nav.boundingBox())!.y).toBe(0);
});

test("the first case study visual appears before its details on mobile", async ({ page }) => {
  await page.goto("/");
  for (const width of [320, 390, 430]) {
    await page.setViewportSize({ width, height: 844 });
    const video = await page.locator("#amazon-section video").first().boundingBox();
    const details = await page.getByRole("heading", { name: "Mapping Cognitive Load to Echo Device Design" }).boundingBox();
    expect(video!.y + video!.height).toBeLessThan(details!.y);
  }
});

test("the mobile menu contains focus, fits landscape, and preserves link navigation", async ({ page }) => {
  await page.goto("/");
  await page.setViewportSize({ width: 568, height: 320 });
  const trigger = page.getByRole("button", { name: "Open Menu" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Main menu" });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Close Menu" })).toBeFocused();

  for (let i = 0; i < 6; i++) {
    await page.keyboard.press("Tab");
    expect(await page.evaluate(() => !!document.activeElement?.closest("dialog"))).toBe(true);
  }
  await page.getByRole("button", { name: "Close Menu" }).focus();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link").last()).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Close Menu" })).toBeFocused();

  for (const link of await dialog.getByRole("link").all()) {
    const box = await link.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.y + box!.height).toBeLessThanOrEqual(320);
  }

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await dialog.getByRole("link", { name: "NASA" }).click();
  await expect(page).toHaveURL(/#nasa-section$/);
  await expect(dialog).not.toBeVisible();
  await expect.poll(() => page.evaluate(() => {
    const target = document.getElementById("nasa-section");
    const nav = document.querySelector("nav");
    return Math.abs((target?.getBoundingClientRect().top ?? 0) - (nav?.getBoundingClientRect().bottom ?? 0));
  })).toBeLessThan(3);
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
});

test("the latency chart stays inside its frame at narrow widths", async ({ page }) => {
  await page.goto("/");
  for (const width of [320, 375, 390, 430]) {
    await page.setViewportSize({ width, height: 800 });
    const chart = page.locator(".media-frame").filter({ hasText: "Alexa Latency vs. User Satisfaction" });
    await chart.scrollIntoViewIfNeeded();
    const frame = await chart.boundingBox();
    expect(frame).not.toBeNull();
    for (const label of ["0ms", "1000ms", "2000ms", "3000ms"]) {
      const box = await chart.getByText(label, { exact: true }).boundingBox();
      expect(box).not.toBeNull();
      expect(box!.x).toBeGreaterThanOrEqual(frame!.x);
      expect(box!.x + box!.width).toBeLessThanOrEqual(frame!.x + frame!.width);
      expect(box!.y + box!.height).toBeLessThanOrEqual(frame!.y + frame!.height);
    }
  }
});

test("the framework sidebar sticks while its section has room", async ({ page }) => {
  await page.setViewportSize({ width: 1100, height: 800 });
  await page.goto("/");
  const top = await page.evaluate(() => {
    const sidebar = document.querySelector<HTMLElement>('[data-analytics-section="agent-trust"] aside')!;
    window.scrollTo({ top: sidebar.getBoundingClientRect().top + window.scrollY - 120, behavior: "instant" });
    window.scrollBy({ top: 200, behavior: "instant" });
    return sidebar.getBoundingClientRect().top;
  });
  expect(top).toBeGreaterThanOrEqual(95);
  expect(top).toBeLessThanOrEqual(97);
});

test("videos have no playback buttons and honor reduced motion", async ({ page }) => {
  await page.goto("/");
  const videos = page.locator("video");
  await expect(videos).not.toHaveCount(0);
  for (const video of await videos.all()) {
    await expect(video.locator("..").getByRole("button")).toHaveCount(0);
    await expect(video).not.toHaveAttribute("controls");
  }
  const video = videos.first();
  await video.scrollIntoViewIfNeeded();
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
});

test("videos respond to visibility and motion preference changes", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const video = page.locator("video").first();
  await video.scrollIntoViewIfNeeded();
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => !element.paused)).toBe(true);
  await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
  await video.scrollIntoViewIfNeeded();
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => !element.paused)).toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
});

test("video playback failures are reported", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.addInitScript(() => {
    HTMLMediaElement.prototype.play = () => Promise.reject(new DOMException("Playback failed", "NotSupportedError"));
  });
  await page.goto("/");
  await page.locator("video").first().scrollIntoViewIfNeeded();
  await expect(page.getByRole("status").filter({ hasText: /Playback unavailable|Video unavailable/ }).first()).toBeVisible();
});

test("the framework exports the checked audit", async ({ page }) => {
  await page.goto("/#agent-trust");
  await page.getByRole("checkbox", { name: "Are the agent's tools and access rights visible to the user upfront?" }).click();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download Audit Report" }).click();
  const download = await downloadPromise;
  const report = await readFile(await download.path(), "utf8");
  expect(report).toContain("[x] Are the agent's tools and access rights visible to the user upfront?");
  expect(report).toContain("Final Score: 1 / 20 Checks Passed");
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("case studies and all framework principles remain visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Mapping Cognitive Load to Echo Device Design" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Reducing Astronaut Cognitive Load" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Trust in Semi-Autonomous Driving" })).toBeVisible();
    await expect(page.locator("noscript article")).toHaveCount(6);
    await expect(page.locator("noscript article").first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Open Menu" })).toBeHidden();
    await expect(page.locator(".video-playback-control")).toHaveCount(0);
  });

  test("mobile section links do not leave their targets behind the navigation", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    const heading = page.getByRole("heading", { name: "Senior Human Factors Design Engineer at Intuitive Surgical" });
    expect((await heading.boundingBox())!.y).toBeGreaterThanOrEqual((await nav.boundingBox())!.height);
    await nav.getByRole("link", { name: "NASA" }).click();
    await expect(page).toHaveURL(/#nasa-section$/);
    await expect.poll(() => page.evaluate(() => {
      const target = document.getElementById("nasa-section")!;
      const nav = document.querySelector("nav")!;
      return target.getBoundingClientRect().top - nav.getBoundingClientRect().bottom;
    })).toBeGreaterThanOrEqual(0);
  });
});
