
function Disco (x, y, l, a, t, score, path) {
  this.pos_x = int(x);
  this.pos_y = int(y);
  this.label = l;
  this.artista = a;
  this.titolo = t;
  this.rym = score;
  this.cover = loadImage(path);
  this.acceso = 1;


this.display_small = function () {
  image(this.cover,this.pos_x, this.pos_y ,spaziatura * 0.9 * _scala,spaziatura * 0.9 * _scala);
};

this.display_big = function ( x,  y){
  image(this.cover,x,y,height * 0.15,height * 0.15);
};

this.display_score = function ( x,  y, s_){
  s_ = map(s_, 250, 500, 0, 50);
  image(this.cover,x,y,s_,s_);
};

this.accendi = function (){
  noFill();
  stroke(255,255,0);
  strokeWeight(5);
  rect(this.pos_x, this.pos_y, spaziatura * 0.9 * _scala, spaziatura * 0.9 * _scala);
  //line(this.pos_x, this.pos_y+spaziatura*0.95,this.pos_x+spaziatura*0.9, this.pos_y+spaziatura*0.95);
};

this.spegni = function (){
  fill(0,230);
  noStroke();
  //stroke(255,0,0);
  //strokeWeight(5);
  rect(this.pos_x, this.pos_y, spaziatura * 0.9 * _scala, spaziatura * 0.9 * _scala);
};

this.controlla_artista = function (a_){
  if (this.artista == a_) {
      this.ACCESO = 1;
    } else {
      this.ACCESO = 0;
    }
};

this.mouseOver = function (){
  if ((mouseX > this.pos_x) && (mouseX < this.pos_x + spaziatura) && (mouseY > this.pos_y) && (mouseY < this.pos_y + spaziatura)) {
      return (true);
    } else {
      return (false);
    }
};

}