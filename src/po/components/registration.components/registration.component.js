const BaseComponent = require('../common.components/base.component')

class RegistrationComponent extends BaseComponent {

    constructor() {
        super('')
    }

    get emailSetting() {
        return $('#email')
    }

    get usernameSetting() {
        return $('#username')
    }

    get signUpSubmittingBtn() {
        return $('#signup-submit')
    }

    get signInSubmittingBtn() {
        return $('#login-submit')
    }

    get passwordSetting() {
        return $('#password')
    }
}
module.exports = RegistrationComponent;