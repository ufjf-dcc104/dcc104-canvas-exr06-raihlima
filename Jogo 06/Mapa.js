function Mapa(rows, columns) {
  this.pedra = new Image();
  this.pedra.src = "pedra.png";
  this.agua = new Image();
  this.agua.src = "agua.png";
  this.nevoa = new Image();
  this.nevoa.src = "nevoa.png";
  this.rows = rows;
  this.columns = columns;
  this.SIZE = 40;
  this.cells = [];  //0 indestrutivel / 1 chão / 2 mina /3 escuro /4 tesouro
  this.numTesouros=0;
  for (var r = 0; r < rows; r++) {
    this.cells[r] = [];
    for (var c = 0; c < columns; c++) {
      //Bordas do Mapa
      //Indestrutivel

      if(r==0 || r==(rows-1)){
        this.cells[r][c] = 0;
      } else if(c==0 || c==(columns-1)){
        this.cells[r][c] = 0;
      } else if(this.cells[r][c] != 0){
        var rand = (Math.random() * 100);

        //posicao inicial
        if(r==1 && c==1){
          this.cells[r][c] = 1;
        }
        else if(rand>=70){
          this.cells[r][c] = 2;
        } else {
          this.cells[r][c] = 3;
        }
        if(this.numTesouros<5 && (c!=1 && r!=1)){
          var rand = (Math.random() * 100);
          if(rand>90){
            this.cells[r][c] = 4;
            this.numTesouros++;
          }
        }
        //  var rand = (Math.random() * 100);
      }
    }
  }
}

Mapa.prototype.desenhar = function (ctx) {
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==0){
        ctx.fillStyle = "green";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.pedra,0,0,175,175,c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==1){
        ctx.fillStyle = "darkgray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.agua,0,0,128,128,c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==2){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.nevoa,0,0,175,175,c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==3){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.nevoa,0,0,175,175,c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==4){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.nevoa,0,0,175,175,c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }
};

Mapa.prototype.verificaParede = function (r,c) {
  if(this.cells[r][c]!=0){
    return false;
  } else {
    return true;
  }
};

Mapa.prototype.verificaMina = function (r,c) {
  if(this.cells[r][c]==2){
    return true;
  } else {
    return false;
  }
};

Mapa.prototype.verificaTesouro = function (r,c){
  if(this.cells[r][c]==4){
    this.cells[r][c]=1;
    return true;
  } else {
    return false;
  }
};

Mapa.prototype.alteraVisibilidade = function (r,c) {
  if(this.cells[r][c]==3){
    this.cells[r][c]=1;
  }
};

Mapa.prototype.retornarMinas = function (r,c) {
  var x=0;
  if(this.cells[r-1][c]==2){
    x+=1;
  }
  if(this.cells[r][c-1]==2){
    x+=1;
  }
  if(this.cells[r][c+1]==2){
    x+=1;
  }
  if(this.cells[r+1][c]==2){
    x+=1;
  }
  return x;
};

Mapa.prototype.retornarItens = function (r,c){
  var x=0;
  if(this.cells[r-1][c]==4){
    x+=1;
  }
  if(this.cells[r][c-1]==4){
    x+=1;
  }
  if(this.cells[r][c+1]==4){
    x+=1;
  }
  if(this.cells[r+1][c]==4){
    x+=1;
  }
  return x;
}
