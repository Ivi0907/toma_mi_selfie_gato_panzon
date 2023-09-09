var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start(){
    Textbox.innerHTML = "";
    recognition.start();
    console.log("Te escucho");
    
}

recognition.onresult = function(event) {
    console.log(event.results[0][0].transcript)

    var magica = event.results[0][0].transcript
    Textbox.innerHTML = magica;
    
    if(magica == "Gato panzón"){
        speak();
    }

    speak();

}
 
function speak() {
    var voz = window.speechSynthesis;
    var awa = Textbox.innerHTML;

    speak_data = "tomando tu selfie en 5 segundos gato panzón"

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    voz.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_selfie();
        save()
    },5000)
    
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    heigth: 50,
    image_format: 'jpeg',
    jpeg_quality: 90
})

function take_selfie() {
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">'
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}

