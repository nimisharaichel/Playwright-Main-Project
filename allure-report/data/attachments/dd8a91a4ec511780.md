# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signupPageTest.spec.js >> User Sign Up Account
- Location: tests\signupPageTest.spec.js:5:5

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
  5  | test('User Sign Up Account', async ({ page }) => {
  6  |     const signupPage = new SignupPage(page)
  7  | 
  8  |     await signupPage.goto()
  9  | 
  10 |     const user = validSignUpData.username
  11 |     const pass = validSignUpData.password
  12 | 
  13 |     // Wait for alert properly
  14 |     const dialogPromise = page.waitForEvent('dialog')
  15 | 
  16 |     await signupPage.signup(user, pass)
  17 | 
  18 |     const dialog = await dialogPromise
  19 | 
> 20 |     expect(dialog.message()).toBe('Sign up successful.')
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  21 |     await dialog.accept()
  22 | })
```