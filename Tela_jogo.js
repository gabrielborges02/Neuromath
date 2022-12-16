var botx_a = 147;
var boty_a = 300;
var raiobot_a = 68;

var botx_b = 261;
var boty_b = 300;
var raiobot_b = 68;

var botx_back1 = 10;
var boty_back1 = 366;
var largura_back1 = 59;
var altura_back1 = 18;

function telajogar(){
  background(per_1);  
 // push();
   //   fill(255);
    //  text(mouseX+ ":" +mouseY, 20,20);
    //pop();
  
if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    noFill(); 
    stroke(0); 
    rect (botx_back1,boty_back1,largura_back1,altura_back1,9); 

  } 
  
var de = dist(botx_a,boty_a, mouseX, mouseY); 
  if (de<=raiobot_a) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_a,boty_a,raiobot_a); 
    
  }  
var ds = dist(botx_b,boty_b, mouseX, mouseY);  
if (ds<=raiobot_b) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botx_b,boty_b,raiobot_b); 
    
  }  
}
