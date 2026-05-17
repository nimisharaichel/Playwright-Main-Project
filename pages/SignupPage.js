export class SignupPage {
    page
    signUpMenu
    userName
    passWord
    signUpButton
    closeButton

    constructor(page) {
        this.page = page
        this.signUpMenu = page.locator('#signin2')
        this.userName = page.locator('#sign-username')
        this.passWord = page.locator('#sign-password')
        this.signUpButton = page.locator('#signInModal button.btn-primary')
        this.closeButton = page.locator('#signInModal button.btn-secondary')
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com/')
        return this
    }

    async signup(user, pass) {
        await this.signUpMenu.click()
        await this.userName.fill(user)
        await this.passWord.fill(pass)

        this.page.on('dialog', async (dialog) => {
            console.log(dialog.message())
            await dialog.accept()
        })

        await this.signUpButton.click()
    }

    async close() {
        await this.signUpMenu.click()
        await this.closeButton.click()
    }
}