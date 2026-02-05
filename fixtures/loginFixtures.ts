import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
    loggedinpage : Page;
};

export const test = base.extend<MyFixtures>({
    loggedinpage: async({page},use)=>{
        
        await page.goto(process.env.BASE_URL!);
        const loginpage = new LoginPage(page);
        loginpage.navigateToLoginPage();
        await loginpage.login(process.env.USERNAME!, process.env.PASSWORD!);


        await use(page);
    },
});

export { expect } from '@playwright/test';