const bg = {
    map: "background",
    top: 150,
    bottom: 500,
    left: 0,
    right: 800,
};

const background = new Image();
background.src = './images/background.png';

function updateBackground() {
    if (player.x >= 799 - player.width && bg.map === 'background') {
        background.src = './images/firecave2.png';
        bg.map = 'firecave2'
        bg.top = 300;
        player.y = 400;
        player.x = 10;
        npcs = [darkKnight];
    }
    if (player.x <= 1 && bg.map === 'firecave2') {
        background.src = './images/background.png';
        bg.map = 'background'
        bg.top = 150;
        player.y = 400;
        player.x = 790 - player.width;
        if(checkPoint1){
            npcs = [darthVader];
        }else{
            npcs = [];
        }
    }
};