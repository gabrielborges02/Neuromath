var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_s = 147;
var boty_s = 300;
var raiobot_s = 68;

var botx_t = 263;
var boty_t = 300;
var raiobot_t = 68;

function tela_per10(){
  background(per_10);
  
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
var dp3 = dist(botx_s,boty_s, mouseX, mouseY); 
  if (dp3<=raiobot_s) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_s,boty_s,raiobot_s); 
    
  }  
var dp4 = dist(botx_t,boty_t, mouseX, mouseY);  
if (dp4<=raiobot_t) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_t,boty_t,raiobot_t); 
  
}      
}