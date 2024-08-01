const BaseComponent = require('../common.components/base.component');
const { valuesForFields } = require('../../data/settings');


class AccountComponent extends BaseComponent {

    constructor() {
        super('')
    }

    get frequencyPropertyOpening() {
        return $('//label[text()="Частота"]/following-sibling::*')
    }
    get frequencyChanging() {
        return $('//li[text()="Періодично"]')
    }
    get frequencyChecking() {
        return $('//label[text()="Частота"]/following-sibling::div//div')
    }
    get usernameChanging() {
        return $('#username')
    }
    get changesSavingBtn() {
        return $('//button[text()="Зберегти"]')
    }
    get newUsernameChecking() {
        return $(`//span[text()="${valuesForFields.username}"]/following-sibling::*[1]`)
    }
}

module.exports = AccountComponent;