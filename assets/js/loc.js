var map;
var targetLat = -8.0605584;
var targetLng = -34.8748852;
var targetRadius = 50; // em metros
var checkInBtn = document.getElementById('check-in-btn');

// Declara uma variável global para o marcador
var marker;

function success(pos){
  console.log(pos.coords.latitude, pos.coords.longitude);

  if (map === undefined) {
    map = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 22);
    // Adiciona uma camada do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Adiciona o marcador ao mapa
    marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
      .bindPopup('Eu estou aqui!')
      .openPopup();
  } else {
    // Atualiza a posição do marcador
    marker.setLatLng([pos.coords.latitude, pos.coords.longitude]);
  }

  // Calcula a distância entre a localização do usuário e a localização permitida
  var distance = map.distance([pos.coords.latitude, pos.coords.longitude], [targetLat, targetLng]);


  // Habilita ou desabilita o botão com base na distância
  checkInBtn.disabled = (distance > targetRadius);
  checkInBtn.style.backgroundColor = distance > targetRadius ? "#A1A2A6" : distance <= targetRadius ? "#F7941E" : "initial";
};

function error(err){
  console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 5000
});

var checkInBtnClick = function() {
  var pos = map.getCenter();
  var distance = map.distance([pos.lat, pos.lng], [targetLat, targetLng]);

  if (distance <= targetRadius) {
    // Exibe o popup de check-in concluído
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Fecha o popup ao clicar no botão "Ok"
    var fecharPopupBtn = document.getElementById('fechar-popup');
    fecharPopupBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  } else {
    alert('Você está fora da área permitida!');
  }
};


checkInBtn.addEventListener('click', checkInBtnClick);


var checkInBtn = document.getElementById('check-in-btn');
var popup = document.getElementById('popup');
var closeBtn = document.getElementById('fechar-popup');

function exibirPopup() {
  popup.style.display = 'block';
}

function fecharPopup() {
  popup.style.display = 'none';
}

checkInBtn.addEventListener('click', exibirPopup);
closeBtn.addEventListener('click', fecharPopup);
