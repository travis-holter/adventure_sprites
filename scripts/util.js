function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctxMiddle.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
};

window.addEventListener("keydown", function (e) {
    keys[e.key] = true;
    console.log(keys);
    if (keys["ArrowUp"] || keys["ArrowRight"] || keys["ArrowDown"] || keys["ArrowLeft"]) {
        player.moving = true;
    }
    npcs.forEach(npc => {
        let playerLongest;
        if(player.width > player.height){
            playerLongest = player.width;
        }else{
            playerLongest = player.height;
        }
        let npcLongest;
        if(npc.width > npc.height){
            npcLongest = npc.width;
        }else{
            npcLongest = npc.height;
        }
        if(Math.abs(player.x - npc.x) <= npcLongest + playerLongest + 5 &&
            keys[" "]){
                npc.talked = true;
            }
    })
});

window.addEventListener("keyup", function (e) {
    delete keys[e.key];
    player.moving = false;
});

let fps, fpsInterval, startTime, now, then, elapsed
function start(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
};

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctxBottom.clearRect(0, 0, bottom.width, bottom.height);
        ctxMiddle.clearRect(0, 0, middle.width, middle.height);
        ctxUpper.clearRect(0, 0, upper.width, upper.height);
        ctxFooter.clearRect(0, 0, footer.width, footer.height);
        ctxBottom.drawImage(background, 0, 0, middle.width, middle.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
        npcs.forEach(npc => {
            drawSprite(npc.sprite, npc.width * npc.frameX, npc.height * npc.frameY, npc.width, npc.height, npc.x, npc.y, npc.width, npc.height)
        })
        npcs.forEach(npc => {
            collision(player, npc)
        })
        movePlayer();
        handlePlayerFrame();
        updateBackground();
        updateStory();
        updateFooter();
    }
}

start(15);

// This is my original animation loop, just keeping it around for refference

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
//     movePlayer();
//     handlePlayerFrame();
//     requestAnimationFrame(animate);
// }
// animate();