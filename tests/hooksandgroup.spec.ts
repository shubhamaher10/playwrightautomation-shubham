import { test, expect } from '@playwright/test';

test.describe('All My Tests', () => {

  // Runs before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[name="user-name"]').fill('standard_user');
    await page.locator('[name="password"]').fill('secret_sauce');
    await page.locator('[name="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
  });

  // Test: Add items to cart
  test('homepage', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click(); // confirm if this selector exists
  });

  // Test: Logout from application
  test('logout', async ({ page }) => {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.waitForURL('https://www.saucedemo.com/');
  });

});