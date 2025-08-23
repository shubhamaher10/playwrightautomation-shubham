import { test, expect } from '@playwright/test';

test('handle radio button', async ({ page }) => {
  // Navigate to the radio button demo page
  await page.goto('https://practice.expandtesting.com/radio-buttons');

  // Select the radio button (Male option - value='option2')
  await page.locator('#red').check(); // Male

  // Assertions to verify the selection
  await expect(page.locator('#red')).toBeChecked(); // Male is selected
    await page.locator('#football').check(); // Male

  await expect(page.locator('#football')).toBeChecked(); // Male is selected

  // Check that the Female radio button is not selected

  // Optional pause to observe (useful during demo)
  await page.waitForTimeout(5000);
});