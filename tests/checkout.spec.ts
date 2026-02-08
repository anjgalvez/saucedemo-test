import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


// TC006 - Complete checkout
test('TC006 - Complete checkout flow', async ({ page }) => {
const login = new LoginPage(page);
const products = new ProductsPage(page);
const cart = new CartPage(page);
const checkout = new CheckoutPage(page);


await login.goto();
await login.login('standard_user', 'secret_sauce');


await products.addProductToCart('Sauce Labs Bike Light');
await products.openCart();
await cart.assertProductInCart('Sauce Labs Bike Light');


await cart.checkout();
await checkout.fillCheckoutInfo('John', 'Doe', '12345');
await checkout.finishCheckout();
});


// TC007 - Checkout validation for empty info
test('TC007 - Checkout validation with empty info', async ({ page }) => {
const login = new LoginPage(page);
const products = new ProductsPage(page);
const cart = new CartPage(page);
const checkout = new CheckoutPage(page);


await login.goto();
await login.login('standard_user', 'secret_sauce');


await products.addProductToCart('Sauce Labs Bike Light');
await products.openCart();
await cart.checkout();


// Attempt to continue without filling info
await checkout.fillCheckoutInfo('', '', '');
await expect(page.locator('[data-test="error"]')).toBeVisible();
});