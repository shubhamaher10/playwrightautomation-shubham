import { test, expect, chromium } from '@playwright/test';

test('Login Test', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.pause();


  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');//selector by using attribute
  await page.locator('button[type="submit"]').click();
await page.screenshot({path:'logged test.png'});

  // ✅ Baseline image generate hoga first time
  //await expect(page).toHaveScreenshot('demologintest-chromium-win32.png');

  await browser.close();
});

// test Use Cases for toHaveScreenshot()

// UI regression testing

// Theme changes (light/dark mode check)

// CSS layout verification

// Button/icon color verification

// Pixel-perfect comparison

