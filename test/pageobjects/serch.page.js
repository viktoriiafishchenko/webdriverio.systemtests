let Driver = require('webdriverio');
let Page = require('./base.page');

'use strict'

class SerchPage extends Page {

    get productListElement() { return browser.element('.products-list')}

    get productItemsListElement() { return this.productListElement.elements('.product-item')}
    
    waitUntilLoaded() {
        this.productListElement.waitForVisible();
    }

    getProductItemInfo(productItemElement){
        return productItemElement.element('.text').getText()
    }

    getProductItemName(productItemElement){
        return productItemElement.element('.h4').getText()
    }
}
module.exports = new SerchPage();