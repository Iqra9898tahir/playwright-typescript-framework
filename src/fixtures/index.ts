
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

// Define types for our custom fixtures
type AppFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage : CartPage;
  checkoutPage : CheckoutPage;
};

// Extend Playwright's base test with  custom fixtures
export const test = base.extend<AppFixtures>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await use(loginPage);
  },

  inventoryPage: async ({loginPage,page }, use) => {
    await loginPage.login({
      username: process.env.TEST_USERNAME ?? 'standard_user',
  password: process.env.TEST_PASSWORD ?? 'secret_sauce'
    });
    await use(new InventoryPage(page));
  },

  cartPage: async({inventoryPage,page},use)=>{
    await inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
    
    const cartPage = new CartPage(page);
    await cartPage.goToViaIcon();
    await use(cartPage);

  },
  checkoutPage: async({cartPage,page},use)=>{
    await cartPage.proceedToCheckout();

    console.log('CheckoutPage:', CheckoutPage);
    console.log('typeof CheckoutPage:', typeof CheckoutPage);
   
    const checkoutPage = new CheckoutPage(page)
    await use(checkoutPage);
  }

});

export { expect } from '@playwright/test';
