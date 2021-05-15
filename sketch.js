
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject,launcher1
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);

	groundObject=new ground(width/2,670,width,20);

	dustbinObj=new dustbin(1200,650);

	launcher1=new Launcher(paperObject.body,{x:200,y:420});

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
  launcher1.display();
  
 
  
  
 
}

//function keyPressed() {
///  	if (keyCode === UP_ARROW) {

  //  	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:30,y:-95});

    
 // 	}
//}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	launcher1.fly();
}


