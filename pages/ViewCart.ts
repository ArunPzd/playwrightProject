import { Locator, Page } from '@playwright/test';

export class ViewCart {
  readonly page: Page;
  readonly table: Locator;
  readonly buy: Locator;
  readonly reset: Locator;
  readonly continueCta: Locator;

  constructor(page: Page) {
    this.page = page;
    this.table = page.getByTestId('cart-table');
    this.buy = page.getByRole('button', { name: 'Buy Now' });
    this.reset = page.getByRole('button', { name: 'Reset Cart' });
    this.continueCta = page.getByRole('link', { name: /Continue Shopping/ });
  }

  //  Row anchor 
  getProduct(product: string): Locator {
    return this.table.getByRole('row', {
      name: new RegExp(product),
    });
  }

  getProductQuantity(product: string): Locator {
    return this.getProduct(product)
      .locator('span[data-testid^="qty-"]');
  }

  getProductPrice(product: string): Locator {
    return this.getProduct(product).locator('td').nth(3);
  }

  async increaseQuantity(product: string) {
    await this.getProduct(product)
      .getByRole('button', { name: '+' })
      .click();
  }

  async decreaseQuantity(product: string) {
    await this.getProduct(product)
      .getByRole('button', { name: '-' })
      .click();
  }

  async buyProduct() {
    await this.buy.click();
  }

  async resetCart() {
    await this.reset.click();
  }

  getContinueCta(): Locator {
    return this.continueCta;
  }
}
