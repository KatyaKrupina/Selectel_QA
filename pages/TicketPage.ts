import {browser, by, element, protractor} from "protractor";
let EC = protractor.ExpectedConditions;

export class TicketPage {
    new_ticket = element(by.css("[stl='new_ticket_h1']"));

    async CheckNewTicket() {
        await browser.wait(EC.presenceOf(this.new_ticket), 10000);
        await expect(this.new_ticket.getText()).toContain('Новый тикет');
    }
}

