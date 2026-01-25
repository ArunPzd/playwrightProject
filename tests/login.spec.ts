import { test, expect } from '@playwright/test';

test('valid login', async ({ page }) => {
    
  //Navigate to the page
  await page.goto('https://automationexercise.com/');

  //Verify title of the page
  await expect(page).toHaveTitle('Automation Exercise');

  //Click on the Login link
  await page.getByRole('link', {name : ' Signup / Login'}).click();

  //Enter username and password and click Login
  await page.locator('[data-qa= "login-email"]').fill('testadmin@test.com');
  await page.getByPlaceholder('Password').fill('Test@1234');
  await page.locator('[data-qa= "login-button"]').click();

  //Verify the logged in text is displayed to confirm login
  await expect(page.getByText(/Logged in as/i)).toBeVisible();
});