const BaseComponent = require('../common.components/base.component');

class FilterComponent extends BaseComponent {

    constructor() {
        super('#board')
    }

    get openBtn() {
        return $('//*[@data-testid="filter-popover-button"]')
    }
    get selectEndDateProperty() {
        return $('//div[contains(@title, "Протерміновано")]')
    }




}
module.exports = FilterComponent;