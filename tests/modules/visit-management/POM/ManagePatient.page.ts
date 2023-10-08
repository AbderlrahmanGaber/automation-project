import { Page, Locator, expect } from "@playwright/test";
import { CreateNewPatient } from "@tests/modules/medical-records/shared/Create-New-patient/POM/Create-new-patient-page";
import {EditinsuranceDetails} from "@tests/modules/visit-management/POM/insurance-details.page";



export class NewVisit {

    readonly page: Page;

    readonly classifications: Locator;
    readonly newVisit: Locator;
    readonly visitType_ER: Locator;
    readonly compeltePatientInfo: Locator;
    readonly searchbar: Locator;
    readonly searchfield: Locator;
    readonly searchicon: Locator;
    readonly patienticon: Locator;
    readonly selectpatient: Locator;
    readonly capturepartient_btn: Locator;
    readonly change_t0_insured_btn: Locator;
    readonly Edit_insurance_details_btn:Locator;
    readonly createvisitBTn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.classifications = page.frameLocator('#right-panel iframe').locator('#ClassificationTooltip i');
        this.visitType_ER = page.frameLocator('#right-panel iframe').getByRole('button', { name: ' ER' });
        this.newVisit = page.frameLocator('#right-panel iframe').getByRole('button', { name: ' New Virtual Visit' });
        this.compeltePatientInfo = page.frameLocator('#right-panel iframe').getByRole('button', { name: ' Complete Patient Information' });
        this.searchbar = page.locator('#target div').nth(1)// page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)');
        this.searchfield = page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)');
        this.searchicon = page.getByRole('button', { name: '' })
        this.selectpatient = page.locator('.gender').first();
        this.capturepartient_btn = page.frameLocator('#right-panel iframe').getByRole('button', { name: ' Capture Patient' });
        this.change_t0_insured_btn=page.frameLocator('#right-panel iframe').getByRole('button', { name: ' Change To Insured' });
        this.Edit_insurance_details_btn=page.frameLocator('#right-panel iframe').getByRole('button', { name: ' Edit Insurance Details' });
        this.createvisitBTn = page.frameLocator('#right-panel iframe').getByRole('button', { name: ' Create Visit & Confirm Arrival' });
    }
   
    async Nav_to_VM(VMUrl: string) {
        await this.page.goto(VMUrl)
    }

    async select_ER_visit() {
        await this.classifications.click();
        await this.visitType_ER.click();

    }

    async click_newVisit() {

        await this.newVisit.click();

    }


    async Click_complete_patient_info() {

        await this.compeltePatientInfo.click();


        //  Assert complete patient information pop-up is displayed successfully 

        const createpatient = new CreateNewPatient(this.page);
        await expect(createpatient.popupHeader).toBeVisible();
    }

    async capture_patient() {

        await this.searchbar.click();
        await this.searchfield.fill('ahmed mohamed ahmed a');
        await this.searchicon.click();
        await this.selectpatient.click();
        await this.capturepartient_btn.click();
        //  Assert patient captured successfully 
        await expect(this.createvisitBTn).toBeVisible();
        
    }

    async create_visit_confirm_arrival() {

        await this.createvisitBTn.click();

    }

    async change_to_Insured() {

        const insuranceDetails = new EditinsuranceDetails(this.page);

        await this.change_t0_insured_btn.click();
        await this.Edit_insurance_details_btn.click();

        await expect(insuranceDetails.Addinsurancecard).toBeVisible();

        

    }

}

