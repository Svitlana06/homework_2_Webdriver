const AccountPage = require('./account.page');
const BoardPage = require('./board.page');
const HomePage = require('./home.page');
const RegistrationPage = require('./registration.page');
const SearchPage = require('./search.page');
const SetupPage = require('./setup.page');
const BasePage = require('./base.page')

function pages(name) {
    const items = {
        homePage: new HomePage(),
        registrationPage: new RegistrationPage(),
        setupPage: new SetupPage(),
        boardPage: new BoardPage(),
        searchPage: new SearchPage(),
        accountPage: new AccountPage(),
        basePage: new BasePage(),

    }
    return items[name];
}
module.exports = {
    HomePage,
    RegistrationPage,
    pages,
    SetupPage,
    BoardPage,
    SearchPage,
    AccountPage,

}