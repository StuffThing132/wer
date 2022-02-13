rightWristX = "";
rightWristY = "";
scorerightwrist = "";
game_status = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.size(600,300);
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }

}

function modelLoaded(){
	console.log('Model Loaded!');
}

function draw() {
	if(game_status == "start")
	game()

}
function startgame()
{
	game_status = "start";
	document.getElementById("status").innerHTML = "Game Is Loaded";
}






