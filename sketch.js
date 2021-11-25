var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var cohete1img, cohete2img, cohete3img, cohete4img;
var track;



function preload() {

  cohete1img = loadImage ("cohete 1.png");
  cohete2img = loadImage ("cohete 2.png");
  cohete3img = loadImage ("cohete 3.png");
  cohete4img = loadImage ("cohete 4.png");  
  track= loadImage ("0.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  game.end();
  

}


function draw(){
  if(playerCount === 4){

    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();

    
  }
 

}


