class Player{
    constructor(){
    this.x = 200;
    this.y = 200;
    this.width = 32;
    this.height = 48;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 8;
    this.moving = false;
    };

    movePlayer() {
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

    handlePlayerFrame() {
        if (player.frameX < 3 && player.moving) player.frameX++;
        else player.frameX = 0;
    };

};

export default Player;