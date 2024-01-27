import { test, expect } from '@playwright/test';

const baseUrl = 'file:///Users/brodydingel/Developer/personal/safer-software/testing';
const green = 'rgb(0, 128, 0)';

test('example test', async ({ page }) => {
  // Go to home page
  await page.goto(`${baseUrl}/index.html`);

  // Assert on page title
  await expect(page).toHaveTitle(/Testing Example/);

  // Clicking magic button turns text green
  await page.getByText('Click me to see a magic trick!').click();
  const color = await page.getByText('This is the main content').evaluate(el => getComputedStyle(el)['color'])
  expect(color).toBe(green)

  // Entering your name shows a greeting
  await page.getByRole('textbox').fill('Brody')
  await page.getByText('Submit').click();
  const greeting = await page.getByTestId('name-output').innerText();
  expect(greeting).toBe('Hello, Brody!')

  // Link to "About" page works
  await page.getByText('About').click();
  await page.waitForURL(`${baseUrl}/about.html`, {timeout: 1_000});
});

test('can scroll down the page', async ({page}) => {
  await page.goto(`${baseUrl}/lorem.html`);

  // Get the initial scroll position
  const initialScrollPosition = await page.evaluate(() => window.scrollY);

  // Scroll down the page
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Wait for a brief moment to ensure the scrolling has taken place
  await page.waitForTimeout(1000);

  // Get the updated scroll position after scrolling
  const updatedScrollPosition = await page.evaluate(() => window.scrollY);

  // Assert that the scroll position has changed, indicating successful scrolling
  expect(initialScrollPosition).toBe(updatedScrollPosition)
  expect(updatedScrollPosition).toBeGreaterThan(0)
})
