const BaseComponent = require('../common.components/base.component')

class SetupComponent extends BaseComponent {

    constructor() {
        super('.nvfJSf_0WwLXsm')
    }

    initialSettings(name) {
        const selectors = {
            goal: '//p[contains(text(), "Упорядкування ідей")]',
            board: '#boardName',
            listFirst: '#list1',
            listSecond: '#list2',
            listThird: '#list3',
            cardFirst: '#card1',
            cardSecond: '#card2'
        }
        return this.rootEL.$(selectors[name])
    }
    submitBtn(name) {
        const selectors = {
            continue: '//button[text()="Продовжити"]',
            next: '//button[text()="Далі"]',
            skip: '//button[text()="Пропустити"]'
        }

        return this.rootEL.$(selectors[name])
    }

    get premiumVersionOffer() {
        return $('//span[text()="Спеціальна пропозиція!"]');
    }

}
module.exports = SetupComponent;