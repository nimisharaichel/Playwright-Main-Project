# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> Valid login Test
- Location: tests\loginPageTest.spec.js:6:6

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.demoblaze.com/index.html", waiting until "load"

```

# Test source

```ts
  1  | export class LoginPage{
  2  |     page
  3  |     loginButton
  4  |     usernameInput
  5  |     passwordInput
  6  |     errorMessage
  7  |     okButton
  8  |     
  9  |     constructor (page){
  10 |         this.page=page
  11 |         this.loginButton=page.locator('#login2')
  12 |         this.usernameInput = page.locator('#loginusername')
  13 |         this.passwordInput = page.locator('#loginpassword')
  14 |         this.loginButton = page.locator("//button[text()='Log in']")
  15 |         this.errorMessage=page.locator("User does not exist")
  16 |         this.okButton = page.getByRole('button', { name: 'OK' })
  17 |     }
  18 | 
  19 |      async gotoLoginPage() {
> 20 |         await this.page.goto('https://www.demoblaze.com/index.html')
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  21 |      }
  22 | 
  23 | 
  24 |      async loginData(username, password) {
  25 |         await this.loginButton.click()
  26 |         await this.usernameInput.fill(username)  //nimisha18
  27 |         await this.passwordInput.fill(password)   //123456
  28 |         await this.loginButton.click()
  29 |     }
  30 | 
  31 |     async verifySuccessfulLogin() {
  32 | 
  33 |         await this.page.waitForURL('https://www.demoblaze.com/index.html')
  34 |     }
  35 | 
  36 |     
  37 |     async verifyInvalidLogin() {
  38 | 
  39 |         await this.errorMessage.waitFor()
  40 |         await this.okButton.click()
  41 | 
  42 | }
  43 | }
  44 | 
```