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
        movePlayer();
        handlePlayerFrame();
        updateBackground();
        updateFooter();
    }
}

start(15);