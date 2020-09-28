import {browser} from "protractor";
import {LoginPage} from "../pages/LoginPage";
import {AccountPage} from "../pages/AccountPage";
import {PersonalDataPage} from "../pages/PersonalDataPage";
import {AccountTypePage} from "../pages/AccountTypePage";
import {BasePage} from "../pages/BasePage";

let login = new LoginPage();
let account = new AccountPage();
let user = new AccountTypePage();
let personalData = new PersonalDataPage();

async function StartTest(){
    await login.Login();
    await account.GoToRegistrationCompletion();
    await user.ChooseUserType();
    await user.AcceptUserAgreement();
}

describe('Selectel registration', () => {
    beforeEach(async () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
        await browser.waitForAngularEnabled(false);
        await browser.get('https://my.selectel.ru/');
    });

    it('Complete registration with wrong surname', async () => {
        for (const {surname} of [
            {surname: 'Пупкин123'},
            {surname: 'П'},
            {surname: 'Pupkin'},
        ]) {
            await StartTest();
            await personalData.EnterUserSurname(surname);
            await personalData.SubmitChanges();
            await personalData.CheckSurnameError();
            await new BasePage().Logout();
            await browser.get('https://my.selectel.ru/');
        }
    });

    it('Complete registration with wrong name', async () => {
        for (const {name} of [
            {name: 'Вася123'},
            {name: 'В'},
            {name: 'Vasya'},
        ]) {
            await StartTest();
            await personalData.EnterUserName(name);
            await personalData.SubmitChanges();
            await personalData.CheckNameError();
            await new BasePage().Logout();
            await browser.get('https://my.selectel.ru/');
        }
    });

    it('Complete registration with empty fields', async () => {
        await StartTest();
        await personalData.EnterUserName('');
        await personalData.EnterUserSurname('');
        await personalData.SubmitChanges();
        await personalData.CheckNameIsAbsent();
        await personalData.CheckSurnameIsAbsent();
        await new BasePage().Logout();
    });

    it('New ticket creation', async () => {
        await StartTest();
        await personalData.CreateTicket();
        await new BasePage().Logout();
    });
});
