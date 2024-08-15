const BaseComponent = require('./base.component')

class HeaderComponent extends BaseComponent {

    constructor() {
        super('//*[@data-testid="header-container"]')
    }

    get openAccount() {
        return $('//*[contains(@aria-label, "Відкрити меню")]')
    }
   
    get addBoardBtn() {
        return $('//p[text()="Створити"]/parent::*')
    }

    get setSearch() {
        return $('//input[@placeholder="Пошук"]')
    }


}
module.exports = HeaderComponent;