const { Given, When, Then} = require('@cucumber/cucumber');
const should = require('chai').should();
const { pages } = require('../../src/po');
const { valuesForFields} = require('../../src/tests/settings');

Given('I am on the workspace settings page', async () => {
    await pages('basePage').headerComponent.openAccount.click();
    await pages('basePage').accountWindowComponent.settingsBtn('account').click();
});

When('I update workspace details', async  () => {
    await pages('accountPage').settingsComponent.openFrequencyProperty.click();

    await pages('accountPage').settingsComponent.changeFrequency.waitForExist({ timeout: 10000 })
    await pages('accountPage').settingsComponent.changeFrequency.click();
});

Then('the workspace settings should be updated successfully', async () => {
    (await pages('accountPage').settingsComponent.checkFrequency.getText()).should.equal(valuesForFields.checkedFrequently);
});
