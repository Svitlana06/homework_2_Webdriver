const assert = require('assert');
const { inputData, url, valuesForFields } = require('../po/data/settings');
const { pages } = require('../po');

describe('Searching for an existing board', () => {

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
            timeout: 10000,
        });
    });

    it('Searching for a specific board', async () => {
        await pages('boardPage').boardComponent.searchSetting.setValue(valuesForFields.searchingBoard);
        await pages('boardPage').boardComponent.resultsOpeningBtn.waitForDisplayed({ timeout: 10000 });
        await pages('boardPage').boardComponent.resultsOpeningBtn.click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.test);
        }, {
            timeout: 10000,
        });
    });

    it('Checking the board search', async () => {
        const searchBoard = await pages('searchPage').searchComponent.searchFileldChecking.getValue();
        assert.strictEqual(searchBoard, valuesForFields.searchingBoard);

    });

    after(async function () {
        await browser.deleteCookies();
    });
})


