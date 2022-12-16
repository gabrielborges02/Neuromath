var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_m = 147;
var boty_m = 300;
var raiobot_m = 68;

var botx_n = 263;
var boty_n = 300;
var raiobot_n = 68;

function tela_per7(){
  background(per_7);
  
  if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
var dp3 = dist(botx_m,boty_m, mouseX, mouseY); 
  if (dp3<=raiobot_m) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_m,boty_m,raiobot_m); 
    
  }  
var dp4 = dist(botx_n,boty_n, mouseX, mouseY);  
if (dp4<=raiobot_n) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_n,boty_n,raiobot_n); 
  
}   
}