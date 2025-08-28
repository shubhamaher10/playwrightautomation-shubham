//await page.fill('input[name="username"]', ''); // Clear first
//await page.type('input[name="username"]', 'shubham');
import { test, expect } from '@playwright/test';

test('Login Test using type()', async ({ page }) => {

  // Step 1: Go to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Type username letter by letter
  const usernameInput = page.locator('input[name="username"]');
  await usernameInput.click();
  await usernameInput.type('Admin', { delay: 3000 });  // Typing delay = 300ms

  // Step 3: Type password letter by letter
  const passwordInput = page.locator('input[name="password"]');
  await passwordInput.click();
  await passwordInput.type('admin123', { delay: 3000 });

  // Step 4: Click on login button
  const loginBtn = page.locator('button[type="submit"]');
  await loginBtn.click();

  // Step 5: Wait for dashboard to load
  await page.waitForTimeout(2000);

  // Step 6: Assertion - Verify title
  await expect(page).toHaveTitle('OrangeHRM');
});
