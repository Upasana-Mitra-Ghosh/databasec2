var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
//TA1
  backgroundImage = loadImage("assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //game = new Game();
  //game.start();

}

function draw() {
  //TA1
  background(backgroundImage);
}
//TA2
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
