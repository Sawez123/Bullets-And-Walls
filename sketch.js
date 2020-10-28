//Declaring the variables.
var bullet,wall;
var thickness,speed;
var damage,weight;


//Setup function.
function setup() {
  //Creating the canvas area.
  createCanvas(1600,400);

  //Giving values to the thickness, speed and weight variables.
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  //Creating a wall sprite.
  wall = createSprite(1200,200,thickness,400);
  //Giving it grey color.
  wall.shapeColor = color(80,80,80);
  //Making it invisible.
  wall.visible = false;

  //Creating a bullet sprite.
  bullet = createSprite(20,200,15,10);
  //Giving it white color.
  bullet.shapeColor = "white";
  //Making it invisible.
  bullet.visible = false;

}

//draw function.
function draw() {
    //Setting background color to black.
    background(0,0,0);
    
   //Changing bullet's velocity x to the value of speed.
    bullet.velocityX = speed;
    
    //Making bullet and wall visible.
    bullet.visible = true;
    wall.visible = true;
  

    hasCollided(bullet,wall);
     
    fill("white");
    textSize(20);
    textStyle(BOLD);
    textFont("cursive");
    text("Speed of bullet: " + round(speed) + "km/h",730,50);
    text("Weight of bullet: " + round(weight) + "g",730,150);
    text("Thickness of wall: " + round(thickness) + "mm",730,250);


    fill("red");
    textFont("georgia");
    textSize(15);
    textStyle(ITALIC);
    text("(Refresh the page to Re-test)",600,370);
  
  
   //Displaying all the objects on the canvas.
   drawSprites();  

}

//hasCollided function.
function hasCollided(bullet1, wall1) {
  //Assigning values to two variables, bulletRightEdge and wallLeftEdge.
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge) {

      //Setting bullet's x velocity to 0.
      bullet.velocityX = 0;
      //Giving a value to damage variable.
      damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);
  
      //Changing wall's color based on damage's value.
      if(damage > 10) {
        wall.shapeColor = color(255,0,0);
        fill("red");
        text("Status of wall: Bad Quality",380,200);
  
      }
  
      if(damage < 5) {
        wall.shapeColor = color(0,255,0);
        fill(0,255,0);
        text("Status of wall: Good Quality",380,200);

      }
  
      if(damage >= 5 && damage <= 10) {
        wall.shapeColor = color(255,255,0);
        fill("yellow");
        text("Status of wall: Average",380,200);
  
      }
  
  
  }
  
}