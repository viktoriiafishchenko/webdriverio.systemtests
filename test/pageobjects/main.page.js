let Driver = require('webdriverio');
let Page = require('./base.page');
'use strict'

class MainPage extends Page {
    //Main Page Navigation header
    get navHeaderElement() { return browser.element(".header-nav"); }
    get loginNavHeaderElement() { return this.navHeaderElement.element("[data-dropdown-target='login'"); }
    //Catalog list
    get giftElement() { return browser.element('.gifts'); }
    get loginIconElement() { return browser.element(".item-login"); }
    get logOutElement() { return browser.element("[href='/logout/']"); }
    get autoElement() { return browser.element('.auto'); }
    //Search elemet
    get searchBoxElement() { return browser.element('#searchbox'); }
    get searchButtonElement() { return browser.element('.input-search'); }

    open() {
        super.open('/');
        this.waitUntilLoaded();    
    }

    waitUntilLoaded() {
        this.navHeaderElement.waitForVisible();
    }

    openGiftCatalog() {
        this.giftElement.click();
    }

    search(search) {
        this.searchBoxElement.setValue(search)
        this.searchButtonElement.click()
    }

    get getSearchFieldValue() {
        return this.searchBoxElement.getAttribute('value')
    }

    openAutoCatalog() {
        this.autoElement.click();
    }

    openLoginPage() {
        this.loginIconElement.click();
    }

    get getUserNameFromNavHeader() {
        this.loginNavHeaderElement.waitForVisible(20000);
        return this.loginNavHeaderElement.getText();
    }

    logOutUser() {
        this.logOutElement.click();
    }
}

module.exports = new MainPage();