class Quiz{
    constructor(){}
    getState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data) {
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    start(){
        if (gameState===0){
            contestant=new Contestant();
            contestant.getCount();
            quiz =new Quiz();
            quiz.display();
        }
    }
}