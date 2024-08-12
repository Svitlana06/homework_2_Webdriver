const should = require('chai').should();
const { inputData, url, valuesForFields } = require('../po/data/settings');
const { pages } = require('../po');

describe('Modifying workspace setting', () => {

    before(async () => {
        await pages('primaryPage').open();
        await pages('primaryPage').primaryComponent.signingInBtn.click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.login);
        }, {
            timeout: 8000,
        });
        await pages('registrationPage').registrationComponent.usernameSetting.setValue(inputData.emailLogIn);
        await pages('registrationPage').registrationComponent.signInSubmittingBtn.click();

        await browser.waitUntil(async () => {
            return await pages('registrationPage').registrationComponent.passwordSetting.isDisplayed();
        }, {
            timeout: 8000,
        });

        await pages('registrationPage').registrationComponent.passwordSetting.setValue(inputData.password);
        await pages('registrationPage').registrationComponent.signInSubmittingBtn.click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.boards);
        }, {
            timeout: 8000,
        });
    });

    it('Changing the frequency setting', async () => {
        await pages('boardPage').boardComponent.accountOpening.click();
        await pages('boardPage').boardComponent.accountSettingBtn.click();

        await pages('accountPage').accountComponent.frequencyPropertyOpening.click();

        await pages('accountPage').accountComponent.frequencyChanging.waitForExist({ timeout: 8000 })
        await pages('accountPage').accountComponent.frequencyChanging.click();
    });

    it('Checking changes to the frequency setting', async () => {
        const selectedFrequency = await pages('accountPage').accountComponent.frequencyChecking.getText();
        selectedFrequency.should.equal(valuesForFields.checkedFrequently);
    });

    after(async function () {
        await browser.deleteCookies();
    });
})


