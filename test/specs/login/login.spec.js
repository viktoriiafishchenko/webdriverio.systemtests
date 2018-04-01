'use strict'

var expect = require('chai').expect;
var LoginPage = require('../../pageobjects/login.page');
var MainPage = require('../../pageobjects/main.page');
var GiftPage = require('../../pageobjects/gift.page');
var AutoPage = require('../../pageobjects/auto.page')
var SerchPage = require('../../pageobjects/serch.page')

describe('login form', function () {
    it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.login('sssadadss', 'adada', false);

        expect(LoginPage.getErrorMessage).to.contain('Извините, пользователь с указанным e-mail не зарегистрирован, пожалуйста, убедитесь в правильности написания адреса');
    });

    it('should give access with correct creds', function () {
        LoginPage.open();
        LoginPage.login('viktoriya.kyryliuk@gmail.com', 'viktoriya123');

        expect(MainPage.getUserNameFromNavHeader).to.contain('viktoriya123');
        MainPage.openLoginPage();
        MainPage.logOutUser();
    })
});

describe('Open gift catalog from Main page', function () {
    it('gift catalog should be opened gift page', function () {
        MainPage.open();
        MainPage.openGiftCatalog();
        GiftPage.waitUntilLoaded();

        expect(GiftPage.giftNavigatinMenuElement.getText()).to.contain('Женщинам');
        expect(GiftPage.giftNavigatinMenuElement.getText()).to.contain('Мужчинам');
        expect(GiftPage.giftNavigatinMenuElement.getText()).to.contain('Детям');
        expect(GiftPage.giftNavigatinMenuElement.getText()).to.contain('Праздники');
    });
});

describe('login from main page', function () {
    it('loging from main page', function () {

        MainPage.open();
        MainPage.openLoginPage();
        LoginPage.login('viktoriya.kyryliuk@gmail.com', 'viktoriya123');

        expect(MainPage.getUserNameFromNavHeader).to.contain('viktoriya123');
    });
});

describe('Open auto catalog from Main page', function () {
    it('auto catalog should be opened auto page', function () {
        MainPage.open();
        MainPage.openAutoCatalog();
        AutoPage.waitUntilLoaded();
    });
});

describe('serch product', function () {
    it('serch and check product', function () {
        let searchTerm = 'Смартфон';
        MainPage.open();
        MainPage.search(searchTerm);
        SerchPage.waitUntilLoaded();
        let searchElementText = MainPage.getSearchFieldValue;

        expect(searchElementText).to.contain(searchTerm);
        let searchResult = SerchPage.productItemsListElement;
        console.log(searchResult);
        searchResult.value.forEach(element => {
            let info = SerchPage.getProductItemInfo(element);
            expect(info).to.contain(searchTerm);
        });
    });

    it.only('serch and check product name', function () {
        let searchTerm = 'Xiaomi Redmi';
        MainPage.open();
        MainPage.search(searchTerm);
        SerchPage.waitUntilLoaded();
        let searchElementText = MainPage.getSearchFieldValue;

        expect(searchElementText).to.contain(searchTerm);
        let searchResult = SerchPage.productItemsListElement;
        console.log(searchResult);
        searchResult.value.forEach(element => {
            let info = SerchPage.getProductItemName(element);
            expect(info).to.contain(searchTerm);
        });
    });
})

