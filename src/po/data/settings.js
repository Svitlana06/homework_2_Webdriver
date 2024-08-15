
const inputData = {
    emailSignUp: 'marianm0@ukr.net',
    emailLogIn: 'ssavchuk0609@gmail.com',
    password: '0609Maksymiv'
}

const url = {
    signup: '/signup',
    createFirstTeam: '/create-first-team',
    login: '/login',
    boards: '/boards',
    test: 'q=FirstBoard',
    filter:'filter',
    filterOverdue:'filter=overdue:true',
    newBoardUrl:'/newboard',

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

    newUserName:'mariamaria787878',
    newUserNameProfile:'@mariamaria787878',

    newListName:'NewList',
    newCardName:'NewCard',
    newBoardName:'NewBoard',

    nameExistedBoard:'FirstBoard',

    username: 'Maria'
}

module.exports = {
    inputData,
    url,
    valuesForFields

}

