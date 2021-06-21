dog_cat = ""
status = ""
objects = []
percentage = ""
function preload(){
    dog_cat = loadImage("dog_cat.jpg")
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded)
document.getElementById("status").innerHTML = "Status: Detecting Objects..."
}
function modelLoaded(){
    console.log("Model Loaded.")
status = true;
objectDetector.detect(dog_cat, gotResults)
}
function gotResults(error, results){
 if(error){
     console.log(error)
 }
 else{
     console.log(results)
     objects = results;
 }
}
function draw(){
    image(dog_cat, 0, 0, 640, 420)
    if(status != ""){
        for(i = 0; i< objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected."
            fill("#8B0000")
            percentage = floor(objects[i].confidence*100)
            text(objects[i].label + " : " + percentage + "%", objects[i].x + 15, objects[i].y + 15)
            noFill()
            stroke("#8B0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            console.log(percentage)
        }
 /*       fill("#8B0000")
        text("Dog", 152, 104)
        noFill()
        stroke("#8B0000")
        rect(30, 54, 550, 350)
        text("Cat", 400, 100)
        rect(290, 74, 270, 320)
        */
    }
}
