import {browser, by, element, protractor} from "protractor";
let EC = protractor.ExpectedConditions;

export class AccountPage{
    complete_registration_button = element(by.css("[class='md-button m-solid m-success']"));

    async GoToRegistrationCompletion() {
        await browser.wait(EC.presenceOf(this.complete_registration_button), 10000);
        await this.complete_registration_button.click();
    }
}
