var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_g = 147;
var boty_g = 300;
var raiobot_g = 68;

var botx_h = 263;
var boty_h = 300;
var raiobot_h = 68;

function tela_per4(){
background (per_4)
  
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  }
var dp3 = dist(botx_g,boty_g, mouseX, mouseY); 
  if (dp3<=raiobot_g) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_g,boty_g,raiobot_g); 
    
  }  
var dp4 = dist(botx_h,boty_h, mouseX, mouseY);  
if (dp4<=raiobot_h) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_h,boty_h,raiobot_h); 
  
}
  
}