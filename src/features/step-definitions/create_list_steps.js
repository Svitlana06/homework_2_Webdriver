const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('chai');
const { pages } = require('../../po');
const { valuesForFields } = require('../../tests/settings');


Given('I am on a Trello board', async () => {
    await pages('boardPage').boardComponent.check('existedBoard').click();
});

When('I add a new list', async () => {
    await pages('boardPage').boardComponent.createBtn('list').click();
    await pages('boardPage').boardComponent.input('list').setValue(valuesForFields.newListName);
    await pages('boardPage').boardComponent.addBtn('list').click();
});

Then('a new list should be added to the board', async () => {
    expect(await pages('boardPage').boardComponent.check('list').isDisplayed()).to.be.true;
});
