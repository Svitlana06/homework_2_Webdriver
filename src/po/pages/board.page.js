const BasePage=require('./base.page');
const {BoardComponent}= require('./../components');


class BoardPage extends BasePage{

    constructor (){
        super()
        this.boardComponent=new BoardComponent()
    }
}
module.exports= BoardPage