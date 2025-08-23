import { test, expect, chromium } from '@playwright/test';

test('Single File Upload', async () => {
  const browser = await chromium.launch({ headless: false });///true for run browser in background
  const page = await browser.newPage();

  // Open the file upload page
  await page.goto('https://practice.expandtesting.com/upload');

  // Upload a single file
  await page.locator('input[name="file"]').setInputFiles("C:/Users/hp/OneDrive/Documents/postman and jmeter interview explaination.docx");

  await page.waitForTimeout(3000); // Optional wait to see the upload

  // Deselect / clear the file input
  await page.locator('input[name="file"]').setInputFiles([]);

  await browser.close();
});