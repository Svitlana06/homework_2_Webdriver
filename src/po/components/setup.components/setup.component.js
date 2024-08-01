const BaseComponent = require('../common.components/base.component')

class SetupComponent extends BaseComponent {

    constructor() {
        super('')
    }

    get mainGoalChoosingBtn() {
        return $('//p[contains(text(), "Упорядкування ідей")]');
    }

    get proceedBtn() {
        return $('//button[text()="Продовжити"]');
    }

    get boardNameSetting() {
        return $('#boardName');
    }
    get nextBtn(){
        return $('//button[text()="Далі"]'); 
    }
    get listFirstNameSetting(){
        return $('#list1'); 
    }
    get listSecondNameSetting(){
        return $('#list2'); 
    }
    get listThirdNameSetting(){
        return $('#list3'); 
    }
    get cardFirstNameSetting(){
        return $('#card1'); 
    }
    get cardSecondNameSetting(){
        return $('#card2'); 
    }
    get skipBtn() {
        return $('//button[text()="Пропустити"]');
    }
    get premiumVersionOffer() {
        return $('//span[text()="Спеціальна пропозиція!"]');
    }
    
}
module.exports = SetupComponent;