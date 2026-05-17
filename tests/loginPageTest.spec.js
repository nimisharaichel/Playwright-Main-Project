import{test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import testdatacredentials from '../TestData/testdatacredentials.json'


//Testcase-3:Verify login with valid credentials

test('TC#3:Valid login Test', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await loginpage.gotoLoginPage()
    await loginpage.loginData(testdatacredentials[4].username, testdatacredentials[4].password)
    const loggedInUserName = await loginpage.verifySuccessfulLogin()
    await expect(loggedInUserName).toContain(testdatacredentials[4].username)
})

//Testcase-4:Verify login with invalid username and valid password

test('TC#4:Invalid username and Valid password', async ({ page }) => {

    const loginPage1 = new LoginPage(page)
    await loginPage1.gotoLoginPage()
    const errorText1 = await loginPage1.verifyInvalidUsernameValidPassword(testdatacredentials[1].invalidUsername, testdatacredentials[1].validPassword)
    await expect(errorText1).toBe('Wrong password.')

})

//Testcase-5: Verify login with valid username and invalid password
test('Valid username and Invalid password', async ({ page }) => {

    const loginPage2 = new LoginPage(page)
    await loginPage2.gotoLoginPage()
    const errorText2 = await loginPage2.verifyValidUsernameInvalidPassword(testdatacredentials[2].validUsername, testdatacredentials[2].invalidPassword)
    await expect(errorText2).toBe('Wrong password.')

})

//Testcase-6: Verify login with Invalid username and Invalid password
test('TC#6:Invalid username and Invalid password', async ({ page }) => {

    const loginPage3 = new LoginPage(page)
    await loginPage3.gotoLoginPage()
    const errorText3 = await loginPage3.verifyInvalidUsernameInvalidPassword(testdatacredentials[0].invalidUsername, testdatacredentials[0].invalidPassword)
    await expect(errorText3).toBe('User does not exist.')

})