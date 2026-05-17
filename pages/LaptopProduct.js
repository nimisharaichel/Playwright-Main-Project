export class LaptopProduct {

page
laptopMenu
itemSelect
addToCartButton

constructor(page) {
this.page = page
this.laptopMenu = page.getByRole('link', { name: 'Laptops' })
this.itemSelect = page.getByRole('link', { name: 'MacBook air' })
this.addToCartButton = page.getByRole('link', { name: 'Add to cart' })
}
async addLaptopToCart() {
await this.laptopMenu.click()
await this.itemSelect.click()
this.page.once('dialog', async dialog => {
console.log(dialog.message())
await dialog.accept()
})
await this.addToCartButton.click()
}

}