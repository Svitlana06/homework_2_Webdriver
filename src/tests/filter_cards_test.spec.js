const assert = require('chai').assert;
const { url } = require('./settings');
const { pages } = require('../po');
const signIn = require('./sign_in');

describe.skip('Filter cards', () => {

    before(async () => {
        await signIn();
        await pages('boardPage').boardComponent.check('existedBoard').click();
    });

    it('Searching for overdue cards', async () => {
        await pages('boardPage').filterComponent.openBtn.click();
        await pages('boardPage').filterComponent.selectEndDateProperty.click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes(url.filter);
        }, {
            timeout: 10000,
        });
    });

    it('Checking the use of the filter', async () => {
        assert.include(await browser.getUrl(), url.filterOverdue);
    });

    after(async function () {
        await browser.deleteCookies();
    });

})

