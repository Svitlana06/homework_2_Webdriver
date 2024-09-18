const { inputData, url, valuesForFields } = require('../po/data/settings');
const { pages, HomePage, RegistrationPage, SetupPage } = require('../po');


describe('Sign up for a new Trello account', () => {
    const homePage = new HomePage();
    const regPage = new RegistrationPage();
    const setUpPage = new SetupPage();


    const registrationComponent = regPage.registrationComponent;
    before(async () => {
        await homePage.open();
        await homePage.mainComponent.signUpBtn.click();

        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.signup);
        }, {
            timeout: 10000,
        });
        /*class BrowserWrapper() { 
        
        waitUntit(timeout) { await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.signup);
        }, {
            timeout,
        });} }
        */ 
    });

    it('Entering of valid registration details', async () => {
        await registrationComponent.input('email').setValue(inputData.emailSignUp);
        await registrationComponent.submitBtn('signUp').click();

        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.createFirstTeam);
        }, {
            timeout: 55000,
        });
    });

    it('Setting up a profile', async () => {
        
        // setUpPage.action()


        await browser.waitUntil(async () => {
            return pages('setupPage').setupComponent.premiumVersionOffer.isDisplayed();
        }, {
            timeout: 10000,
        });

        await pages('setupPage').setupComponent.submitBtn('skip').click();
    });

    it('Checking the creation of a profile', async () => {
        await pages('basePage').headerComponent.openAccount.click();
        await expect(pages('basePage').accountWindowComponent.checkUser('newUser')).toBeDisplayed();
    });

    after(async function () {
        await browser.deleteCookies();
    });
})
