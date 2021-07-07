const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    backgroundImg = loadImage("sunrise6.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(backgroundImg)
    noStroke();
    fill("black");
    text("Time: ", + time, width, - 300, 50);


    Engine.update(engine);


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON = await responce.json();
    var datatime = responceJSON.datatime;

    hour = datatime.slice(11,13);


    if(hour>=04 && hour<=06 ){
        bg = "sunrise1.png";
     }
     else if(hour>=06 && hour<=08 ){
         bg = "sunrise2.png";
     }
     else if(hour>=23 && hour<=0 ){
         bg = "sunset10.png";
     }
     else if(hour==0 && hour<=03){
         bg = "sunset11.png";
     }
     else{
         bg = "sunset12.png";
     }


    backgroundImg = loadImage(bg);

}
