
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50,500,30,30);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
	Engine.update(engine);
  ball.display();
  
  drawSprites();

  
 
}



