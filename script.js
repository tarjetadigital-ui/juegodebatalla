let vida = 100;
const barraVida = document.getElementById('barra-vida');
const vidaTexto = document.getElementById('vidaTexto');
const gameOver = document.getElementById('game-over');

const sonidos = {
  latigo: new Audio('sonidos/latigo.mp3'),
  llama: new Audio('sonidos/llama.mp3'),
  rayo: new Audio('sonidos/rayo.mp3'),
  elixir: new Audio('sonidos/elixir.mp3'),
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

  if (tipo === 'planta') {
    dano = 10;
    reproducirSonido('latigo');
  } else if (tipo === 'fuego') {
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
botonReturn.classList.add('return-button'); // usa el estilo del CSS
botonReturn.onclick = () => {
  vida = 100;
  actualizarBarraVida();
  gameOver.style.display = 'none';
};

gameOver.appendChild(botonReturn);

actualizarBarraVida();
