function logar() {


   var login = document.getElementById('login').value;
   var senha = document.getElementById('senha').value;


   if (login == "admin" && senha == "admin") {
      alert('sucesso');
      location.href = "checkin.html";
   } else {
      alert('Usuario ou senha incorretos');
   }

}

function newpage(){
   location.href = "login.html";
}

/*camera check-in*/
function getUserMedia(constraints) {
   if (navigator.mediaDevices) {
     return navigator.mediaDevices.getUserMedia(constraints);
   }
     
   var legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
     navigator.mozGetUserMedia || navigator.msGetUserMedia;
     
   if (legacyApi) {
     return new Promise(function (resolve, reject) {
       legacyApi.bind(navigator)(constraints, resolve, reject);
     });
   }
 }
 
 function getStream (type) {
   if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
     !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
     alert('User Media API not supported.');
     return;
   }
 
   var constraints = { video: {width: 500,height:915,facingMode: "environment" } };
   
   getUserMedia(constraints)
     .then(function (stream) {
       var mediaControl = document.querySelector(type);
       
       if ('srcObject' in mediaControl) {
         mediaControl.srcObject = stream;
       } else if (navigator.mozGetUserMedia) {
         mediaControl.mozSrcObject = stream;
       } else {
         mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
       }
       
       mediaControl.play();
     })
     .catch(function (err) {
       alert('Error: ' + err);
     });
 }