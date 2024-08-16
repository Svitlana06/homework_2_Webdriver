const { SettingsComponent, ProfileVisabilityComponent } = require('./../components');
const BasePage = require('./base.page');


class AccountPage extends BasePage {

    constructor() {
        super()
        this.settingsComponent = new SettingsComponent();
        this.profileVisabilityComponent = new ProfileVisabilityComponent();
    }
}
module.exports = AccountPage