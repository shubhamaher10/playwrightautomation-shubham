import { test, expect, chromium } from '@playwright/test';

test('Focus Element Test with getByText', async ({ page }) => {
  await page.goto("https://www.orangehrm.com/30-day-free-trial/");

  // Accept cookies
  const acceptBtn = page.getByRole('button', { name: /accept cookies/i });
  await acceptBtn.waitFor({ state: "visible" });
  await acceptBtn.click();

  // Focus and fill the Full Name field
  const fullName = page.getByLabel("Full Name");
  await fullName.focus();
  await fullName.fill("testing automation");

  await page.waitForTimeout(3000);
});