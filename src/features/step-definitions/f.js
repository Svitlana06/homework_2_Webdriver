const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { valuesForFields } = require('../../data/data.js');
const { BoardPage } = require('../../po/pages/imports.js');
const boardPage = new BoardPage();
Given('I am on a Trello board1', async () => {
  await boardPage.boardComponent.check('existedBoard').click();
});
When('I add a new list1', async () => {
  await boardPage.boardComponent.createBtn('list').click();
  await boardPage.boardComponent.input('list').setValue(valuesForFields.newListName);
  await boardPage.boardComponent.addBtn('list').click();
});
Then('a new list should be added to the board1', async () => {
  expect(await boardPage.boardComponent.check('list').isDisplayed()).to.be.true;
});