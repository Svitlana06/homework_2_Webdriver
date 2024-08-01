const {AccountComponent}= require('./../components');
const BasePage=require('./base.page');


class AccountPage extends BasePage{

    constructor (){
        super()
        this.accountComponent=new AccountComponent()
    }
}
module.exports= AccountPage