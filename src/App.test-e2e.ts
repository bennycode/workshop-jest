import {test, expect} from '@playwright/test';

test('it starts counting at 1', async ({baseURL, page}) => {
  await page.goto(`${baseURL}`);
  const counter = page.locator('data-testid=counter');
  expect(counter).toHaveText('1');
});
