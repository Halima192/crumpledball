
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ball=createSprite(20,30,22,20)
	ball.shapeColor='pink';
	box1=createSprite(420,650,200,20);
	box2=createSprite(320,620,20,100);
	box3=createSprite(525,620,20,100);
	box1.shapeColor='red';
	box2.shapeColor='red';
	box3.shapeColor='red';
	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	//Create the Bodies Here.


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground)
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



