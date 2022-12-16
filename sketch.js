var menu;

var BotX1 = 114;
var BotY1 = 158;
var largura1 = 172;
var altura1 = 52;

var BotaoX2 = 370;
var BotaoY2 = 345;
var raioBotao2 = 21;

var BotX3 = 50;
var BotY3 = 339;
var raioBot3 = 35;

var telajogo;
var tela_info_cons;
var tela_creditos;
var per_1;
var res_1;
var per_2;
var per_3;
var per_4;
var per_5;
var erro;
var tela = 0; 
var som;

function preload(){
  menu = loadImage("imagem_menu.png");
  telajogo = loadImage("imagem_1jogo.png"); 
  tela_info_cons = loadImage("info.png");
  tela_creditos = loadImage("tela3.png");
  per_1 = loadImage("P1.png");
  res_1 = loadImage("R1.png");
  erro = loadImage("errou.png");
  per_2 = loadImage("P2.png");
  per_3 = loadImage("P3.png");
  per_4 = loadImage("P4.png");
  per_5 = loadImage("P5.png");
  per_6 = loadImage("P6.png");
  per_7 = loadImage("P7.png");
  per_8 = loadImage("P8.png");
  per_9 = loadImage("P9.png");
  per_10 = loadImage("P10.png");
  fim = loadImage("fim.png");
  soundFormats('mp3');
  som = loadSound('musica_neuromath.mp3');
} 

function setup() {
  createCanvas(400, 400);
  som.play();
}

function draw() {
  if (tela==0){
    background(menu); 

   // push();
    //fill(255);
   // text(mouseX+ ":" +mouseY, 20,20);
   // pop();
        
    if(mouseX>=BotX1 && mouseY>=BotY1 && mouseX<=(BotX1+largura1)&& mouseY<=(BotY1+altura1)){ 
    noFill(); 
    stroke(0); 
    rect (BotX1,BotY1,largura1,altura1,13); 

  } 
    
    
  var dk = dist(BotaoX2, BotaoY2, mouseX, mouseY); 
  if (dk<=raioBotao2) {
    noFill(); 
    stroke(0);
    circle(BotaoX2,BotaoY2,raioBotao2);
    
  }   
      
  var d1 = dist(BotX3, BotY3, mouseX, mouseY); 
  if (d1<=raioBot3) {
    noFill();
    stroke(0);
    circle(BotX3,BotY3,raioBot3); 
    
  } 
    
    }
  else if (tela==1){
    telajogar();
  }
  else if (tela==2){
   tela_informacoes();
  }
else if (tela==3){
   telacreditos();
  }
  else if (tela==4){
    tela_res();
  }
  else if(tela==5){
    errado();
  }
  else if(tela==6){
    tela_per2();
  }
  else if(tela==7){
    tela_per3();
  }
  else if(tela==8){
    tela_per4();
  }
  else if(tela==9){
    tela_per5();
  }
  else if(tela==10){
    tela_per6();
  }
  else if(tela==11){
    tela_per7();
  }
  else if (tela==12){
    tela_per8();
  }
  else if(tela==13){
    tela_per9();
  }
  else if(tela==14){
   tela_per10();
  }
  else if(tela==15){
    tela_fim();
  }
}

function mouseClicked(){

var du = dist(BotaoX2, BotaoY2, mouseX, mouseY); 
var d2_1 = dist(BotX3, BotY3, mouseX, mouseY);

 if(tela==0){
   
   if(mouseX>=BotX1 && mouseY>=BotY1 && mouseX<=          (BotX1+largura1) && mouseY<=(BotY1+altura1)){ 
tela=1
     
    }  
   
  if (du<=raioBotao2) {
 tela = 2;
  } 
   
  if (d2_1<=raioBot3) {
   tela=3;
  }

  }   
    
else if (tela==3){
  var d_9 = dist(botbackX3,botbackY3, mouseX, mouseY); 
    if (d_9<=raioBotBack3) {
  tela=0;

    }
}
  
else if (tela==1){
  if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
    tela=0
    
  }
  else {
      tela=5
    }
  
var d_1q = dist(botx_a,boty_a, mouseX, mouseY); 
  if (d_1q<=raiobot_a) {
     tela=4  
  
  }
  
  
}

  else if (tela==2){
var dl = dist(botbackX2,botbackY2, mouseX, mouseY); 
    if (dl<=raioBotBack2) {
    tela=0
    }
  }
