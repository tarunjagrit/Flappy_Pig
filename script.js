console.log("script loaded");
let bird = document.getElementById("bird");
let game= document.getElementById("game");  
let posY = 50;
let velocityY = 0;
let gravity = 0.8;
let pipeTop = document.getElementById("Tpipe");
let pipeBottom = document.getElementById("Bpipe");
let pipePosX = 750;
let pipespeed = 5; 
let gap = 180;
let gapY = Math.floor(Math.random() * (600 - gap));
pipeTop.style.height = gapY + "px";
pipeBottom.style.height = 600 - gapY - gap  + "px";

let pipeLoop = setInterval(function() {
    pipePosX -= pipespeed;
    if (pipePosX <=-60) {
        pipePosX = 800;
        gapY = Math.floor(Math.random() * (600 - gap));
        pipeTop.style.height = gapY + "px";
        pipeBottom.style.height = 600 - gapY - gap  + "px";
    }
    //pipes are moving to the left, so we need to update their position
    pipeTop.style.left = pipePosX + "px";
    pipeBottom.style.left = pipePosX + "px";

    //collision detection
    if(
        pipePosX < 160 &&
        pipePosX + 60 > 100 &&
        (posY < gapY || posY + 60 > gapY + gap)
    ){
   
    clearInterval(pipeLoop);
    clearInterval(birdLoop);
    document.getElementById("restart").style.display = "block";
    alert("GAME OVER");
    }
}, 20);

let birdLoop = setInterval(function() {
    velocityY += gravity;
    posY += velocityY;

    if (posY <=0) {
        posY = 0;
        velocityY = 0;
    }

    if (posY > 500) {
    posY = 500;
    velocityY = 0; 
    }
    bird.style.top = posY + "px";
}, 20);
    

game.addEventListener("click", function() {
    velocityY = -10;
    //posY += velocityY;
    //bird.style.top = posY + "px";

});
document.getElementById("restart").addEventListener("click", function() {
    location.reload();
});