const BaseComponent = require('../common.components/base.component');
const { valuesForFields } = require('../../data/settings');


class ProfileVisabilityComponent extends BaseComponent {

    constructor() {
        super('.u-clearfix mod-wider')
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