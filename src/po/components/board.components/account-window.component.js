const BaseComponent = require('../common.components/base.component');
const { inputData } = require('../../data/settings');

class AccountWindowComponent extends BaseComponent {

    constructor() {
        super('//*[@data-testid="header-member-menu-popover"]')
    }

    checkUser(name){
        const selectors={
            newUser:`//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailSignUp}"]`,
            existedUser:`//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailLogIn}"]`,
        }
        return this.rootEL.$(selectors[name])
    }

    settingsBtn(name){
        const selectors={
            account:'//a[@data-testid="account-menu-settings"]',
            profile:'//span[contains(text(), "Профіль")]',
        }
        return this.rootEL.$(selectors[name])
    }


   

}
module.exports = AccountWindowComponent;