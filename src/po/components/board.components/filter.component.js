const BaseComponent = require('../common.components/base.component');


class FilterComponent extends BaseComponent {

    constructor() {
        super('#board')
    }
    
    get openBtn() {
        return $('//div[text()="Фільтри"]')
    }
    get selectEndDateProperty() {
        return $('//div[contains(@title, "Протерміновано")]')
    }

    
    

}
module.exports = FilterComponent;