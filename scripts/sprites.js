const playerSprite = new Image();
playerSprite.src = './images/blackmage_m.png';
const player = {
    x: 200,
    y: 200,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 8,
    moving: false,
};

const darkKnightSprite = new Image();
darkKnightSprite.src = './images/darkknight.png';
const darkKnight = {
    x: 500,
    y: 400,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 6,
    moving: false,
    sprite: darkKnightSprite,
}

function movePlayer() {
    if (keys["Shift"]) {
        player.speed = 12;
    }
    if (!keys["Shift"]) {
        player.speed = 8;
    }
    if (keys['ArrowUp'] && player.y > bg.top && !stopUp) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys['ArrowRight'] && player.x < (bg.right - player.width) && !stopRight ) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    if (keys['ArrowDown'] && player.y < (bg.bottom - player.height) && !stopDown) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys['ArrowLeft'] && player.x > bg.left && !stopLeft) {
        player.x -= player.speed
        player.frameY = 1;
        player.moving = true;
    }
};

function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++;
    else player.frameX = 0;
};
var yCollision;
var xCollision;
var rightCollision;
var leftCollision;
var topCollision;
var bottomCollision;
function collision(first, second) {
    if (first.x + first.width >= second.x && first.x <= second.x){
        rightCollision = true;
    }else{
        rightCollision = false;
    }
    if(first.x <= second.x + second.width && first.x + first.height >= second.x + second.height){
        leftCollision = true;
    }else{
        leftCollision = false;
    }
    if(rightCollision || leftCollision){
        xCollision = true;
    }else{
        xCollision = false;
    }
    if(first.y <= second.y + second.height && first.y + first.height >= second.y + second.height){
        topCollision = true;
    }else{
        topCollision = false;
    }
    if(first.y + first.height >= second.y && first.y <= second.y){
        bottomCollision = true;
    }else{
        bottomCollision = false;
    }
    if(topCollision || bottomCollision){
        yCollision = true;
    }else{
        yCollision = false;
    }
    if(yCollision && xCollision){
        if (rightCollision) { stopRight = true };
        if (leftCollision) {stopLeft = true};
        if (topCollision) {stopUp = true};
        if (bottomCollision) { stopDown = true };
        return true;
    }else{
        stopRight = false;
        stopLeft = false;
        stopUp = false;
        stopDown = false;
        return false;
    }
};