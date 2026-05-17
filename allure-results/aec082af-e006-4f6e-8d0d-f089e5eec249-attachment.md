# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signupPageTest.spec.js >> User Sign Up Account
- Location: tests\signupPageTest.spec.js:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { SignupPage } from '../pages/SignupPage'
  3  | import validSignUpData from '../Utils/testdatacredentials.json'
  4  | 
  5  | //Testcase-1:Sign up Account with Valid details
  6  | 
  7  | test('User Sign Up Account', async ({ page }) => {
  8  |     const signupPage = new SignupPage(page)
  9  |     await signupPage.goto()
  10 | 
  11 |     const user = validSignUpData.username
  12 |     const pass = validSignUpData.password
  13 | 
  14 |     // Wait for alert properly
  15 |     const dialogPromise = page.waitForEvent('dialog')
  16 |     await signupPage.signup(user, pass)
  17 | 
  18 |     const dialog = await dialogPromise
  19 | 
> 20 |     expect(dialog.message()).toBe('Sign up successful.')
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  21 |     await dialog.accept()
  22 | })
  23 | 
  24 | //Testcase-2:Close the sign up screen by clicking close button
  25 | 
  26 | test('Close the sign up screen', async({page})=>{
  27 |     const signuppage1=new SignupPage(page)
  28 |     await signuppage1.goto()
  29 |     await signuppage1.close()
  30 | 
  31 | })
  32 | 
```