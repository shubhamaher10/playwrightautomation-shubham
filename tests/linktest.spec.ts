import { test, expect, chromium } from '@playwright/test';

test('Test ', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://app.bugbug.io/sign-in/');

  // 🔗 Clicking the link
  await page.locator('input[name="password"]').click();
 await page.locator('input[name="password"]').fill('Shubham');
  // 🕒 Wait for new tab or redirect

  // ✅ Assertion
});