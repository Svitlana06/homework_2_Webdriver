const BaseComponent = require('../common.components/base.component');


class WorkplaceComponent extends BaseComponent {

    constructor() {
        super('//*[@data-testid="current-workspace-expanded"]')
    }


}
module.exports = WorkplaceComponent;