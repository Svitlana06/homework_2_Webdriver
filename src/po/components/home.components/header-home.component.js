const BaseComponent = require('../common.components/base.component')

class HeaderHomeComponent extends BaseComponent {

    constructor() {
        super('.BigNavstyles__NavBar-sc-1mttgq7-3')
    }

    get signInBtn() {
        return $('//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]')
    }
}
module.exports = HeaderHomeComponent;