
import  {test , expect} from '../fixtures/index'

test.describe("checkout page",()=>{


    test("Checkout title must be shown",async({checkoutPage})=>{
        await expect(checkoutPage.checkoutTitle).toHaveText('Checkout: Your Information');
    })
 //Abstraction is this method fillCustomerInfo   =  SIMPLIFY (simple interface, hidden complexity)

    test("Add customer details",async({checkoutPage})=>{
        await checkoutPage.fillCustomerInfo({
            firstName:"Iqra",
            lastName:"Khan",
            zipCode:"44000"

        }) // verify fields are filled
    await expect(checkoutPage.firstName).toHaveValue('Iqra');
    await expect(checkoutPage.lastName).toHaveValue('Khan');
    await expect(checkoutPage.zipCode).toHaveValue('44000'); 
})
   test('should proceed to next step when continue clicked', async ({ checkoutPage, page }) => {
    await checkoutPage.fillCustomerInfo({
      firstName: 'Iqra',
      lastName: 'Khan',
      zipCode: '44000'
    });
    await checkoutPage.clickContinue();
    await expect(page).toHaveURL(/checkout-step-two/);
     });

     test('should go back to cart when cancel clicked', async ({ checkoutPage, page }) => {
    await checkoutPage.cancel();
    await expect(page).toHaveURL(/cart/);
  });
})