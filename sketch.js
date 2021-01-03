const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world

function setup() {
  createCanvas(400,400)
  engine=Engine.create();
  world=engine.world
  ball=Bodies.circle(200,200,20,{restitution:1});
  World.add(world,ball)

  ground=Bodies.rectangle(200,390,400,10,{isStatic:true});
  World.add(world,ground)

}

function draw() {
  background("yellow");  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
}