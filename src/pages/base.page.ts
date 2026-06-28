import { Page } from '@playwright/test';
//Child gets parent's properties and methods Write once — reuse everywhere

//YOUR CODE: BasePage has:  this.page, getPageTitle(), waitForLoad() LoginPage gets them FREE via extends BasePage*

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}