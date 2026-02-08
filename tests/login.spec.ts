import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


// TC001 - Valid Login
test('TC001 - Valid login', async ({ page }) => {
const login = new LoginPage(page);
await login.goto();
await login.login('standard_user', 'secret_sauce');
await login.assertLoginSuccess();
});


// TC002 - Invalid Login
test('TC002 - Invalid login', async ({ page }) => {
const login = new LoginPage(page);
await login.goto();
await login.login('wrong_user', 'wrong_pass');
await login.assertLoginError();
});