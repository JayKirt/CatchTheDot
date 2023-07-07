document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const target = document.getElementById('target');
    const gameBoard = document.getElementById('game-board');
  
    // Double the size of the game board
    gameBoard.style.width = '800px';
    gameBoard.style.height = '800px';
  
    let targetX = 100;
    let targetY = 100;
    let targetDirectionX = 2;
    let targetDirectionY = 2;
  
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
        resetTarget();
      }
    }
  
    function moveTarget() {
      const targetWidth = target.offsetWidth;
      const targetHeight = target.offsetHeight;
  
      const minX = 0;
      const maxX = gameBoard.clientWidth - targetWidth;
      const minY = 0;
      const maxY = gameBoard.clientHeight - targetHeight;
  
      targetX += targetDirectionX * 5; // Changing this will effect how the ball bounces off the walls
      targetY += targetDirectionY * 5; // Changing this will effect how the ball bounces off the walls

      if (targetX <= minX || targetX >= maxX) {
        targetDirectionX *= -1;
      }
  
      if (targetY <= minY || targetY >= maxY) {
        targetDirectionY *= -1;
      }
  
      target.style.left = `${targetX}px`;
      target.style.top = `${targetY}px`;
    }
  
    function resetTarget() {
      const minX = 0;
      const maxX = gameBoard.clientWidth - target.offsetWidth;
      const minY = 0;
      const maxY = gameBoard.clientHeight - target.offsetHeight;
  
      targetX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
      targetY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
  
      target.style.left = `${targetX}px`;
      target.style.top = `${targetY}px`;
  
      targetDirectionX = Math.random() < 0.5 ? -2 : 2;
      targetDirectionY = Math.random() < 0.5 ? -2 : 2;
    }
  
    resetTarget();
  
    setInterval(moveTarget, 10); // modify this to change the speed of the bouncing ball
  
    // Debugging statement
    console.log('Game board:', gameBoard.clientWidth, gameBoard.clientHeight);
  });