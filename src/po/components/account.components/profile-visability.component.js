const BaseComponent = require('../common.components/base.component');
const { valuesForFields } = require('../../../tests/settings');

class ProfileVisabilityComponent extends BaseComponent {

    constructor() {
        super('//*[@data-testid="profile-tab-container"]')
    }

    get changeUsername() {
        return $('#username')
    }
    get saveBtn() {
        return $('//button[text()="Зберегти"]')
    }
    get checkNewUsername() {
        return $(`//span[text()="${valuesForFields.username}"]/following-sibling::*[1]`)

    }
}

module.exports = ProfileVisabilityComponent;