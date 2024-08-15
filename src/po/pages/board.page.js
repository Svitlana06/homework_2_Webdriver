const BasePage=require('./base.page');
const {BoardComponent, WorkplaceComponent, FilterComponent}= require('./../components');


class BoardPage extends BasePage{

    constructor (){
        super()
        this.workplaceComponent = new WorkplaceComponent();
        this.boardComponent = new BoardComponent();
        this.filterComponent = new FilterComponent();
        
        
    }
}
module.exports= BoardPage