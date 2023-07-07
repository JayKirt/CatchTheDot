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
      const targetWidth = target.offsetWidth;
      const targetHeight = target.offsetHeight;
  
      const minX = 0;
      const maxX = gameBoard.clientWidth - targetWidth;
      const minY = 0;
      const maxY = gameBoard.clientHeight - targetHeight;
  
      let targetX = targetRect.left + target.directionX;
      let targetY = targetRect.top + target.directionY;
  
      if (targetX <= minX || targetX >= maxX) {
        target.directionX *= -1;
        targetX = Math.max(minX, Math.min(targetX, maxX));
      }
  
      if (targetY <= minY || targetY >= maxY) {
        target.directionY *= -1;
        targetY = Math.max(minY, Math.min(targetY, maxY));
      }
  
      target.style.left = `${targetX}px`;
      target.style.top = `${targetY}px`;
    }
  
    target.directionX = 2; // Initial X direction
    target.directionY = 2; // Initial Y direction
  
    setInterval(moveTarget, 10); // Move the target every 10 milliseconds
  });