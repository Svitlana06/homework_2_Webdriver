// const { inputData, url, valuesForFields } = require('../po/data/settings');
// const { pages } = require('../po');

// describe('Editing the user profile', () => {

//     before(async () => {
//         await pages('primaryPage').open();
//         await pages('primaryPage').primaryComponent.signingInBtn.click();
//         await browser.waitUntil(async () => {
//             return (await browser.getUrl()).includes(url.login);
//         }, {
//             timeout: 8000,
//         });
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

//     it('Сhanging the username', async () => {
//         await pages('boardPage').boardComponent.accountOpening.click();
//         await pages('boardPage').boardComponent.profileSettingBtn.click();

//         await pages('accountPage').accountComponent.usernameChanging.setValue(valuesForFields.newUserName);

//         await pages('accountPage').accountComponent.changesSavingBtn.click();
//         await browser.waitUntil(async () => {
//             return await pages('accountPage').accountComponent.newUsernameChecking.isDisplayed();
//         }, {
//             timeout: 8000,
//         });
//     });

//     it('Сhecking the username change', async () => {
//         await expect(pages('accountPage').accountComponent.newUsernameChecking).toHaveText(valuesForFields.newUserNameProfile);

//     });

//     after(async function () {
//         await browser.deleteCookies();
//     });

// })


