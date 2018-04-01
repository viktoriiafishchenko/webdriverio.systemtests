let Driver = require('webdriverio');
let Page = require('./base.page');

'use strict'

class AutoPage extends Page {
    get novigationPopularAutoElement() {return browser.element('.bricks'); }

    open(){
        super.open('.auto');
        this.waitUntilLoaded();
    }

    waitUntilLoaded(){
        this.novigationPopularAutoElement.waitForVisible(10000);
    }
}
module.exports = new AutoPage();