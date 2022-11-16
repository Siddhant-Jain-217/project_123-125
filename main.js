function setup() {
 video = createCapture(VIDEO);
 video.size(550, 500);
 canvas = createCanvas(550, 550);
 canvas.position(560, 100);

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
 if(results.length > 0){
  console.log(results);
 noseX = results[0].pose.nose.x;
 noseY = results[0].pose.nose.y;
 console.log("noseX = " + noseX +" noseY = " + noseY);
 leftWristx = results[0].pose.leftWrist.x;
 difference = floor(leftWristx - rightWristx);
 rightWristx = results[0].pose.rightWrist.x;

 console.log("leftWristX = " + leftWristx + " rightWristX = "+ rightWristx + " difference = " + difference);
 }
 
}

function modelLoaded() {
 console.log('PoseNet is Initialized!');
}

function draw() {
 background('#808080');
 stroke('#F90093');
 textSize(difference);
 text("TEXT", noseX, noseY);
 document.getElementById("size_text").innerHTML = "Size of the text will be = " + difference + "px";
}
noseX = 0;
noseY=0;
difference = 0;
rightWristx = 0;
leftWristx = 0;
