const canvas = document.getElementById('../src/js/TopDown.js');
const ctx = canvas.getContext('2d');

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 32,
  height: 32,
  color: 'blue',
  speed: 5
};

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
  // Atualizar lógica do jogo aqui

  // Exemplo: Movimento do jogador com as teclas de seta
  if (keyState.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  }
  if (keyState.ArrowDown && player.y < canvas.height - player.height) {
    player.y += player.speed;
  }
  if (keyState.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
  if (keyState.ArrowRight && player.x < canvas.width - player.width) {
    player.x += player.speed;
  }
}

function draw() {
  // Limpar o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar elementos do jogo
  drawBackground();
  drawPlayer();
}

function drawBackground() {
  // Desenhar um cenário redondo
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150; // Raio do cenário

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'gray';
  ctx.fill();
  ctx.closePath();
}


function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Controle de teclado
const keyState = {};
window.addEventListener('keydown', (e) => {
  keyState[e.key] = true;
});
window.addEventListener('keyup', (e) => {
  keyState[e.key] = false;
});

// Iniciar o loop do jogo
gameLoop();
