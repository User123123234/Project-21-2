var car, wall;
var speed,weight, thickness;
var deformation;

function setup() {
  createCanvas(1600,400);
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)


wall=createSprite(1200,250,thickness,200)



car=createSprite(0,250,15,10)
car.velocityX=speed;
car.shapeColor=color(255,255,255)
} 

function draw() {
  background(0,0,0);  



if (wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
deformation=speed*weight/thickness/15;

if (deformation>10){
  wall.shapeColor=color(255,0,0)
  
}
else if (deformation<10){
  wall.shapeColor=color(0,255,0)
  
}

}




console.log(deformation)









  drawSprites();
}