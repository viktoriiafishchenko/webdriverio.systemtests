let Driver = require('webdriverio');
let Page = require('./base.page');
'use strict'

class LoginPage extends Page {

    get emailElement() { return browser.element('[name="login"]'); }
    get passwordElement() { return browser.element('[name="password"]'); }
    get entranceElement() { return browser.element('.btn-graphite'); }
    get errorElemenr() { return browser.element('.item-error'); }

    open() {
        super.open('login');
        this.passwordElement.waitForVisible(20000);
    }

    login(email, password, isCredValid = true) {
        this.emailElement.setValue(email);
        this.passwordElement.setValue(password);
        this.entranceElement.click();

        if (isCredValid) {
            super.acceptNotification();
        }
    }

    get getErrorMessage() {
        this.errorElemenr.waitForVisible();
        return this.errorElemenr.getText();
    }
}


module.exports = new LoginPage();