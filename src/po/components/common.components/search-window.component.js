const BaseComponent = require('./base.component');

class SearchWindowComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="search-dialog-dialog-wrapper"]');
  }

  get openResultsBtn() {
    return $('//span[text()="Переглянути всі результати"]');
  }
}
module.exports = SearchWindowComponent;
