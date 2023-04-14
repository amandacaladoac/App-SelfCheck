var map;
var targetLat = -8.05229;
var targetLng = -34.88519;
var targetRadius = 100; // em metros
var checkInBtn = document.getElementById('check-in-btn');

function success(pos){
  console.log(pos.coords.latitude, pos.coords.longitude);

  if (map === undefined) {
    map = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 22);
    // Adiciona uma camada do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  } else {
    map.setView([pos.coords.latitude, pos.coords.longitude], 22);
  }

  L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
    .bindPopup('Eu estou aqui!')
    .openPopup();

  // Calcula a distância entre a localização do usuário e a localização permitida
  var distance = map.distance([pos.coords.latitude, pos.coords.longitude], [targetLat, targetLng]);

  // Habilita ou desabilita o botão com base na distância
  checkInBtn.disabled = (distance > targetRadius);
  checkInBtn.style.backgroundColor = distance > targetRadius ? "#A1A2A6" : "initial";
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
    alert('Check-in realizado com sucesso!');
  } else {
    alert('Você está fora da área permitida!');
  }
};

checkInBtn.addEventListener('click', checkInBtnClick);
