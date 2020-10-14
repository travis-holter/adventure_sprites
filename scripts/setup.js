// Setup

const bottom = document.getElementById('bottom');
const ctxBottom = bottom.getContext('2d');
bottom.width = 800;
bottom.height = 500;

const middle = document.getElementById('middle');
const ctxMiddle = middle.getContext('2d');
middle.width = 800;
middle.height = 500;

const upper = document.getElementById('upper');
const ctxUpper = upper.getContext('2d');
upper.width = 800;
upper.height = 500;

const footer = document.getElementById('footer');
const ctxFooter = footer.getContext('2d');
footer.width = 800;
footer.height = 50;

const keys = [];

// const player = new Player();

// const player = {
//     x: 200,
//     y: 200,
//     width: 32,
//     height: 48,
//     frameX: 0,
//     frameY: 0,
//     speed: 8,
//     moving: false,
// };

const bg = {
    map: "background",
    top: 150,
    bottom: 500,
    left: 0,
    right:800,
};
// const playerSprite = new Image();
// playerSprite.src = './images/blackmage_m.png';
const background = new Image();
background.src = './images/background.png';
const face = new Image();
face.src = './images/blm_face.png';
let message = "Hold 'Shift' to run!";


// Footer functions

function updateFooter(){
    ctxFooter.font = "18px Arial";
    ctxFooter.fillText(message, 60, 25);
    ctxFooter.drawImage(face, 0, 0, 50, 50);

};


// Event listeners

window.addEventListener("keydown", function(e){
    keys[e.key] = true;
    console.log(keys);
    if (keys["ArrowUp"] || keys["ArrowRight"] || keys["ArrowDown"] || keys["ArrowLeft"]){
        player.moving = true;
    }
    // console.log(player.y);
});

window.addEventListener("keyup", function (e) {
    delete keys[e.key];
    player.moving = false;
});


// Player sprite functions

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctxMiddle.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
};

// function movePlayer() {
//     if (keys["Shift"]) {
//         player.speed = 12;
//     }
//     if (!keys["Shift"]) {
//         player.speed = 8;
//     }
//     if (keys['ArrowUp'] && player.y > bg.top) {
//         player.y -= player.speed;
//         player.frameY = 3;
//         player.moving = true;
//     }
//     if (keys['ArrowRight'] && player.x < (bg.right - player.width)) {
//         player.x += player.speed;
//         player.frameY = 2;
//         player.moving = true;
//     }
//     if (keys['ArrowDown'] && player.y < (bg.bottom - player.height)) {
//         player.y += player.speed;
//         player.frameY = 0;
//         player.moving = true;
//     }
//     if (keys['ArrowLeft'] && player.x > bg.left) {
//         player.x -= player.speed
//         player.frameY = 1;
//         player.moving = true;
//     }
// };

// function handlePlayerFrame() {
//     if (player.frameX < 3 && player.moving) player.frameX++;
//     else player.frameX = 0;
// };

// Background functions

function updateBackground(){
    if (player.x >= 799 - player.width && bg.map === 'background'){
        background.src = './images/firecave2.png';
        bg.map = 'firecave2'
        bg.top = 300;
        player.y = 400;
        player.x = 10;
    }
    if (player.x <= 1 && bg.map === 'firecave2') {
        background.src = './images/background.png';
        bg.map = 'background'
        bg.top = 150;
        player.y = 400;
        player.x = 790 - player.width;
    }
};

// Animation loop functions

// let fps, fpsInterval, startTime, now, then, elapsed
// function start(fps){
//     fpsInterval = 1000/fps;
//     then = Date.now();
//     startTime = then;
//     animate();
// };

// function animate(){
//     requestAnimationFrame(animate);
//     now = Date.now();
//     elapsed = now - then;
//     if (elapsed > fpsInterval){
//         then = now - (elapsed % fpsInterval);
//         ctxBottom.clearRect(0, 0, bottom.width, bottom.height);
//         ctxMiddle.clearRect(0, 0, middle.width, middle.height);
//         ctxTop.clearRect(0, 0, top.width, top.height);
//         ctxFooter.clearRect(0, 0, footer.width, footer.height);
//         ctxBottom.drawImage(background, 0, 0, middle.width, middle.height);
//         drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
//         movePlayer();
//         handlePlayerFrame();
//         updateBackground();
//         updateFooter();
//     }
// }

// start(15);


// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
//     movePlayer();
//     handlePlayerFrame();
//     requestAnimationFrame(animate);
// }
// animate();