// const { inputData, url } = require('../po/data/settings');
// const { pages } = require('../po');

// describe('Filter cards', () => {

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

//         await pages('boardPage').boardComponent.boardChecking.click();
//     });

//     it('Searching for overdue cards', async () => {
//         await pages('boardPage').boardComponent.filterOpeningBtn.click();
//         await pages('boardPage').boardComponent.endDatePropertyChoosing.click();
//         await browser.waitUntil(async () => {
//             return (await browser.getUrl()).includes(url.filter);
//         }, {
//             timeout: 8000,
//         });
//     });

//     it('Checking the use of the filter', async () => {
//         expect(await browser.getUrl()).toContain(url.filterOverdue);
//     });

//     after(async function () {
//         await browser.deleteCookies();
//     });

// })

