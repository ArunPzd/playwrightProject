import { Locator, Page } from '@playwright/test';

export class Products{
    readonly page : Page ;
    readonly cartLink : Locator;

    constructor(page : Page){
        this.page = page ;
        this.cartLink = page.getByTestId('menu-cart');

    }

    async addToCart(productName : string){
        const product = this.page.locator('.product', {
        has: this.page.getByRole('heading', { name: productName })
    });

        await product.getByRole('button', { name: 'Add to Cart' }).click();
    }

    async openCart(){
        await this.cartLink.click();
    }
}