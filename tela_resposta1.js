var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var nextx2 = 200;
var nexty2 = 200;
var raionext2 = 160;

function tela_res(){
  background (res_1);
//push();
//fill(255);
//text(mouseX+ ":" +mouseY, 20,20);
//pop();


if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
  
var nx2 = dist(nextx2,nexty2, mouseX, mouseY); 
  if (nx2<=raionext2) {
    noFill(); // Contorno do botão
    stroke(255);
    circle(nextx2,nexty2,raionext2);  
  }
}