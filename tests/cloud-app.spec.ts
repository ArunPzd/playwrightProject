
import { test, expect } from '@playwright/test';

test('Cloud QA Lab loads successfully on AWS', async ({ page }) => {
  const cloudBaseUrl = process.env.CLOUD_BASE_URL;

  if (!cloudBaseUrl) {
    throw new Error('CLOUD_BASE_URL environment variable is not set');
  }

  await page.goto(cloudBaseUrl);

  await expect(
    page.getByRole('heading', { name: 'Welcome to Cloud QA Lab' })
  ).toBeVisible();

  await expect(
    page.getByText('This application is running on AWS EC2.')
  ).toBeVisible();

  await expect(
    page.getByText('Environment: Cloud')
  ).toBeVisible();
});
