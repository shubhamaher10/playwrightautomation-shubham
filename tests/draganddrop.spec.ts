import { test, expect, chromium } from '@playwright/test';

 //Test 1: No iframe
test('Move to element - Drag and Drop ', async () => {
  const browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page = await browser.newPage();

  await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

  await page.locator("#draggable").dragTo(page.locator("#droppable"));

  await page.waitForTimeout(5000);
  await browser.close();
});

// ✅ Test 2: iframe present

test('Drag and Drop', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

  // Correct iframe index
  const frame = page.frameLocator('.demo-frame');

  // Locate image and trash inside iframe
  const image = frame.locator('img[alt="Planning the ascent"]');
  const trash = frame.locator('#trash');
  await page.waitForTimeout(5000);

  // Drag i
  await page.waitForTimeout(5000);
  await browser.close();
});



