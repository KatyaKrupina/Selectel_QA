import {by, element} from "protractor";

export class LoginPage{
    login_form = element(by.css("[id='login']"));
    password_form = element(by.css("[id='password']"));
    submit_button = element(by.css("[type='submit']"));
    username = process.env["LOGIN"] as string;
    password = process.env["PASSWORD"] as string;

    async Login() {
        await this.login_form.sendKeys(this.username);
        await this.password_form.sendKeys(this.password);
        await this.submit_button.click();
    }
}
