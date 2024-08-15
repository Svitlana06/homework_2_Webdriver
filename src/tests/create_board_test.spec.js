// const should = require('chai').should();
// const { inputData, url, valuesForFields } = require('../po/data/settings');
// const { pages } = require('../po');
// const signIn = require('./sign_in');

// describe('Creating a new board', () => {

//     before(async () => {
//         await signIn();
//     });

//     it('Creating a new board', async () => {
//         await pages('basePage').headerComponent.addBoardBtn.click();
//         await pages('basePage').boardWindowComponent.settings('type').click();
//         await pages('basePage').boardWindowComponent.settings('name').setValue(valuesForFields.newBoardName);
//         await pages('basePage').boardWindowComponent.submitBtn.isDisplayed();
//         await pages('basePage').boardWindowComponent.submitBtn.click();

//         await browser.waitUntil(async () => {
//             return (await browser.getUrl()).includes(url.newBoardUrl);
//         }, {
//             timeout: 8000,
//         });
//         await pages('boardPage').boardComponent.check('board').isDisplayed();
//     });

//     it('Checking if a new board has been added', async () => {
//         (await pages('boardPage').boardComponent.check('board').getText()).should.equal(valuesForFields.newBoardName);
//     });

//     after(async function () {
//         await browser.deleteCookies();
//     });

// })

