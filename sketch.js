var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(490,580,200,30)
    block3.shapeColor = "green";

    block4 = createSprite(700,580,200,30)
    block4.shapeColor = "pink"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = -5
    ball.velocityY = 8

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
       ball.velocityX = 0
       ball.velocityY = 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green"
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bonceOff(block4)){
        ball.shapeColor = "pink"
    }
    drawSprites();
}
