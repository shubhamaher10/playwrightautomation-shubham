import { test, expect, chromium} from '@playwright/test';

test('Handle iFrame ', async () => {
  const browser = await chromium.launch({ headless: false });
  const page= await browser.newPage();
  // Step 1: Go to the main page
await page.goto('https://ui.vision/demo/webtest/frames/');
const inputBox=await page.frameLocator('frame[src="frame_1.html"]').locator('input[name="mytext1"]');
inputBox.fill('Hello');
await page.waitForTimeout(5000);
  
});

test('Handle iFrame', async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();
    await page.waitForTimeout(5000);


  // Step 1: Go to the main page
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Step 2: Access the correct iframe (index 0 iframe on page)
  const frame = page.frameLocator('iframe[src="frame_1.html"]');

  // Step 3: Locate the input box inside that iframe and fill text
  const inputBox = frame.locator('input[type="text"]');
  await inputBox.fill('Hello');

  // Wait to see the result
  await page.waitForTimeout(5000);

  await browser.close();
});
