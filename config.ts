import { Config } from "protractor";

export const config: Config = {
    seleniumAddress: "http://0.0.0.0:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        enableVideo: true,
        enableVNC: true,
        /*chromeOptions: {
            args: [ "--headless", "--window-size=800,600" ]
        }*/
    },
    specs: [
        "Tests/*Test.js",
    ]
};
