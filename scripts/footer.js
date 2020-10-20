const face = new Image();
face.src = '../images/blm_face.png';
let message1 = "Hold 'Shift' to run!";
let message2 = "Also, go right!"

function updateFooter() {
    ctxFooter.font = "18px Arial";
    ctxFooter.fillText(message1, 60, 20);
    ctxFooter.fillText(message2, 60, 40);
    ctxFooter.drawImage(face, 0, 0, 50, 50);

};