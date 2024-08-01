const BaseComponent = require('../common.components/base.component')

class SearchComponent extends BaseComponent {

    constructor() {
        super('')
    }

    get searchFileldChecking() {
        return $('//input[@placeholder="Уведіть ключове слово тут"]')
    }
}

module.exports = SearchComponent;