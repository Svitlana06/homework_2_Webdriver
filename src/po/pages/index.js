const AccountPage = require('./account.page');
const BoardPage = require('./board.page');
const PrimaryPage = require('./primary.page');
const RegistrationPage = require('./registration.page');
const SearchPage = require('./search.page');
const SetupPage = require('./setup.page');

function pages(name) {
    const items = {
        primaryPage: new PrimaryPage(),
        registrationPage: new RegistrationPage(),
        setupPage: new SetupPage(),
        boardPage: new BoardPage(),
        searchPage: new SearchPage(),
        accountPage: new AccountPage(),

    }
    return items[name];
}
module.exports = {
    PrimaryPage,
    RegistrationPage,
    pages,
    SetupPage,
    BoardPage,
    SearchPage,
    AccountPage,
    
}