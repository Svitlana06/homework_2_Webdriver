
const inputData = {
    emailSignUp: 'marianmuha190@gmail.ua',
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

    newUserName:'svitlanamaks35',
    newUserNameProfile:'@svitlanamaks35',

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

