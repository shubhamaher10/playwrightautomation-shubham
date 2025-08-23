import{test, expect, chromium} from '@playwright/test';
test('Login Test', async()=>{
const Browser = await chromium.launch({headless:false});
const page = await Browser.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator('input[name="username"]').click();
await page.locator('input[name="username"]').fill('Admin');
await page.locator('input[name="password"]').click();
await page.locator('input[name="password"]').fill('admin123');
await page.locator('button[type="submit"]').click()
await page.waitForTimeout(5000);

});
