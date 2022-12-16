var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_k = 147;
var boty_k = 300;
var raiobot_k = 68;

var botx_l = 263;
var boty_l = 300;
var raiobot_l = 68;

function tela_per6(){
background(per_6);
  
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
var dp3 = dist(botx_k,boty_k, mouseX, mouseY); 
  if (dp3<=raiobot_k) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_k,boty_k,raiobot_k); 
    
  }  
var dp4 = dist(botx_l,boty_l, mouseX, mouseY);  
if (dp4<=raiobot_l) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_l,boty_l,raiobot_l); 
  
} 
  
  
  
}