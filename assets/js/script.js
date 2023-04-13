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



 document.getElementById("icon-forum").onclick = function () {
  location.href = "forum.html";
};

document.getElementById("icon-pontos").onclick = function () {
  location.href = "pontos-aluno.html";
};

document.getElementById("icon-checkin").onclick = function () {
  location.href = "checkin.html";
};

document.getElementById("icon-perfil").onclick = function () {
  location.href = "perfil.html";
};

document.getElementById("icon-sair").onclick = function () {
  location.href = "index.html";
};
