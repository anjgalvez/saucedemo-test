import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';


// TC005 - Cart opens and displays product
test('TC005 - Cart opens and displays product', async ({ page }) => {
const login = new LoginPage(page);
const products = new ProductsPage(page);
const cart = new CartPage(page);

await login.goto();
await login.login('standard_user', 'secret_sauce');

await products.addProductToCart('Sauce Labs Backpack');
await products.openCart();
await cart.assertProductInCart('Sauce Labs Backpack');
});