const BaseComponent = require('../common.components/base.component')

class SearchComponent extends BaseComponent {

    constructor() {
        super('//*[@data-testid="advanced-search-input"]')
    }

}

module.exports = SearchComponent;