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
        //expect(page.locator('title')).toContainText('Amazon');adaefsafs
        await expect(page).toHaveTitle(/Amazon/);
    });

    test('Access Section', async({}) => {
        await page.getByLabel('Birincil').getByRole('link', { name: 'Elektronik' }).click();
        await expect(page).toHaveTitle(/Elektronik/);
        await page.locator('//*[@id="s-refinements"]/div[1]/ul/li[2]/span/a/span[2]').click();
        await expect(page).toHaveTitle(/Bilgisayar/);
    });

    test('Access Sub-Section', async({}) => {
        await page.getByLabel('Bilgisayarlar, Bileşenleri ve Aksesuarları, Şu anda bir açılır menüdesiniz. Bu açılır menüyü açmak için Enter tuşuna basın.').hover();
        await page.locator('//*[@id="nav-flyout-ab:tr_subnav_flyout_computersacc-content-3:generic-subnav-flyout"]/div[2]/div/div/ul/li[1]/a/div').click();
        await expect(page).toHaveTitle(/Dizüstü Bilgisayarlar/);
    });

    test('Prime Option', async({}) => {
        await page.getByLabel('BEDAVA Teslimat').click();
        await expect(page.locator('label:BEDAVA Teslimat')).toHaveCount(0);
    });
});