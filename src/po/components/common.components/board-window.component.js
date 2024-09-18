const BaseComponent = require('./base.component')

class BoardWindowComponent extends BaseComponent {
    createBoardLocator = '//*[@data-testid=create-board-title-input]';

    constructor() {
        super('//*[@data-testid="header-container"]')
    }

    settings(name) {
        const selectors = {
            name: '',
            type: '//*[@data-testid="header-create-board-button"]'

        }
        return this.rootEL.$(selectors[name])
    }

    get type() {
        return $(this.createBoardLocator)
    }

    get typeDuplicate() {
        return $(settings('type'))
    }

    get submitBtn() {
        return $('//*[@data-testid="create-board-submit-button"]')
    }

    get typeButton() {}

}
module.exports = BoardWindowComponent;