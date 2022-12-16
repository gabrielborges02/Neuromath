var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

var botx_c = 147;
var boty_c = 300;
var raiobot_c = 68;

var botx_d = 261;
var boty_d = 300;
var raiobot_d = 68;

function tela_per2(){
  background(per_2);
//push();
//fill(255);
//text(mouseX+ ":" +mouseY, 20,20);
//pop();

  if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 
  }
  
var dp1 = dist(botx_c,boty_c, mouseX, mouseY); 
  if (dp1<=raiobot_c) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_c,boty_c,raiobot_c); 
    
  }  
var dp2 = dist(botx_d,boty_d, mouseX, mouseY);  
if (dp2<=raiobot_d) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_d,boty_d,raiobot_d); 
    
  }    
  
  
  
  
  
  
  
  
  
  
  
}