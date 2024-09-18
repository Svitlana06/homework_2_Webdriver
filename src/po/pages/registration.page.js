const BasePage = require('./base.page');
const { RegistrationComponent } = require('./../components');

class RegistrationPage extends BasePage {
    url = "https://www.trello.com/registration"

    constructor() {
        super()
    }

    get registrationComponent() {
        return  new RegistrationComponent()
    }

    
    get tableComponent() {
        return new Table()
    }


}
settingPage.open();
module.exports = RegistrationPage