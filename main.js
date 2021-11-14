function preload()
{}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(100,300);
    video = createCapture(VIDEO);
    video.hide(); 
}
function draw()
{
    image(video,0,0,400,400);
    ellipse(200,200,200,400)
}

function take_snapshot()
{
    save("student_name.png");
}