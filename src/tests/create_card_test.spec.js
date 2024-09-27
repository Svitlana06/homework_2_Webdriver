const { expect } = require('chai');
const { valuesForFields } = require('../data/data');
const { pages } = require('../po');
const signIn = require('../settings/sign_in');

describe.skip('Creating a new card on a list', () => {
  before(async () => {
    await signIn();
  });

  it('Creating a new card on the list', async () => {
    await pages('boardPage').boardComponent.check('existedBoard').click();
    await pages('boardPage').boardComponent.createBtn('card').click();
    await pages('boardPage').boardComponent.input('card').setValue(valuesForFields.newCardName);
    await pages('boardPage').boardComponent.addBtn('card').click();
  });

  it('Checking if a new card has been added', async () => {
    expect(await pages('boardPage').boardComponent.check('card').isDisplayed()).to.be.true;
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
