var SpeechRecongnition = window.webkitSpeechRecognition;

var recognition = new SpeechRecongnition();

var text_box = document.getElementById("text_box");

function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    text_box.innerHTML = Content;
    console.log(Content);
    if(Content == "Take my Selfie"){
        console.log("Taking selfie ---");
        speak();
 }

}

function speak(){
   var synth = window.speechSynthesis;
   var speak_data = "Taking your Selfie in 5 seconds";
   var utter_this = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utter_this);
   Webcam.attach(camera);

   setTimeout(function(){
       img_id = "Selfie1";
       img_id2 = "Selfie2";
       img_id3 = "Selfie3";

       take_selfie();
   }, 5000);
 }

 camera = document.getElementById("camera");

Webcam.set({
    width: 350,
    height:350,
    image_format: 'png',
    png_quality:90
});

function take_selfie()
{
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id == "Selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>';
        }
        if(img_id2 == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>';
            }
            if(img_id == "selfie3"){
                document.getElementById("result3").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>';
                }
});
}