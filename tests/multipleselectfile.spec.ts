import { test, chromium, expect } from '@playwright/test';
import path from 'path';
test('multiple File Upload', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page.waitForTimeout(4000); // wait for 4 seconds

  // multiple files upload
  await page.locator('filesToUpload').setInputFiles([
    path.join("C:\\Users\\hp\\OneDrive\\Documents\\cricket ss.jpg"),
    path.join("C:\\Users\\hp\\OneDrive\\Documents\\Top 15 QA Scenario based question - QA manual.docx"),
    path.join("C:\\Users\\hp\\OneDrive\\Documents\\ts q and a.docx")
  ]);
    await page.waitForTimeout(4000); // wait for 4 seconds

  await page.locator('#filesToUpload').setInputFiles([]);

  await page.waitForTimeout(4000); // wait for 4 seconds
});