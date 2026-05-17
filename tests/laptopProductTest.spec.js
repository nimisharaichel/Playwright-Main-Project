import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage.js'

import { MobileProduct } from '../pages/MobileProduct.js'

import { LaptopProduct } from '../pages/LaptopProduct.js'

import testdatacredentials from '../TestData/testdatacredentials.json'

import placeorderformData from '../TestData/placeorderformData.json' 

//Testcase-9:Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase


test('TC#9:Add laptop and mobile product to cart', async ({ page }) => {

    const loginpage7 = new LoginPage(page)

    await loginpage7.gotoLoginPage()

    await loginpage7.loginData(testdatacredentials[4].username, testdatacredentials[4].password)
    await loginpage7.verifySuccessfulLogin()

    const laptopproduct = new LaptopProduct(page)

    await laptopproduct.addLaptopToCart()
    //await page.goto('https://www.demoblaze.com/')
    //await page.waitForLoadState('networkidle')

    const laptopproduct1 = new MobileProduct(page)

    //await laptopproduct1.addProductToCart()

    
    await laptopproduct1.itemViewInCart()

   
    await laptopproduct1.clickPlaceOrderButton()

    await laptopproduct1.placeOrderForm(

        placeorderformData.name,
        placeorderformData.country,
        placeorderformData.city,
        placeorderformData.creditcard,
        placeorderformData.month,
        placeorderformData.year

    )

    // Validate success message
    await laptopproduct1.successMessage()

})