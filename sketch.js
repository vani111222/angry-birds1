const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;
var box,box1,log1,log2,box2,box3;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box = new Box(700,320,70,70)
    box1=new Box(920,320,70,70)
    ground1 = new Ground(600,height,1200,20)
    pig=new Pig(810,350)
    log1=new Log(810,300,100,PI/2)
    box2=new Box(700,240,70,70)
    box3=new Box(920,240,70,70)
    pig2=new Pig(810,220)
    log2=new Log(810,180,300,PI/2)
    log3=new Log(760,120,150,PI/7)
    log4=new Log(810,120,150,-PI/7)
    

        }

function draw(){
    background("green");
    Engine.update(engine);
    //console.log(box1.body.position.x);
    //console.log(box1.body.position.y);
    console.log(box1.body.angle);
    
  box.display();
 box1.display();
  ground1.display();
  pig.display();
  log1.display();
  box2.display();
  box3.display();
  pig2.display();
  log2.display();
  log3.display();
  log4.display();
  


    }


