const BaseComponent = require('../common.components/base.component');

class MainComponent extends BaseComponent {
  constructor() {
    super('#skip-target');
  }

  get signUpBtn() {
    return $('//*[contains(@aria-label, "Sign up")]');
  }
}
module.exports = MainComponent;
