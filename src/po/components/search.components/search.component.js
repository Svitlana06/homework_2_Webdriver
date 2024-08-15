const BaseComponent = require('../common.components/base.component')

class SearchComponent extends BaseComponent {

    constructor() {
        super('.eQ9di9xFp2WSc0')
    }

    get checkSearch() {
        return $('//input[@placeholder="Уведіть ключове слово тут"]')
    }
}

module.exports = SearchComponent;