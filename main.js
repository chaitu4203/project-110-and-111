navigator.mediaDevices.getUserMedia({video:true});

Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
document.getElementById("take_snapshot").onclick=function(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
    });
}

prediction_1="";
prediction_2="";

function speak(){
    var speech=window.speechSynthesis;
    speak_data1="The first prediction is"+prediction_1;
    speak_data2="And the second prediction is"+prediction_2;
    var utterance=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterance);
}
document.getElementById("clap").onclick=function(){
    alert("Great try the other actions as well");

}
document.getElementById("thumbs1").onclick=function(){
    alert("Great try the other actions as well");
}
document.getElementById("thumbs2").onclick=function(){
    alert("Great try the other actions as well")
}