
import{test, expect} from '@playwright/test';
test('Google Page Title Test', async ({page}) => {
  await page.goto('https://www.google.com/');
  await page.pause()
  await expect(page).toHaveTitle('Google');
});