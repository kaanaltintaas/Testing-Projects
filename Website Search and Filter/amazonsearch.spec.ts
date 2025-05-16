import {test, expect, Page} from '@playwright/test';

test.describe('Amazon Suite', () => {

    test.describe.configure({ mode: 'serial' });

    let page: Page;
    test.beforeAll(async({browser}) => { //All the subsequent operations are done without login
        page = await browser.newPage();
    });

    test('has Title', async({}) => { //User accesses home page
        await page.goto('https://www.amazon.com.tr/');
        await expect(page).toHaveTitle(/Amazon/);
    });

    test('Access Section', async({}) => { //User accesses main section of electronics, then computers
        await page.getByRole('button', { name: 'Kabul et' }).click();
        await page.getByLabel('Birincil').getByRole('link', { name: 'Elektronik' }).click();
        await expect(page).toHaveTitle(/Elektronik/);
        const sect = page.locator('#s-refinements').getByRole('link', {name: 'Bilgisayarlar, Bileşenleri ve Aksesuarları'});
        await sect.click();
        await expect(page).toHaveTitle(/Bilgisayar/);
    });

    test('Access Sub-Section', async({}) => { // User accesses sub-section of laptop computers
        await page.getByLabel('Bilgisayarlar, Bileşenleri ve Aksesuarları, Şu anda bir açılır menüdesiniz. Bu açılır menüyü açmak için Enter tuşuna basın.').hover();
        await page.getByRole('link', {name: 'Dizüstü Bilgisayarlar', exact:true}).click();
        await expect(page).toHaveTitle(/Dizüstü Bilgisayarlar/);
    });

    test('Choose a specific brand', async({}) => { //User chooses a specific brand through page filter
        await page.waitForTimeout(2000);
        await expect(page.getByRole('link', {name: 'Dell Dell', exact:true})).toBeVisible();
        await page.getByRole('link', {name: 'Dell Dell', exact:true}).click();
        await expect(page.getByLabel('Sonuçları genişletmek için Dell filtresini kaldırın')).toBeVisible();
    });

    test('Sort products by highest price', async({}) => { // User sorts products by highest price
        await page.getByRole('combobox', { name: 'Sıralama Ölçütü'}).click({force:true});
        await expect(page.getByRole('option', { name: 'Fiyat: Yüksekten Düşüğe' })).toBeVisible();
        await page.getByRole('option', { name: 'Fiyat: Yüksekten Düşüğe' }).click({force:true});
        await expect(page.locator('.a-dropdown-prompt')).toHaveText('Fiyat: Yüksekten Düşüğe');
    });

    test('Verify product details page', async({}) => { // User verifies product details page
        const firstProduct = page.getByRole('heading', {name: 'Dell Precision M7680'}).first();
        await firstProduct.click();
        await expect(page).toHaveTitle(/Dell Precision M7680/);
        const productTitle = page.locator('#productTitle');
        await expect(productTitle).toContainText('Dell Precision M7680');
    });

    test('Add product to cart', async({}) => { // User adds a product to the cart
        const addToCartButton = page.locator('#add-to-cart-button');
        await addToCartButton.click();
        const cartCount = page.locator('#nav-cart-count');
        await expect(cartCount).toHaveText('1');
        await expect(page.getByLabel('Sil Dell Precision M7680')).toBeVisible();
    });

    test('Proceed to cart and checkout', async({}) => { // User checks the product in cart and proceeds to checkout
        const cartPage = page.getByRole('link', {name: 'Sepete Git'}).first();
        await cartPage.click();
        await expect(page.locator('.sc-list-item-content')).toContainText('Dell Precision M7680');
        await page.getByRole('button', {name: 'Alışverişi Tamamla Amazon Alışveriş Sepeti Ödeme'}).click();
        await expect(page.locator('#authportal-center-section')).toBeVisible();
    });
});