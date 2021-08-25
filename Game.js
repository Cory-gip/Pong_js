// select canvas element
const canvas = document.getElementById("pong");

// getContext of canvas = methods and properties to draw and do a lot of things to the canvas
const ctx = canvas.getContext("2d");

// load sounds
let hit = new Audio();
let wall = new Audio();
let userScore = new Audio();
let comScore = new Audio();

hit.src = "sounds/hit.mp3";
wall.src = "sounds/wall.mp3";
comScore.src = "sounds/comScore.mp3";
userScore.src = "sounds/userScore.mp3";

// Ball object
let ball = new Ball(canvas.width/2, canvas.height/2, 10, 5, 5, 7, "WHITE");

// User Paddle
let user = new User(0, (canvas.height - 100) / 2, 10, 100, 0, "WHITE");

// COM Paddle
let com = new Computer(canvas.width - 10, (canvas.height - 100) / 2, 10, 100, 0, "WHITE");

// NET
let net = new Net((canvas.width - 2) / 2, 0, 10, 2, "WHITE");

// listening to the mouse
canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt) {
  let rect = canvas.getBoundingClientRect();

  user.y = evt.clientY - rect.top - user.height / 2;
}

// draw text
function drawText(text, x, y) {
  ctx.fillStyle = "#FFF";
  ctx.font = "75px fantasy";
  ctx.fillText(text, x, y);
}

function drawScreen(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
// number of frames per second
let framePerSecond = 50;

//call the game function 50 times every 1 Sec
let loop = setInterval(game, 1000 / framePerSecond);

function game() {
  Pong.render();
  Pong.update();
}
