import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  private getProductLocator(productName: string): Locator {
    return this.page
      .locator('.inventory_item')
      .filter({ has: this.page.locator('.inventory_item_name', { hasText: productName }) });
  }

  async addItemToCart(productName: string): Promise<void> {
    if (!productName?.trim()) throw new Error('productName cannot be empty');
    await this.getProductLocator(productName)
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async removeItemFromCart(productName: string): Promise<void> {
    if (!productName?.trim()) throw new Error('productName cannot be empty');
    await this.getProductLocator(productName)
      .getByRole('button', { name: 'Remove' })
      .click();
  }
}