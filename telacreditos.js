var botbackX3 = 360;
var botbackY3 = 360;
var raioBotBack3 = 47;

function telacreditos(){
  background(tela_creditos);
  // push();
  //    fill(255);
 //     text(mouseX+ ":" +mouseY, 20,20);
  //  pop();
  
  var ds = dist(botbackX3,botbackY3, mouseX, mouseY); 
  if (ds<=raioBotBack3) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botbackX3,botbackY3,raioBotBack3); 
    
  }  
  
}