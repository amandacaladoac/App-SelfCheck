function logar(){

 
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
     

     if(login == "admin@gmail.com" && senha == "admin"){
        alert('sucesso');
        location.href ="checkin.html";
     }else{
        alert('Usuario ou senha incorretos');
     }

}

/*camera check-in*/
 
function startVideoFromCamera(){

   const specs = {video:{width:395,height: 1000}}

   navigator.mediaDevices.getUserMedia(specs).then(stream=>{

    const videoElement = document.querySelector("#camera")
    videoElement.srcObject = stream

   }) .catch(error=>{console.log(error)})

}

window.addEventListener("DOMContentLoaded", startVideoFromCamera)

/* Pop-pup Check In*/

var botaoPopup = document.getElementById("botao-popup");
var popup = document.getElementById("popup");
var fecharPopup = document.getElementById("fechar-popup");

botaoPopup.addEventListener("click", function() {
  popup.style.display = "block";
});

fecharPopup.addEventListener("click", function() {
  popup.style.display = "none";
});