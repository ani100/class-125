nose_x = 0 ;
nose_y = 0 ;
rightwrist_x = 0 ; 
leftwrist_x = 0 ;
distance = 0 ; 

function preload() {

}

function setup() {
 
    canvas = createCanvas(540,480);
    canvas.position(850,170);
    canvas.background("aqua");
    video = createCapture(495,475);
    video.position(100,170);
    tm = ml5.poseNet(video,modelloaded);
    tm.on("pose",getresults);
}

function modelloaded() {
    console.log("The POSENET is initialised");
}

function draw() {

    background("aqua");
    textSize(distance);
    stroke("red");
    fill("yellow");
    text("ANISHKA",20,300);
    document.getElementById("px").innerHTML = Math.floor(distance) ; 
   
      
}

function getresults(results,error) {
    
    if (results)  {

        if (results.length > 0 ) {
            
            console.log(results);
            nose_x = results[0].pose.nose.x-275 ;
            nose_y = results[0].pose.nose.y-200 ;
            rightwrist_x = results[0].pose.rightWrist.x ;
            leftwrist_x = results[0].pose.leftWrist.x ; 
            distance = leftwrist_x - rightwrist_x ;

        }
        }

        else {
            console.error(error);
        }
    
}

   


