import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage.js'

import { MobileProduct } from '../pages/MobileProduct.js'

import testdatacredentials from '../TestData/testdatacredentials.json'

import placeorderformData from '../TestData/placeorderformData.json' 

//Testcase-8:Login with valid credentials -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase

test('TC#8:Add product to cart and place order', async ({ page }) => {

const loginpage6 = new LoginPage(page)
await loginpage6.gotoLoginPage()
await loginpage6.loginData(testdatacredentials[4].username, testdatacredentials[4].password)

const mobileproduct = new MobileProduct(page)
await mobileproduct.addProductToCart()
await mobileproduct.itemViewInCart()
await mobileproduct.clickPlaceOrderButton()
await mobileproduct.placeOrderForm(placeorderformData.name,
placeorderformData.country,
placeorderformData.city,
placeorderformData.creditcard,
placeorderformData.month,
placeorderformData.year )
await mobileproduct.successMessage()
const successMessage = await mobileproduct.successMessage()
await expect(successMessage).toBe('Thank you for your purchase!')

})
