const BaseComponent = require('../common.components/base.component')

class PrimaryComponent extends BaseComponent {

    constructor() {
        super('')
    }

    get signingInBtn() {
        return $('//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]')
    }

    get signingUpBtn() {
        return $('//*[contains(@aria-label, "Sign up")]')
    }
    get searchSetting() {
        return $('//input[@placeholder="Пошук"]')
    }
    get resultsOpeningBtn() {
        return $('//span[text()="Переглянути всі результати"]')
    }
}
module.exports = PrimaryComponent;