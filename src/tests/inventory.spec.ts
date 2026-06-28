import { test, expect } from '../fixtures';

test.describe('Inventory Management', () => {

  test('should increase badge count when items added', async ({ inventoryPage }) => {
    await inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
    await inventoryPage.addItemToCart('Sauce Labs Bike Light');
    await expect(inventoryPage.cartBadge).toHaveText('2');
  });

  test('should hide badge when item removed', async ({ inventoryPage }) => {
    await inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
    await inventoryPage.removeItemFromCart('Sauce Labs Bolt T-Shirt');
    await expect(inventoryPage.cartBadge).not.toBeVisible();
  });

});