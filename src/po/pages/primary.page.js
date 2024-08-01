const BasePage=require('./base.page');
const {PrimaryComponent}= require('./../components');

class PrimaryPage extends BasePage{

    constructor (){
        super('https://trello.com')
        this.primaryComponent=new PrimaryComponent()
    }
}
module.exports= PrimaryPage