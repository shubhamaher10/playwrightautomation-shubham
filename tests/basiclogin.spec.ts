import { test, expect, } from '@playwright/test';

test('Login Test', async ({page}) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const usernameInput = 
   page.locator('input[name="username"]');
  await usernameInput.click();
  await usernameInput.fill('Admin');

  const passwordInput = page.locator('input[name="password"]');
  await passwordInput.click();
  await passwordInput.fill('admin123');

  const loginBtn = page.locator('button[type="submit"]');
  await loginBtn.click();

  await page.waitForTimeout(3000); // wait for dashboard to loa

  await expect(page).toHaveTitle('OrangeHRM');

  await page.screenshot({ path: 'login-page.png' });

});