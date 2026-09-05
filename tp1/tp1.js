let pluto = [];
let fondo;
let indice = 0;
let velocidad = 15;
let x = 225;
let y = 300;
let estado = 1;
let mov= 4;
let contador = 0; 

function preload() {
  for (let i = 0; i < 9; i++) {
    pluto[i] = loadImage("data/0" + i + ".png"); 
  }
  fondo = loadImage("data/fondo.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(fondo);

  // Control de tiempo y estado
  if (estado === 1) {
    contador++;
    if (contador >= 60) { 
      estado = 2;
      contador = 0;
    }
  }

  // Dibuja y actualiza según el estado
  if (estado === 1) {
    image(pluto[0], x, y, 200, 150);
  } else if (estado === 2) {
    moverPluto(mov); 
    plutosaltando();
  }
}

// Animación de pluto 
function plutosaltando() {
  image(pluto[indice], x, y, 200, 150);

  if (frameCount % velocidad === 0) {
    indice++;
  }

  if (indice >= pluto.length) {
    indice = 1;
  }
}

//Mueve a pluto en x y cuando se sale de la pantalla vuelve por el otro lado
function moverPluto(pasoX) {
  x -= pasoX; 
  
  // Cuando la imagen sale completamente por la izquierda (-200px), reaparece por la derecha (800px)
  if (x < -200) {
    x = width; 
  }
}

function keyPressed() {
  // Tecla para reiniciar
  if (key === 'r' || key === 'R') {
    estado = 1;
    indice = 0;
    contador = 0; 
    x = 225;
  }
}
