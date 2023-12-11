var Pic = document.getElementById("webcam");
var score;

function start(){
    Webcam.attach(Pic);
    score = Math.random();
    if(score > 0.1){
        document.getElementById("scoredisplay").innerHTML = "You look bad";
        speak();
    }

    if(score > 0.3){
        document.getElementById("scoredisplay").innerHTML = "You look not that bad";
        speak();
    }

    if(score > 0.6){
        document.getElementById("scoredisplay").innerHTML = "You look ok";
        speak();
    }
    if(score > 0.8){
        document.getElementById("scoredisplay").innerHTML = "You look good";
        speak();
    }

    if(score > 0.9){
        document.getElementById("scoredisplay").innerHTML = "You look GREAT!!!";
        speak();
    }
}

function speak(){
var synth = window.speechSynthesis;

speak_data = document.getElementById("scoredisplay").value;

Utter_this = new SpeechSynthesisUtterance(speak_data);

synth.speak(Utter_this);
}

function back(){
    window.location = "index1.html";
}

Webcam.set({
width: 380,
height:375,
image_format:"png",
png_Quality: 90,
});

//<!--forlater-->
//function take_snapshot(){

//    Webcam.snap(function(data_uri){
//    document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="Picture1">';
//    }); 
//}