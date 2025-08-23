import { test, chromium, expect } from '@playwright/test';
test('dropdown handling', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.magupdate.co.uk/reader-enquiry/pbai/245');
  const dropdownHandling= await page.locator('select#Contact_CountryCode');
  //bu using value
  //await dropdownHandling.selectOption({ value: 'AD' }); // AD = Andorra
 // await page.waitForTimeout(5000);
  //byu using label
 // await dropdownHandling.selectOption({label:'Australia'});
 // await page.waitForTimeout(5000);
//by using index
//await dropdownHandling.selectOption({index:4});
// await page.waitForTimeout(5000);
const options = await dropdownHandling.locator('option');
const count = await options.count();
console.log('options:', count);
await page.waitForTimeout(15000);

});
