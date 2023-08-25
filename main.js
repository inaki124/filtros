nose_x=0; 

nose_y=0; 

function setup() {
    canvas=createCanvas(400, 250);
    canvas.center();
  
    video=createCapture(VIDEO);
    video.size(400, 250);
    video.hide();
  
    poseNet=ml5.poseNet(video, modelLoaded);
  
    poseNet.on('pose',gotPoses);
  }
  function modelLoaded() {
    console.log('poseNet esta inicializado');
  }
  function preload() {
    bigote=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  }
  function draw() {
   image(video,0,0,400,250);
  }
  function click() {
    save('myfilterimage.png');
  }
  function gotPoses(results) {
    if (results.length>0) {
    console.log(results);
    console.log('nose x= '+results[0].pose.nose.x);
    console.log('nose y= '+results[0].pose.nose.y);
    console.log('nose_x= '+nose_x); 
    console.log('nose_y= '+nose_y); 
    }
  }