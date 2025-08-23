import { test, expect } from '@playwright/test';

// Skip this test
test.skip('skip this test', async ({ page }) => {
  // This test will be skipped
});

// Mark as fail
test('not yet ready', async ({ page }) => {
  test.fail(); // will mark test as failure
  // will show error if the test does not fail
});

// FIXME - test to be fixed
test.fixme('test to be fixed', async ({ page }) => {
  // test will be aborted (not executed)
});

// Mark test as slow (triples timeout)
test('slow test', async ({ page }) => {
  test.slow(); // increases timeout (default: ×3)
  // your slow test logic here
});

// Only run this test (focus)
test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project
});