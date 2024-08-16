const BasePage = require('./base.page');
const { HeaderHomeComponent, MainComponent } = require('../components');

class HomePage extends BasePage {

    constructor() {
        super('https://trello.com')
        this.mainComponent = new MainComponent();
        this.headerHomeComponent = new HeaderHomeComponent();
    }
}
module.exports = HomePage