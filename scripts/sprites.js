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
    y: 325,
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
    if (keys['ArrowUp'] && player.y > bg.top) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys['ArrowRight'] && player.x < (bg.right - player.width)) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    if (keys['ArrowDown'] && player.y < (bg.bottom - player.height)) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys['ArrowLeft'] && player.x > bg.left) {
        player.x -= player.speed
        player.frameY = 1;
        player.moving = true;
    }
};

function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++;
    else player.frameX = 0;
};
