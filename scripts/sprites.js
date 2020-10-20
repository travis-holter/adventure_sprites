const playerSprite = new Image();
playerSprite.src = './images/blackmage_m.png';
const player = {
    x: 300,
    y: 300,
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
    talked: false,
    x: 500,
    y: 400,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 6,
    moving: false,
    sprite: darkKnightSprite,
};
const darthVaderSprite = new Image();
darthVaderSprite.src = './images/darthvader.png';
const darthVader = {
    talked: false,
    x: 120,
    y: 310,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 1,
    speed: 6,
    moving: false,
    sprite: darthVaderSprite,
};
const bigRockSprite = new Image();
bigRockSprite.src = './images/dumb.png';
const bigRock = {
    x: 0,
    y: 0,
    width: 210,
    height: 210,
    frameX: 0,
    frameY: 0,
    speed: 8,
    moving: false,
    sprite: bigRockSprite,
};
// This npcs declaration sets the initial state for the beginning of the game. The animation loop and story logic handles everything else. 
npcs = [bigRock];
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
// Collision detection uses the minkowski sum
function collision (first, second){
    const w = (first.width + second.width) / 2;
    const h = (first.height + second.height) / 2;
    const dx = Math.abs(first.x - second.x);
    const dy = Math.abs(first.y - second.y);
    if (dx <= w && dy <= h){
        const wy = w * (first.y - second.y);
        const hx = h * (first.x - second.x);
        if (wy > hx){
            if (wy > -hx){
                stopUp = true;
                console.log('collision: up');
            }else{
                stopRight = true;
                console.log('collision: right');
            }
        }else{
            if (wy > -hx){
                stopLeft = true;
                console.log('collision: left');
            } else {
                stopDown = true;
                console.log('collision: down');
            };
        };
    }else{
        stopUp = false;
        stopRight = false;
        stopDown = false;
        stopLeft = false;
    };
};