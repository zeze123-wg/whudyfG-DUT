objectDetector232323 = "";
imgidki = "";
a_ray = [];
dp = false;



function preload() {

  imgidki = loadImage("download.jpg");
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  objectDetector = ml5.objectDetector("cocossd", modals);
  document.getElementById("status").innerHTML = "status:" + "loading";
}

function modals() {
  console.log("mowdjqwiu load3ewad")
  
  dp = true;
  objectDetector.detect(video, good);
}

function good(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  a_ray = results;
}

function draw() {
  image(video, 0, 0, 640, 420);

  if (dp == true) {
    objectDetector.detect(video, good);
    for (var i = 0; i < a_ray.length; i++) {
      document.getElementById("status").innerHTML = "Status : Object Detected";
      document.getElementById("ohhh").innerHTML = "objects identified:" + a_ray.length;
      fill(255, 35, 56);
      percent = floor(a_ray[i].confidence * 100);
      text( a_ray[i].label + " " + percent + "%", a_ray[i].x + 15,  a_ray[i].y + 15);
      noFill();
      stroke(255, 44, 63);
      rect( a_ray[i].x, a_ray[i].y,  a_ray[i].width,  a_ray[i].height);
    }
  }
}