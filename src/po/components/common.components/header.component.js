const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="header-container"]');
  }

  get openAccount() {
    return $('//*[@data-testid="header-member-menu-avatar"]');
  }

  get addBoardBtn() {
    return $('//*[@data-testid="header-create-menu-button"]');
  }

  get setSearch() {
    return $('//input[@placeholder="Пошук"]');
  }
}
module.exports = HeaderComponent;
