// Jeff (twitter @ippsketch)
// template for saving png files from p5.js sketch using CCapture
// ffmpeg -framerate 1 -i %07d.png -vf "scale=500:-1:flags=lanczos" -loop 0 animated.gif


var capture= true;; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png',
			     name: 'handtekening10A'});

const NUM_FRAMES = 600;
const T = 1;
let speed = 1;
let xPos;
let max_x = 0;
//float angleRotate = 0.0;
 
function setup() {
    createCanvas(440, 20);
    textSize(16);
    textAlign(CENTER, CENTER); 
    xPos = -10;
    xPos_0 = -50;
    xPos_A = -100;
}

function draw() {

    if (capture && frameCount==1) capturer.start(); // start the animation capture

    // here is the sketch
    background(255)
    var t = ((frameCount-1)%NUM_FRAMES)/NUM_FRAMES
    //var x = width/3*sin(TWO_PI*t);
    //var y = width/3*cos(TWO_PI*t);
    fill(0);
    noStroke();
 
    text("1",xPos,height/2);
    text("0",xPos_0,height/2);

    // Speed 1
    xPos += speed;

    // Speed 0
    if (xPos + 10 > xPos_0 ) {
        xPos_0 += speed + .3;
    }
    else {
	xPos_0 += speed;
    }
    stroke(0);
    strokeWeight(1);
    max_x = Math.max(xPos,xPos_0, xPos_A);

    line(0,height/2+7,max_x +5,height/2+7)

    //Speed A

        //Speed A
    if (xPos > 200 ){
	if (xPos + 25> xPos_A ) {
            xPos_A += speed + .7;
	    rot_A =radians(frameCount*2);	    
	}
	else {
	    xPos_A += speed;
	    rot_A=0;
	}
    }
    else {
	xPos_A = -10;
	rot_A=0;}
    

    
  //  if (xPos + 25> xPos_A ) {
   //     xPos_A += speed + .5;/
//	rot_A =radians(frameCount*2)
	
  //  }
   // else {
//	xPos_A += speed;/
//	rot_A=0
  //  }
    
 

    // De A
    strokeWeight(1);
    stroke(0);
    push();
    translate(xPos_A, height/2);
    rotate(rot_A);
    text("A", 0, 0);
  //  line(0, 0, 150, 0);
    pop();

    if (xPos > 400){
	speed = 0;
	speed_1 =0;
	speed_A=0;
    }
    
   // if (xPos > width )  {
//	xPos = -10;
//	xPos_0 = -50;
//	xPos_A = -100;
  //  }
  
 //   angleRotate += 0.25;

    if (capture){
        capturer.capture( canvas ); // if capture is 'true', save the frame
        if (frameCount-1 == NUM_FRAMES){ //stop and save after NUM_FRAMES
            capturer.stop(); 
            capturer.save(); 
            noLoop(); 
        }
    }
}

function buttonPress()
{
    if (capture == false) {
        capture = true;
        document.getElementById("myButton").value='Saving Frames... Press Again to Cancel'; 
        frameCount = 0;
    } else {
        location.reload(); //refresh the page (starts animation over, stops saving frames)
    }
}
