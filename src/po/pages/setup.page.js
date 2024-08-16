const BasePage = require('./base.page');
const { SetupComponent } = require('./../components');

class SetupPage extends BasePage {

    constructor() {
        super()
        this.setupComponent = new SetupComponent();
    }
}
module.exports = SetupPage