export class InventoryPage {
    constructor(page) {
        this.page = page
        this.productLink = page.locator("(//a[@href='prod.html?idp_=4'])[1]")
        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' })
        this.cartButton = page.locator('#cartur')
    }

    async addItemToCart() {
        await this.productLink.click()
        await this.addToCartButton.waitFor({ state: 'visible' })

        const dialogPromise = this.page.waitForEvent('dialog')
        await this.addToCartButton.click()
        const dialog = await dialogPromise
        await dialog.accept()

        await this.cartButton.click()
        await this.page.waitForURL('**/cart.html')
    }
}