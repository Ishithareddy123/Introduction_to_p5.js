function preload(){

}

function setup(){
    canvas= createCanvas(640,450);
    canvas.position(150,250);
    video=createCapture(VIDEO);
    video.hide();
}
tint_colour="";
function draw(){
    image(video,0,0,640,450);
    tint(tint_colour);
}
function apply_filter(){
    tint_colour=document.getElementById("colour_name").value;
}
function take_snapshot(){
    save("filter.png");
}
