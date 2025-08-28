import { test, chromium, expect } from '@playwright/test';

test('navigation menu', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.automationtesting.co.uk/dropdown.html');

  // navigation menu
  await page.click('text=Sports');

  // Wait for submenu to appear
  await page.waitForSelector('text=Football', { timeout: 3000 });

  // Click on Football
  await page.click('text=Football');
});

test('checkbox', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.automationtesting.co.uk/dropdown.html');

  // Click the green checkbox
  const greenCheckbox = page.locator('#cb_green');
  await greenCheckbox.click();

  // Assertion: checkbox is checked
  await expect(greenCheckbox).toBeChecked();

  // Optional: Wait and observe (for debug/demo)
  await page.waitForTimeout(3000);

  await browser.close();
});
