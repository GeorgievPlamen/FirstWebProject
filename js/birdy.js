//Board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeigh = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; 
let velocityY = 0; 
let gravity = 0.4;

let gameOver = false;

let score = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
  
    //Load img
    birdImg = new Image();
    birdImg.src = "../img/FlappyBird/flappybird.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "../img/FlappyBird/toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "../img/FlappyBird/bottompipe.png";

    requestAnimationFrame(Update);
    setInterval(placePipes, 1500);
    document.addEventListener("keydown", moveBird);
}

function Update() 
{
    requestAnimationFrame(Update);
    if(gameOver){
        return;
    }
    context.clearRect(0, 0, boardWidth, boardHeight);

    //bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY,0);
    context.drawImage(birdImg, bird.x , bird.y, bird.width, bird.height);

    if (bird.y > board.height + 50) {
        gameOver = true;
    }

    //pipes
    for (let i=0;i < pipeArray.length; i++){
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)){
            gameOver = true;
        }
    }

    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift();
    }

    context.fillStyle = "white";
    context.font = "45px sans-serif";
    context.fillText(score, 5, 45);

    if(gameOver){
        context.fillText("GAME OVER", 5 , 90);
        context.font = "30px sans-serif";
        context.fillText("Press space or ", 5 , 140);
        context.fillText("Up Arrow to jump", 5 , 170);
        context.fillText("and start again.", 5 , 200);

    }
}

function placePipes() {
    if (gameOver){
        return;
    }
    let randomPipeY = pipeY - pipeHeigh/4 - Math.random()*(pipeHeigh/2);
    let openingSpace = board.height/4;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeigh,
        passed : false
    }

    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeigh + openingSpace,
        width : pipeWidth,
        height : pipeHeigh,
        passed : false
    }
    pipeArray.push(bottomPipe);
}

function moveBird(e) {
    if (e.code == "Space" || e.code == "ArrowUp"){
        velocityY = -6;
    }

    if(gameOver)
    {
        bird.y = birdY;
        pipeArray = [];
        score = 0;
        gameOver = false;
    }
}

function detectCollision(a, b){
    return a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y;
}