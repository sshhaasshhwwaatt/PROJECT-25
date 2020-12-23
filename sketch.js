
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin;
var paper1,trash1;
var dustbin222
function preload()
{

dustbin1=loadImage("d1.png")
paper1=loadImage("p1.png")	
trash1=loadImage("t2.png")
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbinBody = Bodies.rectangle( 1050, 400 , 10 ,10, {restitution:0.9, isStatic:true});
	World.add(world, dustbinBody);
  
	dustbin=createSprite(this.dustbinBody.position.x,this.dustbinBody.position.y, 10,10);
	dustbin.addImage(dustbin1)
	dustbin.scale=0.6

trash=new Paper(100,440,70,100)

//dustbin222=createSprite(1120,350, 20,200);
//dustbin222 = Bodies.rectangle( 1120, 350, 20 ,200, {restitution:0.9, isStatic:true});
//World.add(world, dustbin222);

ground=new Ground(600,490,1200,20)

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
ground.display();


trash.display();


textFont("Bodoni MT Black")
textSize(40)
text("STORY TIME:-",30,50)


textFont("Bodoni MT Black")
textSize(20)
text("ONCE UPON A TIME A YOUNG BOY WAS EATING ICE – CREAM AND WAFFERS. AS HE FINISHED" , 30,100)
text("   HIS ICE – CREAM AND WAFFER ,HE THREW THE RAPPER ON THE GROUND . THE RAPPER WAS VERY  ",10,130)
text("SAD AND HE WAS CRYING LOUDLY. SUDDENLY THE OTHER RAPPERS LISTEN HIS VOICE AND SAID",30,160)
text("  THAT RAPPER NOT TO CRY , HUMANS  ALWAYS THROW US ON THE GROUND AND NOW WE  ",20,190)
text(" ARE OF NO USE . I WISH IF HUMANS CAN USE US THE WAY THEY USED BEFORE . AFTER FEW DAYS,   ",25,220)
text(" A SCIENTIST INTERODUCES A MACHINE THAT CAN RECYCLE THE PLASTIC WASTES.NOW ANOTHER ",25,250)
text(" SCIENTIST INTRODUCES THE DUSTBIN , WHERE WE CAN KEEP WASTE PLASTICS THAN RECYCLE IT.",28,280)

textFont("Bodoni MT Black")
textSize(40)
text("NOW THE RAPPERS WERE VERY HAPPY ",30,330);

  
 
}

function keyPressed(){

	if (keyCode === 32){
		
		//Matter.Body.setStatic(trash.body,false)
		Matter.Body.applyForce(trash.body,trash.body.position,{x:430,y:-550})

	}


}



