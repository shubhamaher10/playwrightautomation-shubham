import { test, expect } from '@playwright/test';

test('Web Object', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.pause(); // For inspection during debugging

  // ✅ By using object property (CSS attribute selector)
  await page.locator('[name="username"]').fill('Admin');
  await page.locator('[name="password"]').fill('admin123');

  // ✅ By using CSS selector for login button
  await page.locator('button[type="submit"]').click();

  // ✅ Optional: By using XPath (uncomment if testing XPath specifically)
  // await page.locator('//button[@type="submit"]').click();

  // ✅ Optional: By using text (rarely used for buttons like login)
  // await page.locator('text=Login').click();
});
  