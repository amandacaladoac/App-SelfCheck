let pontos = localStorage.getItem("pontos") || 0;
const PONTOS_MAXIMOS = 100;

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
  if (pontos > 0) {
    pontos = Math.max(parseFloat(pontos) - quantidade, 0);
    salvarPontos();
    atualizarPontos();
  }
}

function atualizarPontos() {
  let pontosElemento = document.getElementById("pontos");
  pontosElemento.innerHTML = pontos;
  updateProgress(pontos);
  updateProgress2(pontos);
  updateProgress3(pontos);
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

document.getElementById("botao-popup").onclick = function () {
  location.href = "pontos-aluno.html";
  adicionarPontos(10);
};

 /* TEST */
document.getElementById("test").onclick = function () {
  location.href = "pontos-aluno.html";
  adicionarPontos(10);
};
document.getElementById("test2").onclick = function () {
  location.href = "pontos-aluno.html";
  removerPontos(10)
};