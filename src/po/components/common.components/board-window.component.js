const BaseComponent = require('./base.component')

class BoardWindowComponent extends BaseComponent {

    constructor() {
        super('//*[@data-testid="header-container"]')
    }

    settings(name){
        const selectors={
            name:'//div[text()="Назва дошки"]/following-sibling::*[1]',
            type:'//div[contains(text(), "Дошка зроблена з карток")]'

        }
        return this.rootEL.$(selectors[name])
    }  

    get submitBtn() {
        return $('//button[text()="Створити"]')
    }


}
module.exports = BoardWindowComponent;