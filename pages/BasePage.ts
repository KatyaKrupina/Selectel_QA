import {browser, by, element, protractor} from "protractor";
import {LoginPage} from "./LoginPage";
let EC = protractor.ExpectedConditions;
let login = new LoginPage()

export class BasePage {
    navigation_menu = element(by.css("[class='user-profile-dropdown-content layout-column']"));
    logout_button = element(by.css("[stl='navigation_menu_logout']"));

    async Logout() {
        await this.navigation_menu.click();
        await this.logout_button.click();
        await browser.wait(EC.presenceOf(login.login_form), 10000);
    }
}