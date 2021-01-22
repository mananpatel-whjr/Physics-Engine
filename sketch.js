const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies//namespacing
var myWorld,myEngine;
var ground;
var ball;
var ball1;
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,360,800,50,options);
  World.add(myWorld,ground)
  console.log(ground)
  var ballOptions = {
    restitution:1
  }
  ball=Bodies.circle(100,100,40,ballOptions);
  World.add(myWorld,ball);
  var ball1Options= {
    restitution:0.9
  }
  ball1=Bodies.circle(300,120,70,ball1Options);
  World.add(myWorld,ball1);
}

function draw() {
 
  background(0); 
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40);
  ellipse(ball1.position.x,ball1.position.y,70);
}