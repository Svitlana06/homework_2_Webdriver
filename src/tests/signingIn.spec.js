// const { inputData, url } = require('../po/data/settings');
// const { pages } = require('../po');

// describe('Signing into an existing account', () => {

//     before(async () => {
//         await pages('primaryPage').open();
//         await pages('primaryPage').primaryComponent.signingInBtn.click();
//         await browser.waitUntil(async () => {
//             return (await browser.getUrl()).includes(url.login);
//         }, {
//             timeout: 8000,
//         });
//     });

//     it('Entering of valid registration details', async () => {
//         await pages('registrationPage').registrationComponent.usernameSetting.setValue(inputData.emailLogIn);
//         await pages('registrationPage').registrationComponent.signInSubmittingBtn.click();

//         await browser.waitUntil(async () => {
//             return await pages('registrationPage').registrationComponent.passwordSetting.isDisplayed();
//         }, {
//             timeout: 8000,
//         });

//         await pages('registrationPage').registrationComponent.passwordSetting.setValue(inputData.password);
//         await pages('registrationPage').registrationComponent.signInSubmittingBtn.click();

//         await browser.waitUntil(async () => {
//             return (await browser.getUrl()).includes(url.boards);
//         }, {
//             timeout: 8000,
//         });
//     });

//     it('Verification of registration', async () => {
//         await pages('boardPage').boardComponent.accountOpening.click();
//         await expect(pages('boardPage').boardComponent.existingUserChecking).toBeDisplayed();
//     });

//     after(async function () {
//         await browser.deleteCookies();
//     });
// })


