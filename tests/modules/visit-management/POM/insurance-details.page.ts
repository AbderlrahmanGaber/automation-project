import { Page, Locator, FrameLocator, expect } from "@playwright/test";


export class EditinsuranceDetails {

    readonly page: Page;
    readonly contractorDDL: Locator;
    readonly contractorlistinput: Locator;
    readonly contrator: Locator;
    readonly contractorselect: Locator;
    readonly ContractDDL: Locator;
    readonly contractselect: Locator;
    readonly Addinsurancecard:Locator;
    readonly savebtn: Locator;

    constructor(page: Page) {

        this.contractorDDL = page.frameLocator('#right-panel iframe').locator('#Contractor-DDL').getByText('select');
        this.contractorlistinput = page.frameLocator('#right-panel iframe').locator('#Contractor-list input');
        this.contractorselect = page.frameLocator('#right-panel iframe').locator('#Contractor_listbox').getByText('contract nada for test send to finance nine');
        this.ContractDDL = page.frameLocator('#right-panel iframe').locator('#Contract-DDL').getByText('select');
        this.contractselect = page.frameLocator('#right-panel iframe').locator('#Contract_listbox').getByText('contract nada for test send to finance nine');
        this.Addinsurancecard=page.frameLocator('#right-panel iframe').getByRole('button', { name: ' Add Insurance Card' });
        this.savebtn = page.frameLocator('#right-panel iframe').getByRole('button', { name: 'Save & close' })

    }


    async Edit_insurance_details() {
        await this.contractorDDL.click();
        await this.contractorlistinput.click();
        await this.contractorlistinput.fill('nada');
        await this.contractorselect.click();
        await this.ContractDDL.click();
        await this.contractselect.click();
        await this.savebtn.click();
    }




}