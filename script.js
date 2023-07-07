document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const target = document.getElementById('target');
    const gameBoard = document.getElementById('game-board');
  
    // Double the size of the game board
    gameBoard.style.width = '800px';
    gameBoard.style.height = '800px';
  
    gameBoard.addEventListener('mousemove', (event) => {
      const x = event.clientX - gameBoard.offsetLeft;
      const y = event.clientY - gameBoard.offsetTop;
  
      player.style.left = `${x}px`;
      player.style.top = `${y}px`;
  
      checkCollision();
    });
  
    function checkCollision() {
      const playerRect = player.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
  
      if (
        playerRect.left < targetRect.right &&
        playerRect.right > targetRect.left &&
        playerRect.top < targetRect.bottom &&
        playerRect.bottom > targetRect.top
      ) {
        alert('You caught the target!');
      }
    }
  
    function moveTarget() {
      const targetRect = target.getBoundingClientRect();
  
      const minX = 0;
      const maxX = gameBoard.clientWidth - target.offsetWidth;
      const minY = 0;
      const maxY = gameBoard.clientHeight - target.offsetHeight;
  
      let targetX = targetRect.left + getRandomStep();
      let targetY = targetRect.top + getRandomStep();
  
      targetX = Math.max(minX, Math.min(targetX, maxX));
      targetY = Math.max(minY, Math.min(targetY, maxY));
  
      target.style.left = `${targetX}px`;
      target.style.top = `${targetY}px`;
    }
  
    function getRandomStep() {
      const minStep = -5; // Adjust the step size as desired
      const maxStep = 5; // Adjust the step size as desired
  
      return Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;
    }
  
    setInterval(moveTarget, 100); // Move the target every 100 milliseconds
  });