import { test, expect } from '@playwright/test'
import { SignupPage } from '../pages/SignupPage'
import testdatacredentials from '../TestData/testdatacredentials.json'

// Testcase-1: Sign up Account with Valid details

test('TC#1: User Sign Up Account', async ({ page }) => {
    const signupPage = new SignupPage(page)
    await signupPage.goto()

    const user = testdatacredentials[4].username
    const pass = testdatacredentials[4].password

    await signupPage.signup(user, pass)
})

// Testcase-2: Close the sign up screen by clicking close button

test('TC#2: Close the sign up screen', async ({ page }) => {
    const signupPage = new SignupPage(page)

    await signupPage.goto()
    await signupPage.close()
})