import { test, expect } from '@playwright/test';

test('OrangeHRM - Login Elements Visibility Check', async ({ page }) => {
   await page.goto('https://kitchen.applitools.com/');
await expect(page).toHaveTitle('The Kitchen');
await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
await expect(page.locator('text=The Kitchen')).toBeVisible();
await expect(page.locator('text=The Kitchen')).toBeHidden();
await expect(page.locator('text=The Kitchen')).toBeEnabled();
await expect(page.locator('text=The Kitchen')).toBeDisabled();
await expect(page).toHaveURL('ttps://kitchen.applitools.com/');
await expect(page).toHaveScreenshot()
});
