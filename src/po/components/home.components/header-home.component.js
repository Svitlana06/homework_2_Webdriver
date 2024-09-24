const BaseComponent = require('../common.components/base.component');

class HeaderHomeComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="bignav"]');
  }

  get signInBtn() {
    return $('//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }
}
module.exports = HeaderHomeComponent;
