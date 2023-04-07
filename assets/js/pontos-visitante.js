function updateProgress4(points) {
  var progressBar = document.querySelector('.progresso-barra4 div');
  var progressLabel = document.querySelector('.progresso-label4');
  var progressPercent = (points / 100) * 100;
  progressBar.style.width = progressPercent + '%';
  progressLabel.textContent = points + '%';
}

var userPoints = 71;
updateProgress4(userPoints); 