const BaseComponent = require('./base.component');

class BoardWindowComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="header-container"]');
  }

  settings(name) {
    const selectors = {
      name: '//*[@data-testid="create-board-title-input"]',
      type: '//*[@data-testid="header-create-board-button"]',
    };
    return this.rootEL.$(selectors[name]);
  }

  get submitBtn() {
    return $('//*[@data-testid="create-board-submit-button"]');
  }
}
module.exports = BoardWindowComponent;
