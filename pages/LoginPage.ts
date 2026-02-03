import { Locator, Page } from '@playwright/test';

export class LoginPage{
    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;
    readonly linkToLogin : Locator;

    constructor (page : Page){
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByTestId('login-button');
        this.linkToLogin = page.getByRole('link', {name : 'Login'});
    }

    async navigateToHomePage() {
        await this.page.goto('https://demo.qatestacademy.com/');

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