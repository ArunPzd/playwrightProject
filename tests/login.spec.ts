import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('valid login', async ({ page }) => {
    
  const loginpage = new LoginPage(page);

  await loginpage.navigateToHomePage();
  await expect(page).toHaveTitle('Automation Exercise');

  await loginpage.navigateToLoginPage();

  await loginpage.login('testadmin@test.com', 'Test@1234')
  await expect(page.getByText(/Logged in as/i)).toBeVisible();


});