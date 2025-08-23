import { test, expect } from '@playwright/test';

test('Handle alerts, confirms and prompts', async ({ page }) => {
  // 🔹 Step 1: Open test website
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // 🔹 Step 2: Handle Alert
  page.once('dialog', async (dialog) => {
    console.log('Alert Text:', dialog.message());
    await dialog.accept(); // Accept alert
  });
  await page.click('text=Click for JS Alert');
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

  // 🔹 Step 3: Handle Confirm (Accept)
  page.once('dialog', async (dialog) => {
    console.log('Confirm Text:', dialog.message());
    await dialog.accept(); // Accept confirm
  });
  await page.click('text=Click for JS Confirm');
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');

  // 🔹 Step 4: Handle Prompt with input
  page.once('dialog', async (dialog) => {
    console.log('Prompt Text:', dialog.message());
    await dialog.accept('shubham'); // Provide input to prompt and accept
  });
  await page.click('text=Click for JS Prompt');
  await expect(page.locator('#result')).toHaveText('You entered: shubham');
});
