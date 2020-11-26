
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,side1,side2,side3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper=new Paper(100,650,40)
  ground=new Ground(400,680,800,20)
  side1 = new Dustbin(550, 620, 20, 100);
     side2 = new Dustbin(635, 660, 150, 20);
     side3 = new Dustbin(720, 620, 20, 100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper . display();
 ground.display();
 side1.display()
 side2.display()
 side3.display()
}
function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:50,y:-50} )
	}

  }



