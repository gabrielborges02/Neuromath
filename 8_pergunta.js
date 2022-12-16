var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_o = 147;
var boty_o = 300;
var raiobot_o = 68;

var botx_p = 263;
var boty_p = 300;
var raiobot_p = 68;

function tela_per8(){
  background(per_8);
  
    if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
var dp3 = dist(botx_o,boty_o, mouseX, mouseY); 
  if (dp3<=raiobot_o) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_o,boty_o,raiobot_o); 
    
  }  
var dp4 = dist(botx_p,boty_p, mouseX, mouseY);  
if (dp4<=raiobot_p) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_p,boty_p,raiobot_p); 
  
}   
}