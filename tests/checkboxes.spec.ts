import { test, expect } from '@playwright/test';

test('Handle checkboxes in TypeScript', async ({ page }) => {
  // Wait for 5 seconds (for demo purpose only)
  await page.waitForTimeout(5000);

  // Navigate to the page
  await page.goto('https://www.ironspider.ca/forms/checkradio.htm');
  await page.waitForTimeout(5000);

  // ✅ Step 1: Select Multiple Checkboxes (Red & Yellow)
 // const checkboxes =( ['input[value="red"]', 'input[value="yellow"]']);

  //for (const selector of checkboxes) {
   // const checkbox = page.locator(selector);
   // await checkbox.check(); // Select checkbox
   // await expect(checkbox).toBeChecked(); // Assert it's checked
 // }
  // ✅ Step 1: Single Checkbox - Check 'Monday'
  const checkbox1 = await page.locator('input[value="red"]');
  await checkbox1.check();

  await expect(checkbox1).toBeChecked(); 
   const checkbox2 = await page.locator('input[value="yellow"]');
  await checkbox2.check();

  await expect(checkbox2).toBeChecked();     
  


  // Optional pause to see result
  await page.waitForTimeout(5000);
});
