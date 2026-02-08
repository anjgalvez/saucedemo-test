import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(postalCode);
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async finishCheckout() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await expect(this.page).toHaveURL(/checkout-complete.html/);
  }
}
