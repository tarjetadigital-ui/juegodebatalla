let vida = 100;
const barraVida = document.getElementById("barra-vida");
const textoVida = document.getElementById("texto-vida");
const mensajeFinal = document.getElementById("mensaje-final");
const botonReiniciar = document.getElementById("boton-reiniciar");

const botonLatigo = document.getElementById("latigo");
const botonFuego = document.getElementById("fuego");
const botonRayo = document.getElementById("rayo");
const botonElixir = document.getElementById("elixir");

let sonidoLatigo = new Audio("sonidos/latigo.mp3");
let sonidoFuego = new Audio("sonidos/fuego.mp3");
let sonidoRayo = new Audio("sonidos/rayo.mp3");
let sonidoElixir = new Audio("sonidos/elixir.mp3");
let sonidoGameOver = new Audio("sonidos/gameover.mp3");

function cambiarVida(cantidad) {
  if (vida <= 0) return;

  vida += cantidad;
  if (vida > 100) vida = 100;
  if (vida < 0) vida = 0;

  barraVida.style.width = `${vida}%`;
  textoVida.textContent = `Vida: ${vida}`;

  if (vida === 0) {
    mostrarGameOver();
  }
}

function reproducirSonido(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 2000); // Solo 2 segundos
}

botonLatigo.addEventListener("click", () => {
  reproducirSonido(sonidoLatigo);
  cambiarVida(-10);
});

botonFuego.addEventListener("click", () => {
  reproducirSonido(sonidoFuego);
  cambiarVida(-15);
});

botonRayo.addEventListener("click", () => {
  reproducirSonido(sonidoRayo);
  cambiarVida(-20);
});

botonElixir.addEventListener("click", () => {
  reproducirSonido(sonidoElixir);
  cambiarVida(+20);
});

function mostrarGameOver() {
  reproducirSonido(sonidoGameOver);
  mensajeFinal.style.display = "block";
}

botonReiniciar.addEventListener("click", () => {
  vida = 100;
  barraVida.style.width = `${vida}%`;
  textoVida.textContent = `Vida: ${vida}`;
  mensajeFinal.style.display = "none";
});

function reiniciarJuego() {
    vida = 100;
    actualizarBarra();
    document.getElementById('game-over').style.display = 'none';
}
