import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/Inventorypage'
import testdatacredentials from '../TestData/testdatacredentials.json'

// Testcase-7: Login with valid credentials -> Select product -> Add to Cart -> Click OK on popup

test('TC#7: Add product to Cart', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await loginpage.gotoLoginPage()
    await loginpage.loginData(testdatacredentials[4].username, testdatacredentials[4].password)
    await loginpage.verifySuccessfulLogin()

    const addtocart = new InventoryPage(page)
    await addtocart.addItemToCart()

    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
})