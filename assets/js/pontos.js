let pontos = localStorage.getItem("pontos") || 0;
const PONTOS_MAXIMOS = 200;

function salvarPontos() {
  localStorage.setItem('pontos', pontos);
}

function inicializarPontos() {
  let pontosSalvos = localStorage.getItem('pontos');
  if (pontosSalvos !== null) {
    pontos = parseFloat(pontosSalvos);
    atualizarPontos();
  }
}

function adicionarPontos(quantidade) {
  if (pontos < PONTOS_MAXIMOS) {
    pontos = Math.min(parseFloat(pontos) + quantidade, PONTOS_MAXIMOS);
    salvarPontos();
    atualizarPontos();
  }
}

function removerPontos(quantidade) {
  if (pontos >= quantidade) {
    pontos = parseFloat(pontos) - quantidade;
    salvarPontos();
    atualizarPontos();
  } else {
    alert('Saldo insuficiente! ;(');
  }
}

function atualizarPontos() {
  let pontosElemento = document.getElementById("pontos");
  pontosElemento.innerHTML = pontos;
  updateProgress1(pontos);
  updateProgress2(pontos);
  updateProgress3(pontos);
  updateProgress4(pontos);
}

function updateProgress1(points) {
  var progressBar = document.querySelector('.recompensa-pontos1 .progresso-barra div');
  var progressLabel = document.querySelector('.recompensa-pontos1 .progresso-label');
  var totalPoints = 90;
  var progressPercent = (points / totalPoints) * 100;
  progressPercent = Math.min(progressPercent, 100);
  progressBar.style.width = progressPercent.toFixed(0) + '%';
  progressLabel.textContent = progressPercent.toFixed(0) + '%';
}

function updateProgress2(points) {
  var progressBar = document.querySelector('.recompensa-pontos2 .progresso-barra2 div');
  var progressLabel = document.querySelector('.recompensa-pontos2 .progresso-label2');
  var totalPoints = 80;
  var progressPercent = (points / totalPoints) * 100;
  progressPercent = Math.min(progressPercent, 100);
  progressBar.style.width = progressPercent.toFixed(0) + '%';
  progressLabel.textContent = progressPercent.toFixed(0) + '%';
}

function updateProgress3(points) {
  var progressBar = document.querySelector('.recompensa-pontos3 .progresso-barra3 div');
  var progressLabel = document.querySelector('.recompensa-pontos3 .progresso-label3');
  var totalPoints = 150;
  var progressPercent = (points / totalPoints) * 100;
  progressPercent = Math.min(progressPercent, 100);
  progressBar.style.width = progressPercent.toFixed(0) + '%';
  progressLabel.textContent = progressPercent.toFixed(0) + '%';
}

function updateProgress4(points) {
  var progressBar = document.querySelector('.recompensa-pontos4 .progresso-barra4 div');
  var progressLabel = document.querySelector('.recompensa-pontos4 .progresso-label4');
  var totalPoints = 120;
  var progressPercent = (points / totalPoints) * 100;
  progressPercent = Math.min(progressPercent, 100);
  progressBar.style.width = progressPercent.toFixed(0) + '%';
  progressLabel.textContent = progressPercent.toFixed(0) + '%';
}

inicializarPontos();



document.getElementById("test2").onclick = function () {
  location.href = "pontos-aluno.html";
  removerPontos(10)
};