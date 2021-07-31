var canvas;
var question;
var quiz,contestant;
var gameState=0;
var database;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  question = new Question(100,100);
  contestant = new Contestant(100,100);
  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  question.display();
  contestant.display();
  quiz.display();
}
