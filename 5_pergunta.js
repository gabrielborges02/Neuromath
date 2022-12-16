var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_i = 147;
var boty_i = 300;
var raiobot_i = 68;

var botx_j = 263;
var boty_j = 300;
var raiobot_j = 68;

function tela_per5(){
background (per_5)
  
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
var dp3 = dist(botx_i,boty_i, mouseX, mouseY); 
  if (dp3<=raiobot_i) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_i,boty_i,raiobot_i); 
    
  }  
var dp4 = dist(botx_j,boty_j, mouseX, mouseY);  
if (dp4<=raiobot_j) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_j,boty_j,raiobot_j); 
  
}
  
}