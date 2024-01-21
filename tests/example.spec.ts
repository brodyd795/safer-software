import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('file:///Users/brodydingel/Developer/personal/safer-software/testing/index.html');

  await expect(page).toHaveTitle(/Testing Example/);
});
