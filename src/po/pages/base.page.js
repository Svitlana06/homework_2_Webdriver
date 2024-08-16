const { HeaderComponent, BoardWindowComponent, AccountWindowComponent, SearchWindowComponent } = require('./../components');

class BasePage {

    constructor(url) {
        this.url = url;
        this.headerComponent = new HeaderComponent();
        this.boardWindowComponent = new BoardWindowComponent();
        this.accountWindowComponent = new AccountWindowComponent();
        this.searchWindowComponent = new SearchWindowComponent();
    }

    open() {
        return browser.url(this.url)
    }
}
module.exports = BasePage;