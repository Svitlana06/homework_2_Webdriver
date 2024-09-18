
const inputData = {
    emailSignUp: 'olehsdf12m900@meta.ua',
    emailLogIn: 'ssavchuk0609@gmail.com',
    password: '0609Maksymiv'
}

const url = {
    signup: '/signup',
    createFirstTeam: '/create-first-team',
    login: '/login',
    boards: '/boards',
    test: 'q=FirstBoard',
    filter: 'filter',
    filterOverdue: 'filter=overdue:true',
    newBoardUrl: '/newboard',

}
const valuesForFields = {
    registrationBoard: 'My first board',

    registrationListFirst: 'Треба зробити',
    registrationListSecond: 'У роботі',
    registrationListThird: 'Готово',

    registrationCardFirst: 'Планування проєкту',
    registrationCardSecond: 'Вступні збори',

    searchingBoard: 'FirstBoard',
    checkedFrequently: 'Періодично',

    newUserName: 'antonina678api90',
    newUserNameProfile: '@antonina678api90',

    newListName: 'NewList',
    newCardName: 'NewCard',
    newBoardName: 'NewBoard',

    nameExistedBoard: 'FirstBoard',

    username: 'Maria'
}

module.exports = {
    inputData,
    url,
    valuesForFields
}

Only English
Namings
Is src/index.js rexport something else
How Pages have different urls?
Do not assign components in ctor
Use css selector
Use fields to store locators
Why super()
Common components are actually not column
Where base selector used?
Page logic shoudl resolve urls
use .skip instead of //
incapsulate login logic
move wdio script to test