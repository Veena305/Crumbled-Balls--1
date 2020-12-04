
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(600,height,1200,20);
	groundSprite.shapeColor = color("yellow");

	trashSprite1 = createSprite(900,335,20,80);
	trashSprite1.shapeColor = color("white");

	trashSprite2 = createSprite(1100,335,20,80);
	trashSprite2.shapeColor = color("white");

	trashSprite3 = createSprite(1000,365,200,20);
	trashSprite3.shapeColor = color("white");

	paperSprite = new Paper(200,450,40);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  paperSprite.display();

  
  drawSprites();
 
}



