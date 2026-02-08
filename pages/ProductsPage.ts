import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addProductToCart(productName: string) {
    const productCard = this.page.locator('.inventory_item').filter({ hasText: productName });
    await productCard.locator('button:has-text("Add to cart")').click();
  }

  async removeProductFromCart(productName: string) {
    const productCard = this.page.locator('.inventory_item').filter({ hasText: productName });
    await productCard.locator('button:has-text("Remove")').click();
  }

  async   openCart() {
    const cartLink = this.page.locator('a.shopping_cart_link');
    await cartLink.waitFor({ state: 'visible' });
    await cartLink.click();
  }

  async getCartItemCount(): Promise<number> {
    const badge = this.page.locator('.shopping_cart_badge');
    if ((await badge.count()) === 0) return 0;
    return parseInt(await badge.innerText());
  }
}
