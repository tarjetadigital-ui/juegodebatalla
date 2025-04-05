let vida = 100;
const barraVida = document.getElementById("barra-vida");
const vidaTexto = document.getElementById("vidaTexto");
const gameOver = document.getElementById("game-over");

const sonidoLatigo = new Audio("sonidos/latigo.mp3");
const sonidoLlama = new Audio("sonidos/llama.mp3");
const sonidoRayo = new Audio("sonidos/rayo.mp3");
const sonidoElixir = new Audio("sonidos/elixir.mp3");

function actualizarBarra() {
  barraVida.style.width = `${vida}%`;
  vidaTexto.textContent = `Vida: ${vida}`;
}

function verificarGameOver() {
  if (vida <= 0) {
    vida = 0;
    actualizarBarra();
    gameOver.style.display = "flex";
  }
}

function atacar(tipo) {
  if (vida <= 0) return;

  let danio = 0;

  switch (tipo) {
    case "latigo":
      danio = 25;
      sonidoLatigo.play();
      break;
    case "llama":
      danio = 40;
      sonidoLlama.play();
      break;
    case "rayo":
      danio = 35;
      sonidoRayo.play();
      break;
  }

  vida -= danio;
  if (vida < 0) vida = 0;

  actualizarBarra();
  verificarGameOver();
}

function curar() {
  if (vida <= 0) return;

  sonidoElixir.play();

  vida += 20;
  if (vida > 100) vida = 100;

  actualizarBarra();
}

function reiniciarJuego() {
    vida = 100;
    actualizarBarra();
    document.getElementById('game-over').style.display = 'none';
}
