import { test, expect } from '@playwright/test';

test('Promise.all example', async ({ page }) => {
  // Go to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter username & password
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  // ✅ Using Promise.all to handle click + navigation together
  await Promise.all([
    page.waitForNavigation(),  // Wait until next page loads
    page.click('button[type="submit"]') // Click on login button
  ]);
  //Problem Without Promise.all



⚠ Issue:
//Kabhi kabhi page itna fast load hota hai ki waitForNavigation() call hone se pehle hi navigation complete ho jata hai.
//Result → ❌ Timeout Error ya Flaky Tests.
await page.waitForTimeout(5000);
  // Verify Dashboard URL
  await expect(page).toHaveURL(/dashboard/);
});

//example promice .all([
//]);  alos use for parallel execution
//it is javascript method
import { test, chromium } from "@playwright/test";

test('Open multiple tabs using Promise.all', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // 3 tabs ek saath open karenge
  const [page1, page2, page3] = await Promise.all([
    context.newPage(),
    context.newPage(),
    context.newPage()
  ]);

  // 3 tabs me alag URLs open karenge
  await Promise.all([
    page1.goto('https://www.google.com'),
    page2.goto('https://www.github.com'),
    page3.goto('https://www.playwright.dev')
  ]);

  await browser.close();
});

