const { Then } = require('@cucumber/cucumber');
const { valuesForFields, url } = require('../../data/data.js');
const { SearchPage } = require('../../po/pages/imports.js');
const assert = require('chai').assert;

const searchPage = new SearchPage();

Then('only necessary boards should be displayed', async () => {
  assert.strictEqual(
    await searchPage.searchComponent.rootEL.getValue(),
    valuesForFields.searchingBoard
  );
});
