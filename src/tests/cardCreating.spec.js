const { expect } = require('chai');
const { inputData, url, valuesForFields } = require('../po/data/settings');
const { pages } = require('../po');

describe('Creating a new card on a list', () => {

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

    it('Creating a new card on the list', async () => {
        await pages('boardPage').boardComponent.boardChecking.click();
        await pages('boardPage').boardComponent.newCardAdding.click();
        await pages('boardPage').boardComponent.nameNewCardSetting.setValue(valuesForFields.newCardName);
        await pages('boardPage').boardComponent.newCardConfirmingBtn.click();
    });

    it('Checking if a new card has been added', async () => {
        const cardIsDisplayed = await pages('boardPage').boardComponent.existingNewCardChecking.isDisplayed();
        expect(cardIsDisplayed).to.be.true;
    });

    after(async function () {
        await browser.deleteCookies();
    });
})

