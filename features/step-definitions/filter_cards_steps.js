const { Given, When, Then} = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { pages } = require('../../src/po');
const {url } = require('../../src/tests/settings');

Given('I am on a Trello board with multiple cards', async () => {
    await pages('boardPage').boardComponent.check('existedBoard').click();
});

When('I apply a filter for specific criteria', async () => {
    await pages('boardPage').filterComponent.openBtn.click();
    await pages('boardPage').filterComponent.selectEndDateProperty.click();
    await browser.waitUntil(async () => {
        return (await browser.getUrl()).includes(url.filter);
    }, {
        timeout: 10000,
    });
});

Then('only cards matching the criteria should be displayed', async () => {
    assert.include(await browser.getUrl(), url.filterOverdue);
});
