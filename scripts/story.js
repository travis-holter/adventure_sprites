// checkPoint1 is talking to the Dark Knight for the first time. It should make a second NPC appear back at the starting area. 
let checkPoint1 = false;

function updateStory(){
    if (darkKnight.talked){
        checkPoint1 = true;
        darkKnight.talked = false;
    }
    if(bg.map === "firecave2" && !checkPoint1){
        message1 = "Talk to people with Space Bar";
        message2 = "";
        face.src = '../images/blm_face.png';
    }
    else if (checkPoint1){
        message1 = "You should go find Darth Vader, I hear he likes to hang out by the cliffs.";
        message2 = "";
        face.src = "../images/drk_face.png";
    }
}