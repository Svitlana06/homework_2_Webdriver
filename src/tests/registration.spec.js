const { inputData, url, valuesForFields } = require('../po/data/settings');
const { pages } = require('../po');


describe('Sign up for a new Trello account', () => {

    before(async () => {
        await pages('primaryPage').open();
        await pages('primaryPage').primaryComponent.signingUpBtn.click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.signup);
        }, {
            timeout: 8000,
        });
    })

    it('Entering of valid registration details', async () => {
        await pages('registrationPage').registrationComponent.emailSetting.setValue(inputData.emailSignUp);
        await pages('registrationPage').registrationComponent.signUpSubmittingBtn.click();

        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.createFirstTeam);
        }, {
            timeout: 55000,
        });
    });

    it('Setting up a profile', async () => {
        await pages('setupPage').setupComponent.mainGoalChoosingBtn.click();
        await pages('setupPage').setupComponent.proceedBtn.click();

        await pages('setupPage').setupComponent.boardNameSetting.waitForDisplayed({ timeout: 10000 });
        await pages('setupPage').setupComponent.boardNameSetting.setValue(valuesForFields.registrationBoard);
        await pages('setupPage').setupComponent.nextBtn.click();
        await pages('setupPage').setupComponent.listFirstNameSetting.waitForDisplayed({ timeout: 10000 });
        await pages('setupPage').setupComponent.listFirstNameSetting.setValue(valuesForFields.registrationListFirst);
        await pages('setupPage').setupComponent.listSecondNameSetting.setValue(valuesForFields.registrationListSecond);
        await pages('setupPage').setupComponent.listThirdNameSetting.setValue(valuesForFields.registrationListThird);
        await pages('setupPage').setupComponent.nextBtn.click();

        await pages('setupPage').setupComponent.cardFirstNameSetting.waitForDisplayed({ timeout: 10000 });
        await pages('setupPage').setupComponent.cardFirstNameSetting.setValue(valuesForFields.registrationCardFirst);
        await pages('setupPage').setupComponent.cardSecondNameSetting.setValue(valuesForFields.registrationCardSecond);
        await pages('setupPage').setupComponent.nextBtn.click();

        await pages('setupPage').setupComponent.skipBtn.click();


        await browser.waitUntil(async () => {
            return pages('setupPage').setupComponent.premiumVersionOffer.isDisplayed();
        }, {
            timeout: 8000,
        });

        await pages('setupPage').setupComponent.skipBtn.click();
    });

    it('Checking the creation of a profile', async () => {
        await pages('boardPage').boardComponent.accountOpening.click();
        await expect(pages('boardPage').boardComponent.newUserChecking).toBeDisplayed();
    });

    after(async function () {
        await browser.deleteCookies();
    });
})
