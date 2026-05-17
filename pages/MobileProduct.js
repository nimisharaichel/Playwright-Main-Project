import { expect } from '@playwright/test'
export class MobileProduct {

    constructor(page) {

        this.page = page

        this.phoneButton = page.getByRole('link', { name: 'Phones' })

        this.productSelect = page.getByRole('link', { name: 'Nokia lumia' })

        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' })

        this.cartView = page.locator('#cartur')

        this.placeOrderButton = page.locator('.btn-success')

        this.enterName = page.locator('#name')

        this.countryName = page.locator('#country')

        this.cityName = page.locator('#city')

        this.creditCardName = page.locator('#card')

        this.monthName = page.locator('#month')

        this.yearInput = page.locator('#year')

        this.purchaseButton = page.locator('[onclick="purchaseOrder()"]')

        this.successText = page.locator("//h2[text()='Thank you for your purchase!']")

        this.okButton = page.locator('.confirm.btn.btn-lg.btn-primary')
    }

    async addProductToCart() {

        await this.phoneButton.click()
        await this.productSelect.waitFor({ state: 'visible', timeout: 10000 })

        await this.productSelect.click()

        this.page.once('dialog', async dialog => {

            console.log(dialog.message())

            await dialog.accept()

        })

        await this.addToCartButton.click()
    }

    async itemViewInCart() {

        await this.cartView.click()
    }

    async clickPlaceOrderButton() {

        await this.placeOrderButton.click()
    }

    async placeOrderForm(name, country, city, creditcard, month, year) {

        await this.enterName.fill(name)

        await this.countryName.fill(country)

        await this.cityName.fill(city)

        await this.creditCardName.fill(creditcard)

        await this.monthName.fill(month)

        await this.yearInput.fill(year)

        await this.purchaseButton.click()
    }

  async successMessage() {

       return await this.successText.textContent()
        await this.okButton.click()
    }
}


