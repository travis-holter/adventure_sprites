const face = new Image();
face.src = './images/blm_face.png';
let message = "Hold 'Shift' to run!";

function updateFooter() {
    ctxFooter.font = "18px Arial";
    ctxFooter.fillText(message, 60, 25);
    ctxFooter.drawImage(face, 0, 0, 50, 50);

};