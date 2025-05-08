import {test, expect, Page} from '@playwright/test';
import { title } from 'process';

test.describe('Amazon Suite', () => {

    test.describe.configure({ mode: 'serial' });

    let page: Page;
    test.beforeAll(async({browser}) => {
        page = await browser.newPage();
    });

    test('has Title', async({}) => {
        await page.goto('https://www.amazon.com.tr/');
        await expect(page).toHaveTitle(/Amazon/);
    });

    test('Access Section', async({}) => {
        await page.getByLabel('Birincil').getByRole('link', { name: 'Elektronik' }).click();
        await expect(page).toHaveTitle(/Elektronik/);
        const sect = page.locator('#s-refinements').getByRole('link', {name: 'Bilgisayarlar, Bileşenleri ve Aksesuarları'});
        await sect.click();
        await expect(page).toHaveTitle(/Bilgisayar/);
    });

    test('Access Sub-Section', async({}) => {
        await page.getByLabel('Bilgisayarlar, Bileşenleri ve Aksesuarları, Şu anda bir açılır menüdesiniz. Bu açılır menüyü açmak için Enter tuşuna basın.').hover();
        await page.getByRole('link', {name: 'Dizüstü Bilgisayarlar', exact:true}).click();
        await expect(page).toHaveTitle(/Dizüstü Bilgisayarlar/);
    });

    test('Prime Option', async({}) => {
        await page.getByLabel('BEDAVA Teslimat').click();
        await expect(page.locator('label:BEDAVA Teslimat')).toHaveCount(0);
    });

    test('Choose a specific brand', async({}) => {
        await page.getByLabel('Sonuçları daraltmak için Dell filtresini uygulayın').click();
        const checkbox = page.getByLabel('Sonuçları genişletmek için Dell filtresini kaldırın').getByRole('checkbox');
        await expect(checkbox).toBeChecked();
    });
});