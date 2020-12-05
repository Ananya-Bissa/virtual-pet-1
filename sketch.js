//Create variables here
var dog,happyDog,foodS,foodStock,dogI1,dogI2;


function preload()
{
  //load images here
  dogI1 = loadImage("Dog.png");
  dogI2 = loadImage("happydog.png");
}


function setup() {
  createCanvas(500, 500);
   dog = createSprite(250,250,10,10);
  dog.addImage(dogI1);
  dog.scale = 0.4;
  
  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  
  //add styles here
   
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogI2);
  }
  if (keyWentUp(UP_ARROW)){
    dog.addImage(dogI1);
    
  }

  drawSprites();

  //add styles here
  strokeWeight(4)
  stroke("red");
  textSize(20);
  text("Food Remaining:" + foodS, 250,480);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food: x 
  })
}

  





