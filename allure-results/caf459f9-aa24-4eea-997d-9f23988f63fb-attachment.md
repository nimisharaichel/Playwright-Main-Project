# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobileProductText.spec.js >> TC#8:Add product to cart and place order
- Location: tests\mobileProductText.spec.js:13:5

# Error details

```
Error: locator.waitFor: Error: strict mode violation: getByRole('link', { name: 'Nokia lumia' }) resolved to 2 elements:
    1) <a class="hrefch" href="prod.html?idp_=2">Nokia lumia 1520</a> aka getByRole('link', { name: 'Nokia lumia' }).first()
    2) <a class="hrefch" href="prod.html?idp_=2">Nokia lumia 1520</a> aka getByRole('link', { name: 'Nokia lumia' }).nth(1)

Call log:
  - waiting for getByRole('link', { name: 'Nokia lumia' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
      - img [ref=e4]
      - text: PRODUCT STORE
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem
      - listitem [ref=e16]:
        - link "Log out" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e18]:
        - link "Welcome nimisha18" [ref=e19] [cursor=pointer]:
          - /url: "#"
      - listitem
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]:
        - generic [ref=e31]: Previous
      - button "Next" [ref=e32] [cursor=pointer]:
        - generic [ref=e34]: Next
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [active] [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e43]:
      - generic [ref=e44]:
        - generic [ref=e46]:
          - link [ref=e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e48]:
            - heading "Samsung galaxy s6" [level=4] [ref=e49]:
              - link "Samsung galaxy s6" [ref=e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e51]
            - paragraph [ref=e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e54]:
          - link [ref=e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e56]:
            - heading "Nokia lumia 1520" [level=4] [ref=e57]:
              - link "Nokia lumia 1520" [ref=e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e59]
            - paragraph [ref=e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e62]:
          - link [ref=e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e64]:
            - heading "Nexus 6" [level=4] [ref=e65]:
              - link "Nexus 6" [ref=e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e67]
            - paragraph [ref=e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e70]:
          - link [ref=e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e72]:
            - heading "Samsung galaxy s7" [level=4] [ref=e73]:
              - link "Samsung galaxy s7" [ref=e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e75]
            - paragraph [ref=e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e78]:
          - link [ref=e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e80]:
            - heading "Iphone 6 32gb" [level=4] [ref=e81]:
              - link "Iphone 6 32gb" [ref=e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e83]
            - paragraph [ref=e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e86]:
          - link [ref=e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e88]:
            - heading "Sony xperia z5" [level=4] [ref=e89]:
              - link "Sony xperia z5" [ref=e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e91]
            - paragraph [ref=e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e94]:
          - link [ref=e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e96]:
            - heading "HTC One M9" [level=4] [ref=e97]:
              - link "HTC One M9" [ref=e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e99]
            - paragraph [ref=e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e102]:
          - link [ref=e103] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e104]:
            - heading "Samsung galaxy s6" [level=4] [ref=e105]:
              - link "Samsung galaxy s6" [ref=e106] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e107]
            - paragraph [ref=e108]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e110]:
          - link [ref=e111] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e112]:
            - heading "Nokia lumia 1520" [level=4] [ref=e113]:
              - link "Nokia lumia 1520" [ref=e114] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e115]
            - paragraph [ref=e116]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e118]:
          - link [ref=e119] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e120]:
            - heading "Nexus 6" [level=4] [ref=e121]:
              - link "Nexus 6" [ref=e122] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e123]
            - paragraph [ref=e124]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e126]:
          - link [ref=e127] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e128]:
            - heading "Samsung galaxy s7" [level=4] [ref=e129]:
              - link "Samsung galaxy s7" [ref=e130] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e131]
            - paragraph [ref=e132]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e134]:
          - link [ref=e135] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e136]:
            - heading "Iphone 6 32gb" [level=4] [ref=e137]:
              - link "Iphone 6 32gb" [ref=e138] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e139]
            - paragraph [ref=e140]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e142]:
          - link [ref=e143] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e144]:
            - heading "Sony xperia z5" [level=4] [ref=e145]:
              - link "Sony xperia z5" [ref=e146] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e147]
            - paragraph [ref=e148]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e150]:
          - link [ref=e151] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e152]:
            - heading "HTC One M9" [level=4] [ref=e153]:
              - link "HTC One M9" [ref=e154] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e155]
            - paragraph [ref=e156]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e158]:
          - link [ref=e159] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=e160]:
            - heading "Sony vaio i5" [level=4] [ref=e161]:
              - link "Sony vaio i5" [ref=e162] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=e163]
            - paragraph [ref=e164]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=e166]:
          - link [ref=e167] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=e168]:
            - heading "Sony vaio i7" [level=4] [ref=e169]:
              - link "Sony vaio i7" [ref=e170] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=e171]
            - paragraph [ref=e172]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=e174]:
        - listitem [ref=e175]:
          - button "Previous" [ref=e176]
        - listitem [ref=e177]:
          - button "Next" [ref=e178] [cursor=pointer]
  - generic [ref=e180]:
    - generic [ref=e183]:
      - heading "About Us" [level=4] [ref=e184]
      - paragraph [ref=e185]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e188]:
      - heading "Get in Touch" [level=4] [ref=e189]
      - paragraph [ref=e190]: "Address: 2390 El Camino Real"
      - paragraph [ref=e191]: "Phone: +440 123456"
      - paragraph [ref=e192]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e196]:
      - img [ref=e197]
      - text: PRODUCT STORE
  - contentinfo [ref=e198]:
    - paragraph [ref=e199]: Copyright © Product Store
```

