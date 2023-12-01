let gamePhase = "waiting"
let lastTimeStamp;

let heroX;
let heroY;
let screenOffset;

let platforms = [];
let sticks = [];

let score = 0;

const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const canvasWidth = 375;
const canvasHeight = 375;
const platformHeight = 100;

const scoreElement = document.getElementById("score")
const restartButtonElement = document.getElementById("restart")

resetGame()



function resetGame() {
    gamePhase = "wating";
    lastTimeStamp = undefined

    platforms = [{ x: 50, w: 50}];

    generatePlatform();
    generatePlatform();
    generatePlatform();
    generatePlatform();
   
    //initializing hero position
    heroX = platforms[0].x + platforms[0].w - 30;
    heroY = 0;

    //screen will stay centered with the hero
    screenOffset = 0;

    sticks = [{x: platforms[0].x + platforms[0].w, length: 0, rotation: 0}];

    score = 0;

    restartButtonElement.style.display = "none";
    scoreElement.innerText = score;

    draw()
}

function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
}

function generatePlatform() {
    const minimumGap = 40;
    const maximumGap = 200;
    const minimumWidth = 20;
    const maximumWidth = 100;

    const lastPlatform = platforms[platforms.length -1];
    let furthestX = lastPlatform.x + lastPlatform.w;

    const x = 
        furthestX + 
        maximumGap +
        Math.floor(Math.random() * (maximumGap - minimumGap));
    
    const w = 
        minimumWidth + Math.floor(Math.random() * (maximumWidth - minimumWidth))

    platforms.push({x,w})
}

window.addEventListener("mousedown", function (event) {

})

window.addEventListener("mouseup", function (event) {
    
})

function animate(timeStamp) {

}
