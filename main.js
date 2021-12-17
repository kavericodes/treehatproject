noseX = 0;
noseY = 0;

function preload(){
    tree = loadImage("https://i.postimg.cc/KjTVq0Pr/christmas-tree-hat-4-4984-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-85;
        noseY = results[0].pose.nose.y-230;
        console.log("nose x = " + noseX);
        console.log("nose y = "+ noseY);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video,0,0,400,400);
    image(tree,noseX,noseY,160,170);
}

function take_snapshot(){
    save("christmastree.png");
}

