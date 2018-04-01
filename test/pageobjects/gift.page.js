let Driver = require('webdriverio');
let Page = require('./base.page');

'use strict'

class GiftPages extends Page {
    get giftNavigatinMenuElement() { return browser.element('.row-navigation'); }

    open() {
        super.open('gifts');
        this.waitUntilLoaded();
    }

    waitUntilLoaded(){
        this.giftNavigatinMenuElement.waitForVisible(10000);
    }
}

module.exports = new GiftPages();