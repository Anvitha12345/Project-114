function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){

}
function take_snapshort(){
    save('snapshort.png');
}