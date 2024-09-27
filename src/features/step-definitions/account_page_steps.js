const { When, Then } = require('@cucumber/cucumber');
const should = require('chai').should();
const { valuesForFields } = require('../../data/data.js');
const { AccountPage } = require('../../po/pages/imports.js');
const assert = require('chai').assert;

const accountPage = new AccountPage();

When('I update workspace details', async () => {
  await accountPage.settingsComponent.openFrequencyProperty.click();

  await accountPage.settingsComponent.changeFrequency.waitForExist({
    timeout: 10000,
  });
  await accountPage.settingsComponent.changeFrequency.click();
});

When('I update my profile information', async () => {
  await accountPage.profileVisabilityComponent.changeUsername.setValue(valuesForFields.newUserName);

  await accountPage.profileVisabilityComponent.saveBtn.isDisplayed();

  await accountPage.profileVisabilityComponent.saveBtn.click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(valuesForFields.newUserName);
    },
    { timeout: 15000 }
  );
});

Then('my profile should reflect the updates', async () => {
  assert.strictEqual(
    await accountPage.profileVisabilityComponent.checkNewUsername.getText(),
    valuesForFields.newUserNameProfile
  );
});

Then('the workspace settings should be updated successfully', async () => {
  (await accountPage.settingsComponent.checkFrequency.getText()).should.equal(
    valuesForFields.checkedFrequently
  );
});