else if (tela==4){
if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    tela=0
    }
  var nx3 = dist(nextx2,nexty2, mouseX, mouseY); 
  if (nx3<=raionext2) {
    tela=6
  }
  }
  else if (tela==5){
if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    tela=0
    }
  }
  else if (tela==6){
if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    tela=0
    }
var dp1E = dist(botx_c,boty_c, mouseX, mouseY); 
if (dp1E<=raiobot_c){
  tela=5
}

var dp2 = dist(botx_d,boty_d, mouseX, mouseY);  
if (dp2<=raiobot_d) {
  tela=7  
}
  }

else if (tela==7){
if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    tela=0
    }
var dp3E = dist(botx_e,boty_e, mouseX, mouseY); 
if (dp3E<=raiobot_e) {
  tela=5
}  
var dp4C = dist(botx_f,boty_f, mouseX, mouseY);  
if (dp4C<=raiobot_f) {
tela=8
}
}
else if(tela==8){
if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){ 
    tela=0
    }
var dp5E = dist(botx_g,boty_g, mouseX, mouseY); 
  if (dp5E<=raiobot_g) {
    tela =5
}
var dp6 = dist(botx_h,boty_h, mouseX, mouseY);  
if (dp6<=raiobot_h) {
tela=9
}
}  
else if(tela==9){
   if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
     tela=0
  
  }
var dp7C = dist(botx_i,boty_i, mouseX, mouseY); 
  if (dp7C<=raiobot_i) {
   tela=10
  }  
var dp8E = dist(botx_j,boty_j, mouseX, mouseY);  
if (dp8E<=raiobot_j) {
   tela=5
}
}

else if(tela==10){
if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
tela=0
  
}  
var dp9E = dist(botx_k,boty_k, mouseX, mouseY); 
  if (dp9E<=raiobot_k) {
 tela = 5   
    
  }  
var dp10C = dist(botx_l,boty_l, mouseX, mouseY);  
if (dp10C<=raiobot_l) {
  tela = 11   
}  
}
else if(tela==11){
  if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
tela=0
  
}  
var dp11E = dist(botx_m,boty_m, mouseX, mouseY); 
  if (dp11E<=raiobot_m) {
    tela=5
  }
  var dp12C = dist(botx_n,boty_n, mouseX, mouseY);  
if (dp12C<=raiobot_n) {
  tela=12
}
}
else if (tela==12){
  var dp13E = dist(botx_o,boty_o, mouseX, mouseY); 
  if (dp13E<=raiobot_o) {
    tela=5
  }
  var dp14C = dist(botx_p,boty_p, mouseX, mouseY);  
if (dp14C<=raiobot_p) {
  tela=13
}
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
tela=0
  
}   
}
else if(tela==13){
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
tela=0
 }
var dp14 = dist(botx_q,boty_q, mouseX, mouseY); 
  if (dp14<=raiobot_q) {
    tela=14
  }
  var dp15 = dist(botx_r,boty_r, mouseX, mouseY);  
if (dp15<=raiobot_r) {
  tela=5
}
}
else if(tela==14){
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
tela=0
 }
var dp16 = dist(botx_s,boty_s, mouseX, mouseY); 
  if (dp16<=raiobot_s) {
    tela=15
  }
var dp17 = dist(botx_t,boty_t, mouseX, mouseY);  
if (dp17<=raiobot_t) {
  tela=5
}
 
}
else if(tela==15){
 if(mouseX>=botx_back1 && mouseY>=boty_back1 && mouseX<=(botx_back1+largura_back1)&& mouseY<=(boty_back1+altura_back1)){
tela=0
 } 
}
}