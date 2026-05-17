import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { LogoutPage } from '../pages/LogoutPage'


// Testcase-10: Verify login with valid credentials and logout the account

test('TC#10:Valid login and logout Test', async ({ page }) => {
    const loginpage = new LoginPage(page)

    await loginpage.gotoLoginPage()
    await loginpage.loginData('nimisha18', '123456')
    await loginpage.verifySuccessfulLogin()

    const logoutpage = new LogoutPage(page)
    await logoutpage.logoutMenu()
})