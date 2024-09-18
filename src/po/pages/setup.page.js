const BasePage = require('./base.page');
const { SetupComponent } = require('./../components');

class SetupPage extends BasePage {

    constructor() {
        super()
        this.setupComponent = new SetupComponent();
    }

    action() {
        this.setupComponent.initialSettings('goal').click();
        this.setupComponent.submitBtn('continue').click();

        this.setupComponent.initialSettings('board').waitForDisplayed({ timeout: 10000 });
        this.setupComponent.initialSettings('board').setValue(valuesForFields.registrationBoard);
        this.setupComponent.submitBtn('next').click();
        this.setupComponent.initialSettings('listFirst').waitForDisplayed({ timeout: 10000 });
        this.setupComponent.initialSettings('listFirst').setValue(valuesForFields.registrationListFirst);
        this.setupComponent.initialSettings('listSecond').setValue(valuesForFields.registrationListSecond);
        this.setupComponent.initialSettings('listThird').setValue(valuesForFields.registrationListThird);
        this.setupComponent.submitBtn('next').click();

        this.setupComponent.initialSettings('cardFirst').waitForDisplayed({ timeout: 10000 });
        this.setupComponent.initialSettings('cardFirst').setValue(valuesForFields.registrationCardFirst);
        this.setupComponent.initialSettings('cardSecond').setValue(valuesForFields.registrationCardSecond);
        this.setupComponent.submitBtn('next').click();

        this.setupComponent.submitBtn('skip').click();
        //should be divided into more atomic parts
    }
}
module.exports = SetupPage