document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const target = document.getElementById('target');
  
    player.addEventListener('click', () => {
      alert('You caught the target!');
    });
  });