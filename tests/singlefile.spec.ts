import{test, expect, chromium} from'@playwright/test';
import path from 'path';
test('single file upload',async()=>{
    const browser= await chromium.launch({headless:false});
    const page= await browser.newPage();
    await await page.goto('https://practice.expandtesting.com/upload')
    await page.locator('').setInputFiles([
        path.join(),
        path.join(),
        path.join()

    ])
    await page.waitForTimeout(5000);
});
