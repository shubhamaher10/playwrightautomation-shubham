import { test, expect } from '@playwright/test';

test('Auto-wait example - SauceDemo login', async ({ page }) => {
  // Navigate to url
  await page.goto('https://www.saucedemo.com/');

  // Playwright will auto-wait for these fields to be visible before filling
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click button — Playwright waits for button to be enabled & ready
  await page.click('#login-button');

  // Assertion — waits for URL change
  await expect(page).toHaveURL('/inventory.html/');

  // Check products title — waits until element appears & has expected text
  await expect(page.locator('.title')).toHaveText('Products');
});
