import { test, expect } from '../fixtures';
import { LoginPage } from '../pages/login.page';

test.describe('Login Page', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
  });

  test('should show correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('should redirect to inventory on valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login({
    username: process.env.TEST_USERNAME ?? 'standard_user',
  password: process.env.TEST_PASSWORD ?? 'secret_sauce'
    });
    await expect(page).toHaveURL(/inventory/);
  });

  test('should show error on invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login({
      username: 'wrong_user',
      password: 'wrong_password'
    });
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});