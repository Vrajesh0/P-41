var database;
var form,
  game,
  firend,
  playerCount = 0;
 
var gameState = 0;
var totalresponse=0;
var title, view;
var allinfo;
var element;

function preload() {
  bgimg = loadImage("background.png");
  endimg = loadImage("thankyou.png");
}

function setup() {
 
  canvas = createCanvas(850,470);
  database = firebase.database();

  title = createElement('h1');  
  view = createButton("View");
  
}

function draw() {
background(bgimg) 
var countref = database.ref("friendCount");
countref.on("value",(data)=>{   
  totalresponse = data.val(); }) 
  title.html("Your "+ totalresponse + " friends have filled the Scrapbook"); 
  title.position(100,50); 
  view.position(700,80); 
  view.size(100,30);
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
}

