import { test, expect, chromium } from '@playwright/test';

test('Two different users login using browser context', async () => {
  const browser = await chromium.launch({ headless: false });

  // Context 1 - User 1
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  // Context 2 - User 2
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  // ----- USER 1 Login -----
  await page1.goto('https://www.saucedemo.com/');
  await page1.fill('#user-name', 'standard_user');
  await page1.fill('#password', 'secret_sauce');
  await page1.click('#login-button');
  await expect(page1).toHaveURL('https://www.saucedemo.com/inventory.html');

  // ----- USER 2 Login -----
  await page2.goto('https://www.saucedemo.com/');
  await page2.fill('#user-name', 'problem_user');
  await page2.fill('#password', 'secret_sauce');
  await page2.click('#login-button'); // ✅ fixed to page2

  // Optional: Wait for navigation or check for specific element
  await expect(page2).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Screenshots
  //await page1.screenshot({ path: 'login-page1.png' });
  //await page2.screenshot({ path: 'login-page2.png' });

  await browser.close();
});
