import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';


export class CartPage extends BasePage {

  readonly shoppingCartLink: Locator;
  readonly cartTitle: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly continueShoppingBtn: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartTitle = page.locator('[data-test="title"]');
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
    this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
  }

  async goTo(): Promise<void> {
    await this.page.goto('/cart.html');
  }

  async goToViaIcon(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  async getItemNames(): Promise<string[]> {
    return await this.productName.allTextContents();
  }

  async getItemPrices(): Promise<string[]> {
    return await this.productPrice.allTextContents();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingBtn.click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }

}