import { Page, Locator, FrameLocator } from "@playwright/test";


export class CreateNewPatient {

    readonly page: Page;
    readonly popup_iframe: FrameLocator;
    readonly popupHeader: Locator;
    readonly firstName: Locator;
    readonly secondName: Locator;
    readonly thirdName: Locator;
    readonly fourthName: Locator;
    readonly years: Locator;
    readonly Months: Locator;
    readonly gender: Locator;
    readonly maritalStatus: Locator;
    readonly religion: Locator;
    readonly PatientId: Locator;
    readonly Idetification_Value: Locator;
    readonly Region: Locator;
    readonly Mobile_Phone: Locator;
    readonly Save_close_btn: Locator;



    constructor(page: Page) {
        this.page = page;
        this.popup_iframe = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i');
        this.popupHeader = page.frameLocator('#right-panel iframe').locator('span').filter({ hasText: 'Complete Patient Information' }).locator('div');
        this.firstName = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('#FirstNameE');
        this.secondName = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('#SecondNameE');
        this.thirdName = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('#ThirdNameE');
        this.fourthName = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('#FourthNameE');
        this.years = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').getByPlaceholder('Years');
        this.Months = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').getByPlaceholder('Months');
        this.gender = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('input[name="gender"]');
        this.maritalStatus = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('input[name="maritalStatus"]');
        this.religion = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('input[name="religion"]');
        this.PatientId = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('input[name="PatientId"]');
        this.Idetification_Value = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').getByPlaceholder('Idetification Value');
        this.Region = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('input[name="DDLRegion"]');
        this.Mobile_Phone = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').getByPlaceholder('Mobile Phone');
        this.Save_close_btn = page.frameLocator('#right-panel iframe').frameLocator('internal:text="This page requires frames in order to show content"i').locator('#SaveAndClose');


    }



    async create_new_Patient() {
        const dynamicValue = new Date().getTime().toString();

        await this.popup_iframe;
        await this.firstName.click();
        await this.firstName.fill('ahmed');
        await this.secondName.click();
        await this.secondName.fill('mohamed');
        await this.thirdName.click();
        await this.thirdName.fill("ahmed");
        await this.fourthName.click();
        await this.fourthName.fill("a" + dynamicValue);
        await this.years.click();
        await this.years.fill('20');
        await this.Months.click();
        await this.Months.fill('6');
        await this.gender.click();
        await this.gender.fill('m');
        await this.maritalStatus.click();
        await this.maritalStatus.fill("m");
        await this.religion.click();
        await this.religion.fill('m');
        await this.PatientId.click();
        await this.PatientId.fill('1');
        await this.Idetification_Value.click();
        await this.Idetification_Value.fill('15666666666666');
        await this.Region.click();
        await this.Region.fill('497');
        await this.Mobile_Phone.click();
        await this.Mobile_Phone.fill('01444444444');
        await this.Save_close_btn.dblclick;
    }



}