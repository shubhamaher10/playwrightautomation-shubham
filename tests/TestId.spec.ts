import { test, expect, chromium  } from '@playwright/test';

test('locator test', async () => {
  const Browser = await chromium.launch({ headless: false, });
  const page = await Browser.newPage();

  await page.goto("http://127.0.0.1:5500/app/app.html");

  await page.getByTestId('username').fill('naveenautomation');
  await page.getByTestId('password').fill('naveen123');
  await page.getByTestId('login').click();

  // Optional: Wait to see result
  await new Promise(() => {});
});
