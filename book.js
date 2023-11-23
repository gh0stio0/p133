status1="";
img="";
objects=[];
function preload(){
    img=loadImage('coding3.jpeg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
     console.log("Model is loaded?");
     status1=true;
     objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects=results;
    }
   
}

function draw(){
    if (status1 != ""){
        image(img,0,0,640,420);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status: Object is Detected"
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
        document.getElementById("objects_detected").innerHTML="There is 1 big object in the image from which cocossd model has detected "+i+" object(s)."
    }
   
}