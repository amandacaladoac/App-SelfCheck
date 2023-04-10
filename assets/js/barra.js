function updateProgress(points) {
    var progressBar = document.querySelector('.progresso-barra div');
    var progressLabel = document.querySelector('.progresso-label');
    var progressPercent = (points / 100) * 100;
    progressBar.style.width = progressPercent + '%';
    progressLabel.textContent = points + '%';
  }
  
  var userPoints = 45;
  updateProgress(userPoints); 
  
  function updateProgress2(points) {
    var progressBar = document.querySelector('.progresso-barra2 div');
    var progressLabel = document.querySelector('.progresso-label2');
    var progressPercent = (points / 100) * 100;
    progressBar.style.width = progressPercent + '%';
    progressLabel.textContent = points + '%';
  }
  
  var userPoints = 71;
  updateProgress2(userPoints); 

  function updateProgress3(points) {
    var progressBar = document.querySelector('.progresso-barra3 div');
    var progressLabel = document.querySelector('.progresso-label3');
    var progressPercent = (points / 100) * 100;
    progressBar.style.width = progressPercent + '%';
    progressLabel.textContent = points + '%';
  }
  
  var userPoints = 93;
  updateProgress3(userPoints); 

  function updateProgress4(points) {
    var progressBar = document.querySelector('.progresso-barra4 div');
    var progressLabel = document.querySelector('.progresso-label4');
    var progressPercent = (points / 100) * 100;
    progressBar.style.width = progressPercent + '%';
    progressLabel.textContent = points + '%';
  }
  
  var userPoints = 88;
  updateProgress4(userPoints); 
  
  