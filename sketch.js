
function preload() {
    bg = loadImage("images/garden.png");
    c1 = loadAnimation("images/cat1.png");
    c2 = loadAnimation("images/cat2.png","images/cat3.png");
    c3 = loadAnimation("images/cat4.png");
    m1 = loadAnimation("images/mouse1.png");
    m2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    m3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800,600);
    cat.addAnimation("c", c1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("m", m1);
    mouse.scale = 0.2;

    cat.debug = true;
    cat.setCollider("rectangle",0,0,10,10)
    mouse.debug = true;
}

function draw() {

    background(bg);
    //if(Math.abs(cat.x - mouse.x) < (cat.width + mouse.width)/2){
    if(cat.isTouching(mouse)){   
        cat.velocityX = 0;
        cat.addAnimation("catanime", c3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catanime");
       
        mouse.addAnimation("mouseanime", m3);
        mouse.x = 300;
        mouse.scale = 0.2;
        mouse.changeAnimation("mouseanime");
    }



    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catanime2",c2);
     cat.changeAnimation("catanime2");
     
     mouse.addAnimation("mouseanime2",m2);
     mouse.changeAnimation("mouseanime2");
 }


}
