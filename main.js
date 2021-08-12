function setup()
{
    video = createCapture(VIDEO);
    video.size(600,500);
    canvas = createCanvas(600,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background('#fffa75');
}
function model_loaded()
{
    console.log("Model Loaded!");
}
function gotPoses()
{
    if(results.length>0)
    {
        console.log(results);
    }
}