import { test,expect } from "@playwright/test";
import { NewVisit } from "@tests/modules/visit-management/POM/ManagePatient.page";
import {CreateNewPatient} from "@tests/modules/medical-records/shared/Create-New-patient/Create-new-patient-page";
import {EditinsuranceDetails} from "@tests/modules/visit-management/POM/insurance-details.page";



const VMUrl ='/medical/visits-management/visit-management/visit-management';

// test.describe.configure({mode:'serial'});


test.describe('Create Visit',() => {

test("create ER visit_New patient", async ({ page }) => {
    const newVisit = new NewVisit(page);
    const createpatient = new CreateNewPatient(page);
    await newVisit.Nav_to_VM(VMUrl);
    await newVisit.select_ER_visit();
    await newVisit.click_newVisit();
    await newVisit.Click_complete_patient_info();
    await createpatient.create_new_Patient();
    await newVisit.create_visit_confirm_arrival();
  });


  test("create ER visit_capture patient", async ({ page }) => {
    const newVisit = new NewVisit(page);
    await newVisit.Nav_to_VM(VMUrl);
    await newVisit.select_ER_visit();
    await newVisit.click_newVisit();
    await newVisit.capture_patient();
    await newVisit.create_visit_confirm_arrival();
 
  });

  test("create Insured ER Visit", async ({ page }) => {
    const newVisit = new NewVisit(page);
    const edit = new EditinsuranceDetails(page)
    await newVisit.Nav_to_VM(VMUrl);
    await newVisit.select_ER_visit();
    await newVisit.click_newVisit();
    await newVisit.capture_patient();
    await newVisit.change_to_Insured();
    await edit.Edit_insurance_details();
    await newVisit.create_visit_confirm_arrival();

 
  });

  test("create cash ER Visit", async ({ page }) => {
    const newVisit = new NewVisit(page);
    await newVisit.Nav_to_VM(VMUrl);
    await newVisit.select_ER_visit();
    await newVisit.click_newVisit();
    await newVisit.capture_patient();
    await newVisit.create_visit_confirm_arrival();

 
  });


});