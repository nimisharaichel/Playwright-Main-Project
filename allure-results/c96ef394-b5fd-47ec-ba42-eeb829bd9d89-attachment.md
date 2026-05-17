# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logoutPageTest.spec.js >> Valid login and logout Test
- Location: tests\logoutPageTest.spec.js:7:5

# Error details

```
TypeError: _LoginPage.LoginPage is not a constructor
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | import { LoginPage } from '../pages/LoginPage'
  3  | import { LogoutPage } from '../pages/LogoutPage'
  4  | 
  5  | //Testcase-10:Verify login with valid credentials
  6  | 
  7  | test('Valid login and logout Test', async({page})=>{
> 8  |     const loginpage=new LoginPage(page)
     |                     ^ TypeError: _LoginPage.LoginPage is not a constructor
  9  |     await loginpage.gotoLoginPage()
  10 |     await loginpage.loginData('nimisha18','123456')
  11 |     await loginpage.verifySuccessfulLogin()
  12 | 
  13 |     const logoutpage=new LoginPage(page)
  14 |     await logoutpage.logoutMenu()
  15 | 
  16 | })
```