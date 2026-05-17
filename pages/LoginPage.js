export class LoginPage {
    constructor(page) {
        this.page = page
        this.loginLink = page.locator('#login2')
        this.usernameInput = page.locator('#loginusername')
        this.passwordInput = page.locator('#loginpassword')
        this.loginButton = page.locator("//button[text()='Log in']")
        this.userNameLoggedIn = page.locator('#nameofuser')
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async openLoginModal() {
        await this.loginLink.click()
    }

    async loginData(username, password) {
        await this.openLoginModal()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async verifySuccessfulLogin() {
        await this.userNameLoggedIn.waitFor()
        return await this.userNameLoggedIn.textContent()
    }

    async submitInvalidLogin(username, password) {
        await this.openLoginModal()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)

        const dialogPromise = this.page.waitForEvent('dialog')
        await this.loginButton.click()
        const dialog = await dialogPromise
        const errorMessage = dialog.message()
         //await page.waitForTimeout(3000)
        await dialog.accept()
        return errorMessage
    }
    async verifyInvalidUsernameValidPassword(username, password) {
        return await this.submitInvalidLogin(username, password)
    }

    async verifyValidUsernameInvalidPassword(username, password) {
        return await this.submitInvalidLogin(username, password)
    }

    async verifyInvalidUsernameInvalidPassword(username, password) {
        return await this.submitInvalidLogin(username, password)
    }
}
