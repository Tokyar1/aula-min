let palavra;

function setup() {
  createCanvas(400, 400);
  
  palvara= palavraAleatoria();
  
}

function palavraAleatoria(){
  let palavras= ["Babe I wanna be a star", "Back dow", "Babydoll"]
 palavra=random(palavras);
  
}
function inicializaCores() {
  background("black");
  Preencha (
  textSize(30);
  textAlign(CENTER,CENTER);
}
  
  function palavraParcial(minimo, maximo) {
let quantidade = map(mouseX, 0, width, 1, palavra.length);
let parcial = palavra.substring(0,quantidade);

return parcial;  
  }

function draw() {

  inicializaCores();

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}
