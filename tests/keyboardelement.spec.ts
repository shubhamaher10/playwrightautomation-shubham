import { test, expect } from '@playwright/test';

test('Keyboard actions', async ({ page }) => {
  await page.goto('https://gotranscript.com/text-compare');

  // Type initial text into the first input box
  await page.type('[name="text1"]', 'welcome to automation');

  // Ctrl/Meta + A → Select all text
  await page.keyboard.press('Meta+A'); // Use 'Control+A' on Windows if needed

  // Ctrl/Meta + C → Copy the text
  await page.keyboard.press('Meta+C');

  // Tab → Move focus to next input field
  await page.keyboard.down('Tab');
  await page.keyboard.up('Tab');

  // Ctrl/Meta + V → Paste the copied text
  await page.keyboard.press('Meta+V');

  // Optional wait
  await page.waitForTimeout(5000);
});
