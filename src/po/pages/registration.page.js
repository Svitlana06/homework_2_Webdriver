const BasePage = require('./base.page');
const { RegistrationComponent } = require('./../components');

class RegistrationPage extends BasePage {
  constructor() {
    super();
    this.registrationComponent = new RegistrationComponent();
  }
}
module.exports = RegistrationPage;
