import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../testdata/users.json';

test('valid login', async ({ page }) => {
    
  const loginpage = new LoginPage(page);

  await loginpage.navigateToHomePage();
  await expect(page).toHaveTitle(/QATestAcademy Automation/);

  await loginpage.navigateToLoginPage();

  await loginpage.login(users.validuser.email, users.validuser.password);
  await expect(page).toHaveURL(/products/);

});

test('invalid login', async ({ page }) => {
    
  const loginpage = new LoginPage(page);

  await loginpage.navigateToHomePage();
  await expect(page).toHaveTitle(/QATestAcademy Automation/);

  await loginpage.navigateToLoginPage();

  await loginpage.login(users.invaliduser.email, users.invaliduser.password);
  await expect(page.getByText(/Invalid email or password/)).toBeVisible();

});