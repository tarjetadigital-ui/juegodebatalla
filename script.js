let vida = 100;
const barraVida = document.getElementById('barra-vida');
const vidaTexto = document.getElementById('vidaTexto');
const gameOver = document.getElementById('game-over');

const sonidos = {
  planta: new Audio('sonidos/latigo.mp3'),
  fuego: new Audio('sonidos/llama.mp3'),
  rayo: new Audio('sonidos/rayo.mp3'),
  curar: new Audio('sonidos/elixir.mp3'),
};

function reproducirSonido(nombre) {
  const sonido = sonidos[nombre];
  if (sonido) {
    sonido.pause();
    sonido.currentTime = 0;
    sonido.play();

    setTimeout(() => {
      sonido.pause();
      sonido.currentTime = 0;
    }, 2000);
  }
}

function actualizarBarraVida() {
  if (vida < 0) vida = 0;
  if (vida > 100) vida = 100;

  barraVida.style.width = vida + "%";
  vidaTexto.textContent = `Vida: ${vida}`;

  if (vida === 0) {
    gameOver.style.display = 'flex';
  }
}

function atacar(tipo) {
  if (vida === 0) return;

  let dano = 0;

  if (tipo === 'latigo') {
    dano = 10;
    reproducirSonido('latigo');
  } else if (tipo === 'llama') {
    dano = 20;
    reproducirSonido('llama');
  } else if (tipo === 'rayo') {
    dano = 15;
    reproducirSonido('rayo');
  }

  vida -= dano;
  actualizarBarraVida();
}

function curar() {
  if (vida === 0) return;

  const curacion = 20;
  vida += curacion;
  reproducirSonido('elixir');
  actualizarBarraVida();
}

const botonReturn = document.createElement('button');
botonReturn.innerHTML = '<img src="img/return.png" alt="Return Game">';
botonReturn.style.border = 'none';
botonReturn.style.background = 'none';
botonReturn.style.cursor = 'pointer';
botonReturn.style.marginTop = '20px';

botonReturn.onclick = () => {
  vida = 100;
  actualizarBarraVida();
  gameOver.style.display = 'none';
};

gameOver.appendChild(botonReturn);

actualizarBarraVida();
function reiniciarJuego() {
    vida = 100;
    actualizarBarra();
    document.getElementById('game-over').style.display = 'none';
}
