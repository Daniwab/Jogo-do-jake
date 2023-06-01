var boy
var boyImg;
var path
var pathImg
var leftBoundary
var rightBoundary;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
   pathImg = loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
   boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  
  createCanvas(400,600);
 //crie um sprite para a pista
 path = createSprite(200, 400, 100, 100)
//adicione uma imagem para a pista
 path.addImage(pathImg)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
 path.velocityY = 4
path.scale=1.2;

//crie um sprite de menino
 boy = createSprite(200, 400, 20, 40 )
//adicione uma animação de corrida para ele
boy.addAnimation("correndo",boyImg)
boy.scale=0.8;
  
//crie um limite à esquerda
leftBoundary = createSprite(40,0,40,10000);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false

//crie um limite à direita
rightBoundary = createSprite(370,0,40,80000);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
   boy.x = mouseX
  
  edges= createEdgeSprites();
   // colidir o menino com os limites invisíveis da esquerda e da direita
   boy.collide(rightBoundary)
   boy.collide(leftBoundary)
  //código para redefinir o fundo
  if(path.y > 600 ){
    path.y = height/2;
  }
  
  drawSprites();

}