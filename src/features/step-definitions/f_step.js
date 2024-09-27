const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { valuesForFields } = require('../../data/data.js');
const { BoardPage } = require('../../po/pages/imports.js');
const boardPage = new BoardPage();

Given('I am here', async () => {
  await boardPage.boardComponent.check('existedBoard').click();
});
When('I am again here', async () => {
  await boardPage.boardComponent.createBtn('list').click();
  await boardPage.boardComponent.input('list').setValue(valuesForFields.newListName);
  await boardPage.boardComponent.addBtn('list').click();
});
Then('I am again and again here', async () => {
  expect(await boardPage.boardComponent.check('list').isDisplayed()).to.be.true;
});