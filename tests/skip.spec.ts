import { test, expect } from '@playwright/test';

// Skip this test

test('Run only in Chromium', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'This test only runs in Chromium');//!== means not equal to
  //=== equal to

  await page.goto('https://example.com');
});