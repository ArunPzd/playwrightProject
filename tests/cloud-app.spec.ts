import { test, expect } from '@playwright/test';

test('Cloud QA Lab loads successfully', async ({ page }) => {

    await page.goto('/');

    await expect(
        page.getByRole('heading', {
            name: 'Welcome to Cloud QA Lab'
        })
    ).toBeVisible();

});