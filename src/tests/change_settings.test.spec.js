// const should = require('chai').should();
// const { inputData, url, valuesForFields } = require('../po/data/settings');
// const signIn = require('./sign_in');
// const { pages } = require('../po');

// describe('Modifying workspace setting', () => {

//     before(async () => {
//         await signIn();
//     });

//     it('Changing the frequency setting', async () => {
//         await pages('basePage').headerComponent.openAccount.click();
//         await pages('basePage').accountWindowComponent.settingsBtn('account').click();

//         await pages('accountPage').settingsComponent.openFrequencyProperty.click();

//         await pages('accountPage').settingsComponent.changeFrequency.waitForExist({ timeout: 8000 })
//         await pages('accountPage').settingsComponent.changeFrequency.click();
//     });

//     it('Checking changes to the frequency setting', async () => {
//         (await pages('accountPage').settingsComponent.checkFrequency.getText()).should.equal(valuesForFields.checkedFrequently);
//     });

//     after(async function () {
//         await browser.deleteCookies();
//     });
// })


