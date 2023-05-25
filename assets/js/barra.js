function atualizarPontos() {
  let pontosElemento = document.getElementById("pontos");
  pontosElemento.innerHTML = pontos;
  updateProgress(pontos, 40); 
  updateProgress2(pontos, 20); 
  updateProgress3(pontos, 50);
}

function updateProgress(points, totalPoints) {
  var progressBar = document.querySelector('.progresso-barra div');
  var progressLabel = document.querySelector('.progresso-label');
  var progressPercent = (points / totalPoints) * 100;
  progressBar.style.width = progressPercent + '%';
  progressLabel.textContent = progressPercent + '%';
}

function updateProgress2(points, totalPoints) {
  var progressBar = document.querySelector('.progresso-barra2 div');
  var progressLabel = document.querySelector('.progresso-label2');
  var progressPercent = (points / totalPoints) * 100;
  progressBar.style.width = progressPercent + '%';
  progressLabel.textContent = progressPercent + '%';
}

function updateProgress3(points, totalPoints) {
  var progressBar = document.querySelector('.progresso-barra3 div');
  var progressLabel = document.querySelector('.progresso-label3');
  var progressPercent = (points / totalPoints) * 100;
  progressBar.style.width = progressPercent + '%';
  progressLabel.textContent = progressPercent + '%';
}