const { Given, When, Then} = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { pages } = require('../../po');
const { valuesForFields, url } = require('../../tests/settings');

Given('I am on the boards page', async () => {
    expect((await browser.getUrl()).includes(url.boards));
});

When('I seek the boards', async () => {
    await pages('basePage').headerComponent.setSearch.setValue(valuesForFields.searchingBoard);
    await pages('basePage').searchWindowComponent.openResultsBtn.waitForDisplayed({ timeout: 12000 });
    await pages('basePage').searchWindowComponent.openResultsBtn.click();
    await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.test);
    }, {
            timeout: 10000,
    });
});

Then('only necessary boards should be displayed', async () => {
    assert.strictEqual(await pages('searchPage').searchComponent.rootEL.getValue(), valuesForFields.searchingBoard);
});
