const { Given, When, Then} = require('@cucumber/cucumber');
const should = require('chai').should();
const { expect } = require('chai');
const { pages } = require('../../po');
const { valuesForFields, url } = require('../../tests/settings');

Given('I"m on the boards page', async () => {
    expect((await browser.getUrl()).includes(url.boards));
});

When('I add a new board', async () => {
    await pages('basePage').headerComponent.addBoardBtn.click();
    await pages('basePage').boardWindowComponent.settings('type').click();
    await pages('basePage').boardWindowComponent.settings('name').setValue(valuesForFields.newBoardName);
    await pages('basePage').boardWindowComponent.submitBtn.isDisplayed();
    await pages('basePage').boardWindowComponent.submitBtn.click();

    await browser.waitUntil(async () => {
        return (await browser.getUrl()).includes(url.newBoardUrl);
    }, {
        timeout: 10000,
    });
    await pages('boardPage').boardComponent.check('board').isDisplayed();
});

Then('a new board should be created and displayed', async () => {
    (await pages('boardPage').boardComponent.check('board').getText()).should.equal(valuesForFields.newBoardName);
});