'use strict'

class Page {
	constructor() {
		this.title = 'My Page';
	}

	//notification
	get notificationElement() { return browser.element('.text-right.m_b-md'); }
	get notificationNoButtonElement() { return this.notificationElement.element('.btn-gray'); }

	open(path) {
		browser.url(path);
	}

	acceptNotification(){
		this.notificationElement.waitForVisible(10000);
		this.notificationNoButtonElement.click();
	}
}

module.exports = Page;
