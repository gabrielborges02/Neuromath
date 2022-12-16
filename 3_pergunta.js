var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_e = 147;
var boty_e = 300;
var raiobot_e = 68;

var botx_f = 263;
var boty_f = 300;
var raiobot_f = 68;

function tela_per3(){
  background(per_3);
  
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
  var dp3 = dist(botx_e,boty_e, mouseX, mouseY); 
  if (dp3<=raiobot_e) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_e,boty_e,raiobot_e); 
    
  }  
var dp4 = dist(botx_f,boty_f, mouseX, mouseY);  
if (dp4<=raiobot_f) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_f,boty_f,raiobot_f); 
  
}
}