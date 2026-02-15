import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads and all sections are visible", async ({ page }) => {
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("hero")).toBeVisible();
    await expect(page.getByTestId("philosophy")).toBeVisible();
    await expect(page.getByTestId("products")).toBeVisible();
    await expect(page.getByTestId("advisory")).toBeVisible();
    await expect(page.getByTestId("about")).toBeVisible();
    await expect(page.getByTestId("cta")).toBeVisible();
    await expect(page.getByTestId("footer")).toBeVisible();
  });

  test("hero displays headline and CTAs", async ({ page }) => {
    const hero = page.getByTestId("hero");
    await expect(hero.getByRole("heading", { level: 1 })).toContainText(
      "We create products"
    );
    await expect(hero.getByText("See Papyrus")).toBeVisible();
    await expect(hero.getByText("Talk to Us")).toBeVisible();
  });

  test("nav links scroll to sections", async ({ page }) => {
    await page.click('a[href="#products"]');
    await expect(page.getByTestId("products")).toBeInViewport();
  });

  test("blog link opens externally", async ({ page }) => {
    const blogLink = page.locator('nav a[target="_blank"]').first();
    await expect(blogLink).toHaveAttribute("rel", /noopener/);
  });

  test("footer renders copyright and column headings", async ({ page }) => {
    const footer = page.getByTestId("footer");
    await expect(footer).toContainText("2026 SynaptixLabs");
    await expect(footer.getByText("Products")).toBeVisible();
    await expect(footer.getByText("Company")).toBeVisible();
    await expect(footer.getByText("Connect")).toBeVisible();
  });

  test("Get in Touch opens contact modal", async ({ page }) => {
    // Click the Get in Touch button in the nav
    await page.locator("nav button").filter({ hasText: "Get in Touch" }).click();

    // Contact modal should appear with form fields
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel(/Occupation/)).toBeVisible();
    await expect(page.getByLabel(/Company Size/)).toBeVisible();
    await expect(page.getByRole("button", { name: "Send Message" })).toBeVisible();
  });

  test("AI chat button is visible and opens popup", async ({ page }) => {
    // Chat trigger button should be visible
    const chatButton = page.getByLabel("Open AI chat");
    await expect(chatButton).toBeVisible();

    // Click to open
    await chatButton.click();

    // Chat popup should appear with header and quick actions
    await expect(page.getByText("SynaptixLabs AI")).toBeVisible();
    await expect(page.getByText("What does SynaptixLabs do?")).toBeVisible();
  });

  test("no console errors on page load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    await page.waitForTimeout(2000);
    expect(errors).toEqual([]);
  });
});
