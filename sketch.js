var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;


var ground;
var divisions =[];
var particles = [];
var plinkos = [];
var score=0;
var divisionHeight=300;

function setup() {
  createCanvas(480,700);

  engine=Engine.create();
  world=engine.world;

  ground = new Ground(width/2,height,width,20);

 for(var k=0; k<=width; k=k+80){
    var divisionObj=new Division(k,height-divisionHeight/2,10,divisionHeight);
    divisions.push(divisionObj);
  }

  for (var j = 50; j <=width; j=j+50){  
    //var pinkobj= new Plinko(j,75);
    //plinkos.push(plinkobj); 
    plinkos.push(new Plinko(j,75));
  }
  
  for (var j = 20; j <=width-10; j=j+50){  
    //var pinkobj= new Plinko(j,175);
    //plinkos.push(plinkobj);  
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 50; j <=width; j=j+50){    
    //var pinkobj= new Plinko(j,275);
    //plinkos.push(plinkobj);
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 20; j <=width-10; j=j+50){ 
    //var pinkobj= new Plinko(j,375);
    //plinkos.push(plinkobj);   
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  
  for(var k=0; k<divisions.length;k=k+1){
    divisions[k].display();
  }
  
  for (var i = 0; i < plinkos.length; i++) {     
    plinkos[i].display();    
  }


  if(frameCount%60===0){ //create particles in every 60 frames.
    //var particleobj=new Particle(random(width/2-30, width/2+30), 10,10);
    //particles.push(particleobj);
    particles.push(new Particle(random(width/2-100, width/2+100), 10,10)); //create particles at random x position,y=10
    score++;
  }

 for (var j = 0; j < particles.length; j++) {  
    particles[j].display();
  }
}