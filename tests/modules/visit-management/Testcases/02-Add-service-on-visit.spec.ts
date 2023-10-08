import { test, expect } from "@playwright/test";
import { NewVisit } from "../POM/ManagePatient.page";
import { Add_Service } from "../POM/Add-service-page";


const VMUrl = '/medical/visits-management/visit-management/visit-management';


test.describe('Add Service', () => {

    test("Add Service on New ER visit", async ({ page }) => {
        const newVisit = new NewVisit(page);
        const addservice = new Add_Service(page);

        await newVisit.Nav_to_VM(VMUrl);
        await newVisit.select_ER_visit();
        await newVisit.click_newVisit();
        await newVisit.capture_patient();
        await newVisit.create_visit_confirm_arrival();
        await newVisit.click_addService();
        await addservice.AddService();


    });

    test("Add Service on Exist ER visit", async ({ page }) => {
        const newVisit = new NewVisit(page);
        const addservice = new Add_Service(page);

        await newVisit.Nav_to_VM(VMUrl);
        await newVisit.select_ER_visit();
        await newVisit.select_exist_ER_Vist();
        await newVisit.click_addService();
        await addservice.AddService();


    });
});