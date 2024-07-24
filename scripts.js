document.addEventListener('DOMContentLoaded', () => {
  const enterButton = document.getElementById('enter-button');
  const entranceScreen = document.getElementById('entrance-screen');
  const mainContent = document.getElementById('main-content');
  const backgroundMusic = document.getElementById('background-music');


  enterButton.addEventListener('click', () => {
      entranceScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
      backgroundMusic.play();
      
  });
});
