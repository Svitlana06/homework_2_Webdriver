const BaseComponent = require('../common.components/base.component');


class SettingsComponent extends BaseComponent {

    constructor() {
        super('.u-clearfix mod-wider')
    }

    get openFrequencyProperty() {
        return $('//label[text()="Частота"]/following-sibling::*')
    }
    get changeFrequency() {
        return $('//li[text()="Періодично"]')
    }
    get checkFrequency() {
        return $('//label[text()="Частота"]/following-sibling::div//div')
    }
}

module.exports = SettingsComponent;