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

}

window.addEventListener("mousedown", function (event) {

})

window.addEventListener("mouseup", function (event) {
    
})

function animate(timeStamp) {

}
