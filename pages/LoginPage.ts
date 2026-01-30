import { Locator, Page } from '@playwright/test';

export class LoginPage{
    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;
    readonly linkToLogin : Locator;

    constructor (page : Page){
        this.page = page;
        this.username = page.locator('[data-qa= "login-email"]');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.locator('[data-qa= "login-button"]');
        this.linkToLogin = page.getByRole('link', {name : ' Signup / Login'});
    }

    async navigateToHomePage() {
        await this.page.goto('https://automationexercise.com/');

    }

    async navigateToLoginPage(){
        await this.linkToLogin.click();
    }

    async login(usernameValue : string, passwordValue : string){
        await this.username.fill(usernameValue);
        await this.password.fill(passwordValue);
        await this.loginBtn.click();
    }

}