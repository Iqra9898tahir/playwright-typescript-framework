
import {test , expect} from '../fixtures/index'

test.describe('cart details',()=>{

    test("Card title should be shown",async({cartPage})=>{
        await expect(cartPage.cartTitle).toBeVisible()
    })
    test("should proceed to checkout",async({cartPage})=>{
        const names = await cartPage.getItemNames()
         await expect (names).toContain('Sauce Labs Bolt T-Shirt')
    })
    test("continueShopping moves to main page",async({page,cartPage})=>{
        await cartPage.continueShopping()
        await expect(page).toHaveURL(/inventory/)
    })
    test("procedd to checkout",async({page,cartPage})=>{
        await cartPage.proceedToCheckout()
        await expect(page).toHaveURL(/checkout-step-one/)
    })




})


