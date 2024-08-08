const BaseComponent = require('../common.components/base.component');
const { inputData, valuesForFields } = require('./../../data/settings');

class BoardComponent extends BaseComponent {

    constructor() {
        super('')
    }

    get accountOpening() {
        return $('//*[contains(@aria-label, "Відкрити меню")]')
    }
    get newUserChecking() {
        return $(`//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailSignUp}"]`)
    }
    get existingUserChecking() {
        return $(`//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailLogIn}"]`)
    }
    get accountSettingBtn() {
        return $('//a[@data-testid="account-menu-settings"]')
    }
    get boardChecking() {
        return $(`//div[text()="${valuesForFields.nameExistedBoard}"]`)
    }
    get filterOpeningBtn() {
        return $('//div[text()="Фільтри"]')
    }
    get endDatePropertyChoosing() {
        return $('//div[contains(@title, "Протерміновано")]')
    }
    get profileSettingBtn() {
        return $('//span[contains(text(), "Профіль")]')
    }
    get newListCreatingBtn(){
        return $('//button[@data-testid="list-composer-button"]')
    }
    get newListSetting() {
        return $('//textarea[contains(@placeholder, "Введіть назву")]')
    }
    get newListAddingBtn() {
        return $('//button[text()="Додати список"]')
    }
    get existingNewListChecking() {
        return $(`//ol[@id="board"]//h2[text()="${valuesForFields.newListName}"]`)
    }
    get newCardAdding() {
        return $('//li[@data-list-id="66b47b03606ffbb4544dcced"]//div[@data-testid="list-footer"]')
    }
    get nameNewCardSetting() {
        return $('//textarea[@data-testid="list-card-composer-textarea"]')
    }
    get newCardConfirmingBtn() {
        return $('//button[text()="Додати картку"]')
    }
    get existingNewCardChecking() {
        return $(`//ol[@id="board"]//a[text()="${valuesForFields.newCardName}"]`)
    }
    get newBoardAddingBtn() {
        return $('//p[text()="Створити"]/parent::*')
    }

    get wayCreatingNewBoardChoosing() {
        return $('//div[contains(text(), "Дошка зроблена з карток")]')
    }

    get nameNewBoardSetting() {
        return $('//div[text()="Назва дошки"]/following-sibling::*[1]')
    }

    get newBoardConfirmingBtn() {
        return $('//button[text()="Створити"]')
    }
    get newBoardExpectionAdding() {
        return $(`//ul/div/li/a[text()="${valuesForFields.newBoardName}"]`)
    }
    get newBoardExistingChecking() {
        return $('//h1[@data-testid="board-name-display"]')
    }
    get searchSetting() {
        return $('//input[@placeholder="Пошук"]')
    }
    get resultsOpeningBtn() {
        return $('//span[text()="Переглянути всі результати"]')

    }

    


}
module.exports = BoardComponent;