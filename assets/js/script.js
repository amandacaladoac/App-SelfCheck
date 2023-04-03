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