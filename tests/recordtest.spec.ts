import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});
test('OpenCart Register Test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('heading', { name: 'Register Account' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('group', { name: 'Your Personal Details' }).click();
  await page.getByRole('textbox', { name: '* Password', exact: true }).click();
  await page.getByRole('textbox', { name: '* Password Confirm' }).click();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
});