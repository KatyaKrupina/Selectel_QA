import {browser, by, element, protractor} from "protractor";
let EC = protractor.ExpectedConditions;

export class AccountTypePage{
    user_type_individual = element(by.css("[stl='type_user_1']"));
    agree_checkbox = element(by.css("[ng-bind-html='vm.agree_html']"));
    submit_button = element(by.css("[type='submit']"));

    async ChooseUserType() {
        await browser.wait(EC.presenceOf(this.user_type_individual), 10000);
        await this.user_type_individual.click();
    }
    async CheckIfCheckboxIsSelected() {
        let checkbox = element(by.css('md-checkbox'));
        if (expect(checkbox.getAttribute('aria-checked')).toContain('false')) {
            await browser.wait(EC.presenceOf(this.agree_checkbox), 10000);
            await this.agree_checkbox.click();
        }
    }
    async AcceptUserAgreement() {
        await this.CheckIfCheckboxIsSelected();
        await this.submit_button.click();
    }
}
