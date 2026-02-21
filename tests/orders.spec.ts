import {test , expect} from '../fixtures/loginFixtures';
import { Products } from '../pages/Products';
import { ViewCart } from '../pages/ViewCart';
import { expectAlert } from '../utils/alertutils';

test('verify ordering product', async({loggedinpage}) => {
    
    const product = new Products(loggedinpage);
    const cart = new ViewCart(loggedinpage);
    const alerts: string[] = [];
    expectAlert(loggedinpage, alerts);

    await expect(loggedinpage).toHaveURL(/products/);
    
    await product.addToCart('Playwright Book');
    await product.addToCart('API Testing Guide');
    await expect.poll(() => alerts.some(msg => msg.includes('Product added to cart'))).toBeTruthy();

    await product.openCart();

    await expect(cart.getProduct('Playwright Book')).toBeVisible();
    await expect(cart.getProduct('API Testing Guide')).toBeVisible();

    await expect(cart.getProductQuantity('Playwright Book')).toHaveText(/1/);
    await expect(cart.getProductQuantity('API Testing Guide')).toHaveText(/1/);

    await expect(cart.getProductPrice('Playwright Book')).toHaveText(/499/);
    await expect(cart.getProductPrice('API Testing Guide')).toHaveText(/299/);

    await cart.increaseQuantity('Playwright Book');
    await expect(cart.getProductQuantity('Playwright Book')).toHaveText(/2/);

    await cart.buyProduct();
    await expect.poll(() => alerts.some(msg => msg.includes('Items have been placed for delivery'))).toBeTruthy();

});
