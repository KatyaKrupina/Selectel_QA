import {browser, by, element, protractor} from "protractor";
import {TicketPage} from "./TicketPage";
let EC = protractor.ExpectedConditions;
let ticket = new TicketPage();

export class PersonalDataPage{
    submit_button = element(by.css("[type='submit']"));
    field_name_surname = element(by.css("[stl='field_name_surname']"));
    field_name_name = element(by.css("[stl='field_name_name']"));
    pattern_surname_error = element(by.css("[stl='err_pattern_surname']"));
    pattern_name_error = element(by.css("[stl='err_pattern_name']"));
    required_name_error = element(by.css("[stl='err_required_name']"));
    required_surname_error = element(by.css("[stl='err_required_surname']"));
    pattern_error = 'Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов';
    name_is_required = 'Необходимо заполнить это поле'

    async EnterUserSurname(surname: string) {
        await browser.wait(EC.presenceOf(this.field_name_surname), 10000);
        await this.field_name_surname.sendKeys(surname);
    }
    async EnterUserName(name: string) {
        await browser.wait(EC.presenceOf(this.field_name_name), 10000);
        await this.field_name_name.sendKeys(name);
    }
    async CheckSurnameError() {
        await expect(this.pattern_surname_error.getText()).toContain(this.pattern_error);
    }
    async CheckNameError() {
        await expect(this.pattern_name_error.getText()).toContain(this.pattern_error);
    }
    async CheckNameIsAbsent() {
        await expect(this.required_name_error.getText()).toContain(this.name_is_required);
    }
    async CheckSurnameIsAbsent() {
        await expect(this.required_surname_error.getText()).toContain(this.name_is_required);
    }
    async SubmitChanges() {
        await this.submit_button.click();
    }
    async CreateTicket() {
        let create_ticket = element(by.linkText('Cоздайте тикет'));
        await create_ticket.click();
        await ticket.CheckNewTicket();
    }
}
