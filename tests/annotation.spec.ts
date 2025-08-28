//test annotations
//1) test.skip
//2) test.fail
//3) test.fixme
//4) test.slow
//5) test.only


import { test, expect } from '@playwright/test';

// Skip this test
test.skip('This test will be skipped', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
//conditional skip

test('Run only in firefox', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'This test only runs in firefox');
  
  await page.goto('https://example.com');
});
// 🔹 If the browser is not Chromium, the test will be skipped.
// 🔹 If the browser is Chromium, the test runs.


// Mark as fail//Playwright me tum test.fail() use kar sakte ho expected failure mark karne ke liye.
test.fail('Mark as fail ', async ({ page }) => {

  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Wrong Title'); // Intentionally wrong
});

// FIXME - test to be fixed//means the features under the developement abhi kaam nhi kr rha he 
test.fixme('Feature under development', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('New Feature Title');
});

// Mark test as slow (triples timeout)
test('Slow test example', async ({ page }) => {
  test.slow(); // Marking this test as slow  30sec into 3 = 90 sec

  await page.goto('https://example.com');
  await page.waitForTimeout(25000); // Simulating a slow API response
  await expect(page).toHaveTitle('Example Domain');
});

// Only run this test (focus)
test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project
});