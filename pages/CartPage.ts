import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async assertProductInCart(productName: string) {
    const item = this.page.locator('.cart_item').filter({ hasText: productName });
    await expect(item).toBeVisible();
  }

  async removeProductFromCart(productName: string) {
    const item = this.page.locator('.cart_item').filter({ hasText: productName });
    await item.locator('button:has-text("Remove")').click();
  }

  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}
