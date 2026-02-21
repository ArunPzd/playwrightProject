import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
    loggedinpage : Page;
};

export const test = base.extend<MyFixtures>({   
    loggedinpage: async({page},use)=>{
        
        await page.goto('/');
        const loginpage = new LoginPage(page);
        await loginpage.navigateToLoginPage();
        await loginpage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);


        await use(page);
    },
});

export { expect } from '@playwright/test';