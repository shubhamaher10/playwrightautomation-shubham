import { test, expect, Browser, Page, chromium } from '@playwright/test';

test('mouse hover', async () => {
  const browser: Browser = await chromium.launch({headless: false });

  const page: Page = await browser.newPage();

  await page.goto("https://www.spicejet.com/");

  // Hover on 'Add-ons' menu item
  await page.getByText('Add-ons').first().hover();

  // Click on the submenu item 'Taxi'
  await page.getByText('Visa Services').first().click();

  // Wait for observation (optional)
  await page.waitForTimeout(5000);
});

test('Mouse Click Event', async ({ page }) => {

  // 🔁 Double Click
  await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
  await page.getByText('Double-Click Me To See Alert').dblclick();
  await page.waitForTimeout(5000);

  // 🖱️ Right Click (Context Click)
  await page.getByText('right click me').click({ button: 'right' });
  await page.waitForTimeout(3000);
 // https://demo.guru99.com/test/simple_context_menu.html

  // ⌨️ Shift + Click
  await page.goto('https://the-internet.herokuapp.com/shifting_content');
  await page.getByText('Example 1: Menu Element').click({ modifiers: ['Shift'] });
  await page.waitForTimeout(3000);

});