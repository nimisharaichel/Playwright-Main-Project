export class LogoutPage{
    page
    logoutButton

    constructor(page){
        this.page=page
        this.logoutButton=page.locator('#logout2')
    }

    async logoutMenu(){
        await this.logoutButton.click()
    }

}