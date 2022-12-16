var botbackX2 = 360;
var botbackY2 = 360;
var raioBotBack2 = 47;

function tela_informacoes(){
 background (tela_info_cons);
  // push();
   //   fill(255);
   //   text(mouseX+ ":" +mouseY, 20,20);
   // pop();

  var dg = dist(botbackX2,botbackY2, mouseX, mouseY); 
  if (dg<=raioBotBack2) {
    noFill(); // Contorno do botão
    stroke(0);
    circle(botbackX2,botbackY2,raioBotBack2);
  
  }
}