import { Page, Locator } from '@playwright/test';
import {User} from '../types/user.types';
import { BasePage } from './base.page';

export class LoginPage extends BasePage{
    readonly username : Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

  constructor(page : Page){
    super(page);
    this.username = page.locator("#user-name")
    this.password = page.locator("#password")
    this.loginButton = page.locator("#login-button")
}

async goTo(): Promise<void> {
  await this.page.goto('/');
}

  async login(user:User): Promise<void> {
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.loginButton.click();
  }

}
