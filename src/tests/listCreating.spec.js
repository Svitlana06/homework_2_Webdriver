const { expect } = require('chai');
const { inputData, url, valuesForFields } = require('../po/data/settings');
const { pages } = require('../po');

describe('Creating a new list', () => {

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

    it('Creating a new list on the board', async () => {
        await pages('boardPage').boardComponent.boardChecking.click();
        await pages('boardPage').boardComponent.newListCreatingBtn.click();

        await pages('boardPage').boardComponent.newListSetting.setValue(valuesForFields.newListName);
        await pages('boardPage').boardComponent.newListAddingBtn.click();
    });

    it('checking if a new list has been added', async () => {
        const listIsDisplayed = await pages('boardPage').boardComponent.existingNewListChecking.isDisplayed();
        expect(listIsDisplayed).to.be.true;
    });

    after(async function () {
        await browser.deleteCookies();
    });
})