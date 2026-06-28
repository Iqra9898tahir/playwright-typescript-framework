import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { Customer } from '../types/customer.types';

export class CheckoutPage extends BasePage {

  readonly checkoutTitle: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueBtn: Locator;
  readonly cancelBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutTitle = page.locator('[data-test="title"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.zipCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.cancelBtn = page.locator('[data-test="cancel"]');
  }

  async goTo(): Promise<void> {
    await this.page.goto('/checkout-step-one.html');
  }

  async fillCustomerInfo(customer: Customer): Promise<void> {
    if (!customer.firstName?.trim()) throw new Error('firstName cannot be empty');
    if (!customer.lastName?.trim()) throw new Error('lastName cannot be empty');
    if (!customer.zipCode?.trim()) throw new Error('zipCode cannot be empty');
    await this.firstName.fill(customer.firstName);
    await this.lastName.fill(customer.lastName);
    await this.zipCode.fill(customer.zipCode);
  }

  async clickContinue(): Promise<void> {
    await this.continueBtn.click();
  }

  async cancel(): Promise<void> {
    await this.cancelBtn.click();
  }

}