# Test source

```ts
  1  | import { expect } from '@playwright/test'
  2  | export class MobileProduct {
  3  | 
  4  |     constructor(page) {
  5  | 
  6  |         this.page = page
  7  | 
  8  |         this.phoneButton = page.getByRole('link', { name: 'Phones' })
  9  | 
  10 |         this.productSelect = page.getByRole('link', { name: 'Nokia lumia' })
  11 | 
  12 |         this.addToCartButton = page.getByRole('link', { name: 'Add to cart' })
  13 | 
  14 |         this.cartView = page.locator('#cartur')
  15 | 
  16 |         this.placeOrderButton = page.locator('.btn-success')
  17 | 
  18 |         this.enterName = page.locator('#name')
  19 | 
  20 |         this.countryName = page.locator('#country')
  21 | 
  22 |         this.cityName = page.locator('#city')
  23 | 
  24 |         this.creditCardName = page.locator('#card')
  25 | 
  26 |         this.monthName = page.locator('#month')
  27 | 
  28 |         this.yearInput = page.locator('#year')
  29 | 
  30 |         this.purchaseButton = page.locator('[onclick="purchaseOrder()"]')
  31 | 
  32 |         this.successText = page.locator("//h2[text()='Thank you for your purchase!']")
  33 | 
  34 |         this.okButton = page.locator('.confirm.btn.btn-lg.btn-primary')
  35 |     }
  36 | 
  37 |     async addProductToCart() {
  38 | 
  39 |         await this.phoneButton.click()
> 40 |         await this.productSelect.waitFor({ state: 'visible', timeout: 10000 })
     |                                  ^ Error: locator.waitFor: Error: strict mode violation: getByRole('link', { name: 'Nokia lumia' }) resolved to 2 elements:
  41 | 
  42 |         await this.productSelect.click()
  43 | 
  44 |         this.page.once('dialog', async dialog => {
  45 | 
  46 |             console.log(dialog.message())
  47 | 
  48 |             await dialog.accept()
  49 | 
  50 |         })
  51 | 
  52 |         await this.addToCartButton.click()
  53 |     }
  54 | 
  55 |     async itemViewInCart() {
  56 | 
  57 |         await this.cartView.click()
  58 |     }
  59 | 
  60 |     async clickPlaceOrderButton() {
  61 | 
  62 |         await this.placeOrderButton.click()
  63 |     }
  64 | 
  65 |     async placeOrderForm(name, country, city, creditcard, month, year) {
  66 | 
  67 |         await this.enterName.fill(name)
  68 | 
  69 |         await this.countryName.fill(country)
  70 | 
  71 |         await this.cityName.fill(city)
  72 | 
  73 |         await this.creditCardName.fill(creditcard)
  74 | 
  75 |         await this.monthName.fill(month)
  76 | 
  77 |         await this.yearInput.fill(year)
  78 | 
  79 |         await this.purchaseButton.click()
  80 |     }
  81 | 
  82 |   async successMessage() {
  83 | 
  84 |        return await this.successText.textContent()
  85 |         await this.okButton.click()
  86 |     }
  87 | }
  88 | 
  89 | 
  90 | 
```