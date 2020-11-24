
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];

function setup() {
  createCanvas(450,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(225,795,450,10);
  //ground2 = new Ground(5,)

  division1 = new Division(5);
  division2 = new Division(95);
  division3 = new Division(185);
  division4 = new Division(270);
  division5 = new Division(360);
  division6 = new Division(445);

  plinko1 = new Plinko(40,75);
  plinko2 = new Plinko(90,75);
  plinko3 = new Plinko(140,75);
  plinko4 = new Plinko(190,75);
  plinko5 = new Plinko(240,75);
  plinko6 = new Plinko(290,75);
  plinko7 = new Plinko(340,75);
  plinko8 = new Plinko(390,75);
  
  plinko9 = new Plinko(15,175);
  plinko10 = new Plinko(65,175);
  plinko11 = new Plinko(115,175);
  plinko12 = new Plinko(165,175);
  plinko13 = new Plinko(215,175);
  plinko14 = new Plinko(265,175);
  plinko15 = new Plinko(315,175);
  plinko16 = new Plinko(365,175);
  plinko17 = new Plinko(415,175);

  plinko18 = new Plinko(40,275);
  plinko19 = new Plinko(90,275);
  plinko20 = new Plinko(140,275);
  plinko21 = new Plinko(190,275);
  plinko22 = new Plinko(240,275);
  plinko23 = new Plinko(290,275);
  plinko24 = new Plinko(340,275);
  plinko25 = new Plinko(390,275);

  plinko26 = new Plinko(15,375);
  plinko27 = new Plinko(65,375);
  plinko28 = new Plinko(115,375);
  plinko29 = new Plinko(165,375);
  plinko30 = new Plinko(215,375);
  plinko31 = new Plinko(265,375);
  plinko32 = new Plinko(315,375);
  plinko33 = new Plinko(365,375);
  plinko34 = new Plinko(415,375);

}

function draw() {
  background("black");  

  Engine.update(engine);

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
}
for (var a = 0; a < particles.length; a++) {
    particles[a].display();
}


console.log(frameCount);

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();

  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();

  
  drawSprites();
}