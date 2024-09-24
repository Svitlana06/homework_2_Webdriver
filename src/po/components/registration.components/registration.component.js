const BaseComponent = require('../common.components/base.component');

class RegistrationComponent extends BaseComponent {
  constructor() {
    super('#WhiteboxContainer');
  }

  input(name) {
    const selectors = {
      email: '#email',
      username: '#username',
      password: '#password',
    };
    return this.rootEL.$(selectors[name.toLowerCase()]);
  }

  submitBtn(name) {
    const selectors = {
      signUp: '#signup-submit',
      signIn: '#login-submit',
    };
    return this.rootEL.$(selectors[name]);
  }
}
module.exports = RegistrationComponent;
