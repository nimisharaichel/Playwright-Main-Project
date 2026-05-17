# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> TC#3:Valid login Test
- Location: tests\loginPageTest.spec.js:8:6

# Error details

```
Error: toContainText can be only used with Locator object
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | import { LoginPage } from '../pages/LoginPage'
  3  | import testdatacredentials from '../TestData/testdatacredentials.json'
  4  | 
  5  | 
  6  | //Testcase-3:Verify login with valid credentials
  7  | 
  8  | test.only('TC#3:Valid login Test', async({page})=>{
  9  |     const loginpage=new LoginPage(page)
  10 |     await loginpage.gotoLoginPage()
  11 |     await loginpage.loginData(testdatacredentials[4].username, testdatacredentials[4].password)
  12 |     await loginpage.verifySuccessfulLogin()
  13 |     const loggedInUserName = await loginpage.verifySuccessfulLogin()
> 14 |     expect(loggedInUserName).toContainText('Welcome nimisha18')
     |                              ^ Error: toContainText can be only used with Locator object
  15 | })
  16 | 
  17 | //Testcase-4:Verify login with invalid username and valid password
  18 | 
  19 | test('TC#4:Invalid username and Valid password', async ({ page }) => {
  20 | 
  21 |     const loginPage1 = new LoginPage(page)
  22 |     await loginPage1.gotoLoginPage()
  23 |     await loginPage1.loginData(testdatacredentials[0].username, testdatacredentials[0].password)
  24 |     await loginPage1.verifyInvalidLogin()
  25 |     await expect(loginPage.errorMessage).toContainText('User does not exist');
  26 | 
  27 | })
  28 | 
  29 | //Testcase-5: Verify login with valid username and invalid password
  30 | test('Valid username and Invalid password', async ({ page }) => {
  31 | 
  32 |     const loginPage2 = new LoginPage(page)
  33 |     await loginPage2.gotoLoginPage()
  34 |     await loginPage2.loginData(testdatacredentials[1].username, testdatacredentials[1].password)
  35 |     await loginPage2.verifyInvalidLogin()
  36 |     await expect(loginPage.errorMessage).toContainText('User does not exist');
  37 | 
  38 | })
  39 | 
  40 | //Testcase-6: Verify login with Invalid username and Invalid password
  41 | test('TC#6:Invalid username and Invalid password', async ({ page }) => {
  42 | 
  43 |     const loginPage3 = new LoginPage(page)
  44 |     await loginPage3.gotoLoginPage()
  45 |     await loginPage3.loginData(testdatacredentials[2].username, testdatacredentials[2].password)
  46 |     await loginPage3.verifyInvalidLogin()
  47 |     await expect(loginPage.errorMessage).toContainText('User does not exist');
  48 | 
  49 | })
```