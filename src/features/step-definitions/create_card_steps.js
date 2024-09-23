const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('chai');
const { pages } = require('../../po');
const { valuesForFields } = require('../../tests/settings');


Given('I am on a Trello board with existing lists', async () => {
    await pages('boardPage').boardComponent.check('existedBoard').click();
});

When('I add a new card', async () => {
    await pages('boardPage').boardComponent.createBtn('card').click();
    await pages('boardPage').boardComponent.input('card').setValue(valuesForFields.newCardName);
    await pages('boardPage').boardComponent.addBtn('card').click();
});

Then('a new card should be added to the list', async () => {
    expect(await pages('boardPage').boardComponent.check('card').isDisplayed()).to.be.true;
});
