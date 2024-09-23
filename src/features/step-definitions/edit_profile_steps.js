const { Given, When, Then} = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { pages } = require('../../po');
const { valuesForFields} = require('../../tests/settings');

Given('I am on the profile settings page', async () => {
    await pages('basePage').headerComponent.openAccount.click();
    await pages('basePage').accountWindowComponent.settingsBtn('profile').click();
});

When('I update my profile information', async () => {
    await pages('accountPage').profileVisabilityComponent.changeUsername.setValue(valuesForFields.newUserName);

    await pages('accountPage').profileVisabilityComponent.saveBtn.click();

    await browser.waitUntil(async () => {
        return (await browser.getUrl()).includes(valuesForFields.newUserName);
    }, { timeout: 10000 });
});

Then('my profile should reflect the updates', async () => {
    assert.strictEqual( (await pages('accountPage').profileVisabilityComponent.checkNewUsername.getText()),valuesForFields.newUserNameProfile);
});
