function achuuu(){
    console.log("no dde que lpoder")
    investiga=true
}
investiga=false
function setup(){
    canva=createCanvas(640, 480)
    video=createCapture(VIDEO)
    video.hide()
    analixa=ml5.objectDetector("cocossd", achuuu)
}
function draw(){
    // optionaly push();
    translate(width,0);
    scale(-1, 1)
    image(video, 0, 0, 640, 480)
    if (investiga==true){
        analixa.detect(canva, hola)
    }
}
function hola(barabaraberebere, ereberebarabarab){
    if (!barabaraberebere){
        console.log(ereberebarabarab)
    }
}