const assert = require('assert');
const { inputData, url, valuesForFields } = require('../po/data/settings');
const { pages } = require('../po');

describe('Creating a new board', () => {

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

    it('Creating a new board', async () => {
        await pages('boardPage').boardComponent.newBoardAddingBtn.click();
        await pages('boardPage').boardComponent.wayCreatingNewBoardChoosing.click();
        await pages('boardPage').boardComponent.nameNewBoardSetting.setValue(valuesForFields.newBoardName);
        await pages('boardPage').boardComponent.newBoardConfirmingBtn.isDisplayed();
        await pages('boardPage').boardComponent.newBoardConfirmingBtn.click();

        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.newBoardUrl);
        }, {
            timeout: 8000,
        });
        await pages('boardPage').boardComponent.newBoardExpectionAdding.isDisplayed();
    });

    it('Checking if a new board has been added', async () => {
        const newBoard = await pages('boardPage').boardComponent.newBoardExistingChecking.getText();
        assert.strictEqual(newBoard, valuesForFields.newBoardName);
    });

    after(async function () {
        await browser.deleteCookies();
    });

})

