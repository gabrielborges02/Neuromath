var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_q = 147;
var boty_q = 300;
var raiobot_q = 68;

var botx_r = 263;
var boty_r = 300;
var raiobot_r = 68;


function tela_per9(){
  background(per_9)
  if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
var dp3 = dist(botx_q,boty_q, mouseX, mouseY); 
  if (dp3<=raiobot_q) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_q,boty_q,raiobot_q); 
    
  }  
var dp4 = dist(botx_r,boty_r, mouseX, mouseY);  
if (dp4<=raiobot_r) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_r,boty_r,raiobot_r); 
  
}    
}