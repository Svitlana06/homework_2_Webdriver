const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('chai')
const { pages } = require('../../src/po');
const { valuesForFields,inputData, url } = require('../../src/tests/settings');

Given('the Trello sign up page is displayed', async () => {
    await pages('homePage').open();
    await pages('homePage').mainComponent.signUpBtn.click();
    await browser.waitUntil(async () => {
        return (await browser.getUrl()).includes(url.signup);
    }, {
        timeout: 10000,
    });
});

When('I enter valid registration details', async () => {
    await pages('registrationPage').registrationComponent.input('email').setValue(inputData.emailSignUp);
    await pages('registrationPage').registrationComponent.submitBtn('signUp').click();

    await browser.waitUntil(async () => {
        return (await browser.getUrl()).includes(url.createFirstTeam);
    }, {
        timeout: 55000,
    });
});

When('I set up a profile', async () => {
    await pages('setupPage').setupComponent.initialSettings('goal').click();
    await pages('setupPage').setupComponent.submitBtn('continue').click();

    await pages('setupPage').setupComponent.initialSettings('board').waitForDisplayed({ timeout: 10000 });
    await pages('setupPage').setupComponent.initialSettings('board').setValue(valuesForFields.registrationBoard);
    await pages('setupPage').setupComponent.submitBtn('next').click();
    await pages('setupPage').setupComponent.initialSettings('listFirst').waitForDisplayed({ timeout: 10000 });
    await pages('setupPage').setupComponent.initialSettings('listFirst').setValue(valuesForFields.registrationListFirst);
    await pages('setupPage').setupComponent.initialSettings('listSecond').setValue(valuesForFields.registrationListSecond);
    await pages('setupPage').setupComponent.initialSettings('listThird').setValue(valuesForFields.registrationListThird);
    await pages('setupPage').setupComponent.submitBtn('next').click();

    await pages('setupPage').setupComponent.initialSettings('cardFirst').waitForDisplayed({ timeout: 10000 });
    await pages('setupPage').setupComponent.initialSettings('cardFirst').setValue(valuesForFields.registrationCardFirst);
    await pages('setupPage').setupComponent.initialSettings('cardSecond').setValue(valuesForFields.registrationCardSecond);
    await pages('setupPage').setupComponent.submitBtn('next').click();

    await pages('setupPage').setupComponent.submitBtn('skip').click();


    await browser.waitUntil(async () => {
        return pages('setupPage').setupComponent.premiumVersionOffer.isDisplayed();
    }, {
        timeout: 10000,
    });

    await pages('setupPage').setupComponent.submitBtn('skip').click();
});

Then('a new account should be created successfully', async () => {
    await pages('basePage').headerComponent.openAccount.click();
    await expect(pages('basePage').accountWindowComponent.checkUser('newUser')).isDisplayed();
});
