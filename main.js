song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";

function preload(){
    song1=loadSound("qwertyuiop.mp3");
    song2=loadSound("asdfghjkl.mp3");

}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('model loded !!')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video,0,0,600,400);
}
function play() {
    song2.stop();
    song1.play();
    song1.setVolume(0.5);
    song1.rate(1);
}
function play2() {
    song1.stop();
    song2.play();
    song2.setVolume(0.5);
    song2.rate(1);
}

function stop(){
    song1.stop();
    song2.stop();
}
