var whiteGuys;
var girlPower;


function setup (){
  createCanvas (windowWidth, windowHeight);

  //Constructing the clouds
  //conceptualized here as jittering circles....
  cloud1 = new clouds();
  cloud2 = new clouds();
  cloud3 = new clouds();
  cloud4 = new clouds();
  cloud5 = new clouds();
  cloud6 = new clouds();
  cloud7 = new clouds();
  cloud8 = new clouds();

  //Creating the groups containing Donald Trump and Vladimir Putin
  whiteGuys = new Group();

    //Donald Trump
    trump=createSprite(width/2-80, height/2+40);
    trump.addImage(loadImage("assets/rigtigetrump.png"));
    trump.setCollider("circle", -2,2,30);
    whiteGuys.add(trump);

    //Vladimir Putin
    putin=createSprite(width/2-80, height/2-40);
    putin.addImage(loadImage("assets/rigtigeputin.png"));
    putin.setCollider("circle", -2,2,30);
    whiteGuys.add(putin);

  //Creating the group containing Michelle Obama
  girlPower = new Group();

    //Michelle Obama
    obama=createSprite(width/2+80, height/2);
    obama.addImage(loadImage("assets/rigtigeobama.png"));
    obama.setCollider("circle", -2,2,30);
    girlPower.add(obama);

}

function draw (){
  background (0, 0, 255);

  //Making sure the clouds are moving
  //and visible
  cloud1.move();
  cloud1.show();
  cloud2.move();
  cloud2.show();
  cloud3.move();
  cloud3.show();
  cloud4.move();
  cloud4.show();
  cloud5.move();
  cloud5.show();
  cloud6.move();
  cloud6.show();
  cloud7.move();
  cloud7.show();
  cloud8.move();
  cloud8.show();

  //Creating the Arena
  fill (160, 82, 45);
  rect (width/3, 745, 700, height/2);
  fill (255);
  quad (width/3, 745, width/3+700, 745, width/3+640, 300, 680, 300);

  //Text for controls
  fill (255);
  textAlign(CENTER);
  text("Michelle controls: Arrow Keys", width/2, 50);
  text("Trump controls: W A S D", width/2, 70);
  text("Putin controls: Y G H J", width/2, 90);
  textSize(20);
  text("Objective: push your opponents off the platform!", width/2, 30);


    //Making Michelle move
    //and displacing other sprites
    //X-axis
   if (keyIsDown (RIGHT_ARROW)){
      obama.position.x+=5;
      obama.displace(whiteGuys);
    }
    if (keyIsDown (LEFT_ARROW)){
      obama.position.x-=5;
      obama.displace(whiteGuys);
    }

    //Y-axis
    if (keyIsDown (40)){
      obama.position.y+=5;
      obama.displace(whiteGuys);
    }
    if (keyIsDown (38)){
      obama.position.y-=5;
      obama.displace(whiteGuys);
    }

    if (obama.position.x>1340||obama.position.x<640||obama.position.y>745||obama.position.y<300){
      obama.remove();
    }

    //Making Trump move
    //and displacing other sprites
    //x-axis
    if (keyIsDown (65)){
      trump.position.x-=5;
      trump.displace(girlPower);
      trump.collide(putin);
    }
    if (keyIsDown (68)){
      trump.position.x+=5;
      trump.displace(girlPower);
      trump.collide(putin);
    }

    //Y-axis
    if (keyIsDown (87)){
      trump.position.y-=5;
      trump.displace(girlPower);
      trump.collide(putin);
    }
    if (keyIsDown (83)){
      trump.position.y+=5;
      trump.displace(girlPower);
      trump.collide(putin);
    }

    if (trump.position.x>1340||trump.position.x<640||trump.position.y>745||trump.position.y<300){
      trump.remove();
    }

    //Making Putin move
    //and displacing other sprites
    //x-axis
    if (keyIsDown (71)){
      putin.position.x-=5;
      putin.displace(girlPower);
    }
    if (keyIsDown (74)){
      putin.position.x+=5;
      putin.displace(girlPower);
    }

    //Y-axis
    if (keyIsDown (89)){
      putin.position.y-=5;
      putin.displace(girlPower);
    }
    if (keyIsDown (72)){
      putin.position.y+=5;
      putin.displace(girlPower);
    }

    if (putin.position.x>1340||putin.position.x<640||putin.position.y>745||putin.position.y<300){
      putin.remove();
    }

  //Drawing the sprites
  drawSprites(girlPower);
  drawSprites(whiteGuys);
}

//Used to find the edges of the arena
function mousePressed(){
  console.log (mouseX, mouseY);
}

//Creating the class for the clouds
class clouds {
  constructor (){
    this.x = random (100, 1200);
    this.y = random (100, 500);
  }

  move(){
    this.x = this.x + random(-20, 20);
    this.y = this.y + random(-20, 20);
  }

  show(){
    fill (255);
    noStroke();
    ellipse(this.x, this.y, 100, 90);
  }
}
