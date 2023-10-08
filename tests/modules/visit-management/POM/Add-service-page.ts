import { Page, Locator, FrameLocator, expect } from "@playwright/test";


export class Add_Service {

    readonly page: Page;
    readonly popupTitle: Locator;
    readonly servicefield: Locator;
    readonly selectservice: Locator;
    readonly addbtn: Locator;
    readonly savebtn: Locator;


    constructor(page: Page) {

        this.popupTitle = page.frameLocator('#right-panel iframe').locator('div').filter({ hasText: /^Add Service$/ });
        this.servicefield = page.frameLocator('#right-panel iframe').getByPlaceholder('Service', { exact: true });
        this.selectservice = page.frameLocator('#right-panel iframe').getByText('1,25 dihydroxy vitamin D');
        this.addbtn = page.frameLocator('#right-panel iframe').getByRole('button', { name: 'Add', exact: true });
        this.savebtn = page.frameLocator('#right-panel iframe').getByRole('button', { name: 'Save' });

    }


    async AddService() {

        await this.servicefield.click();
        await this.servicefield.fill("d" + "i" + "h");
        await this.selectservice.click();
        await this.addbtn.click();
        await this.savebtn.click();

    }






}