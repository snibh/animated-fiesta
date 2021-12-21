objectDetector = "";
objects = [];
status1 = "";

function preload() {

video = createVideo("video.mp4");


}
function setup() {

canvas = createCanvas(450,350);
canvas.center();
video.hide();

}
function start() {

objectDetector = ml5.objectDetector('cocossd',modelloaded);
console.log("start");

}

function draw() {

image(video,0,0,450,350);
if(status1 != "")
{
 objectDetector.detect(video,gotResult);
 for ( i = 0; i < objects.length; i++) {    
 document.getElementById("status").innerHTML= "Status:Objects Detected";
 document.getElementById("no of objects").innerHTML= "No of Objects =" + objects.length;   

 fill("RED");
 percent = floor(objects[i].confidence * 100);
 text(objects[i].label + "" + percent + "%",objects[i].x + 15,objects[i].y + 15);
 noFill();
 stroke("RED");
 rect(objects[i].x,objects[i].y,objects[i].width,objects.height);
 }

}

console.log("draw");

}
function modelloaded() {

console.log("cocossd");
status1 = true;
video.volume(0);
video.speed(1);

}
function gotResult(error,results){

if(error)
{
 console.log(error);
}
console.log(results);
objects = results;
}