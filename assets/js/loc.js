var map;
var targetLat = -8.052396398095212;
var targetLng = -34.88523292829168;
var targetRadius = 100; // em metros

function success(pos){
  console.log(pos.coords.latitude, pos.coords.longitude);

  if (map === undefined) {
    map = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 22);
  } else {
    map.remove();
    map = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 22);
  }

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
    .bindPopup('Eu estou aqui!')
    .openPopup();

  // Calcula a distância entre a localização do usuário e a localização permitida
  var distance = map.distance([pos.coords.latitude, pos.coords.longitude], [targetLat, targetLng]);

  // Adiciona o ouvinte de eventos ao botão de check-in e habilita ou desabilita o botão com base na distância
  var checkInBtn = document.getElementById('check-in-btn');
  checkInBtn.disabled = (distance > targetRadius);
  checkInBtn.style.backgroundColor = distance > targetRadius ? "#A1A2A6" : "initial";
  checkInBtn.removeEventListener('click', checkInBtnClick);
  var checkInBtnClick = function() {
    if (distance <= targetRadius) {
      alert('Check-in realizado com sucesso!');
    } else {
      alert('Você está fora da área permitida!');
    }
  };
  checkInBtn.addEventListener('click', checkInBtnClick);
}

function error(err){
  console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 5000
});
