const should = require('chai').should();
const { url, valuesForFields } = require('../po/data/settings');
const { pages } = require('../po');
const signIn = require('./sign_in');
const BasePage = require('../po/pages/base.page');

describe('Creating a new board', () => {
    const basePage = new BasePage();
    before(async () => {
        await signIn();
    });

    it('Creating a new board', async () => {
        await basePage.headerComponent.addBoardBtn.click();
        await basePage.boardWindowComponent.type.click();
        await basePage.boardWindowComponent.settings('name').setValue(valuesForFields.newBoardName);
        await basePage.boardWindowComponent.submitBtn.isDisplayed();
        await basePage.boardWindowComponent.submitBtn.click();

        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.newBoardUrl);
        }, {
            timeout: 10000,
        });
        await pages('boardPage').boardComponent.check('board').isDisplayed();
    });

    it('Checking if a new board has been added', async () => {
        (await pages('boardPage').boardComponent.check('board').getText()).should.equal(valuesForFields.newBoardName);
    });

    after(async function () {
        await browser.deleteCookies();
    });

})

