import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';


// TC003 - Add product to cart
test('TC003 - Add product to cart', async ({ page }) => {
const login = new LoginPage(page);
const products = new ProductsPage(page);

await login.goto();
await login.login('standard_user', 'secret_sauce');

await products.addProductToCart('Sauce Labs Backpack');
});


// TC004 - Remove product from cart
test('TC004 - Remove product from cart', async ({ page }) => {
const login = new LoginPage(page);
const products = new ProductsPage(page);

await login.goto();
await login.login('standard_user', 'secret_sauce');

await products.addProductToCart('Sauce Labs Backpack');
await products.removeProductFromCart('Sauce Labs Backpack');
});