function Personagem (mapa,id){
  this.imagem = new Image();
  this.imagem.src = "caravela.png";
  this.height = 40;
  this.width = 40;
  this.SIZE = 40;
  this.vx = this.gx = 1;
  this.vy = this.gy = 1;
  this.x=this.gx*mapa.SIZE;
  this.y=this.gy*mapa.SIZE;
  this.color ="blue";
  this.vida=1;
  this.itens = 0;
  this.id=id;

  //contador para movimento;
  this.tempo = 0;
  //0 Norte / 1 Leste / 2 Sul /3 Oeste;
  this.sentido = 0;
}

/*

Personagem.prototype.moverNoMapa = function (map, dt) {
  this.gx = Math.floor(this.x/map.SIZE);
  this.gy = Math.floor(this.y/map.SIZE);

  //direita
  if(this.vx > 0 && map.cells[this.gy][this.gx+1]==1){
    this.x += Math.min((this.gx+1)*map.SIZE - (this.x+this.SIZE/2), this.vx*dt);
  } //esquerda
  else if(this.vx < 0 && map.cells[this.gy][this.gx-1]==1){
    this.x += Math.max((this.gx)*map.SIZE - (this.x-this.SIZE/2), this.vx*dt);
  }
  //sem pressionar
  else {
    this.x = this.x + this.vx*dt;
  }


  if(this.vy >0 && map.cells[this.gy+1][this.gx]==1){
      this.y += Math.min((this.gy+1)*map.SIZE - (this.y+this.SIZE/2),this.vy*dt);
    } else if( this.vy<0 && map.cells[this.gy-1][this.gx]==1){
      this.y += Math.max((this.gy)*map.SIZE - (this.y-this.SIZE/2),this.vy*dt);
    } else {
      this.y = this.y + this.vy*dt;
    }

  };
  */
  Personagem.prototype.mover = function (map, dt) {
  this.tempo +=0.02;
  this.gx = Math.floor(this.vx);
  this.gy = Math.floor(this.vy);
  this.x =  this.gx * map.SIZE;
  this.y =  this.gy * map.SIZE;

  if(map.verificaMina(this.gy,this.gx)==true){
    var somExplosao = new Audio();
    somExplosao.src = "Som/Explosao.m4a";
    somExplosao.play();
    this.vida-=1;
  }
};


  Personagem.prototype.desenhar = function (ctx){
    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x,this.y,this.width,this.height);
    if(this.tempo%3<=1){
      if(this.id==0){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,0,0,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,0,64,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,0,96,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,0,32,32,32,this.x,this.y,this.width,this.height);
        }
      } else if (this.id==1){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,0,128,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,0,192,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,0,224,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,0,160,32,32,this.x,this.y,this.width,this.height);
        }
      } else if (this.id==2){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,96,0,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,96,64,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,96,96,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,96,32,32,32,this.x,this.y,this.width,this.height);
        }

      } else if (this.id ==3){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,96,128,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,96,192,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,96,224,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,96,160,32,32,this.x,this.y,this.width,this.height);
        }

      }
    }
    else if(this.tempo%3<=2){
      if(this.id==0){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,32,0,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,32,64,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,32,96,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,32,32,32,32,this.x,this.y,this.width,this.height);
        }
      } else if (this.id==1){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,32,128,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,32,192,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,32,224,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,32,160,32,32,this.x,this.y,this.width,this.height);
        }
      } else if (this.id==2){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,128,0,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,128,64,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,128,96,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,128,32,32,32,this.x,this.y,this.width,this.height);
        }

      } else if (this.id ==3){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,128,128,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,128,192,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,128,224,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,128,160,32,32,this.x,this.y,this.width,this.height);
        }

      }

    } else if(this.tempo%3<=3){
      if(this.id==0){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,64,0,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,64,64,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,64,96,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,64,32,32,32,this.x,this.y,this.width,this.height);
        }
      } else if (this.id==1){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,64,128,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,64,192,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,64,224,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,64,160,32,32,this.x,this.y,this.width,this.height);
        }
      } else if (this.id==2){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,160,0,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,160,64,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,160,96,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,160,32,32,32,this.x,this.y,this.width,this.height);
        }

      } else if (this.id ==3){
        if(this.sentido==0){
          ctx.drawImage(this.imagem,160,128,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==1){
          ctx.drawImage(this.imagem,160,192,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==2){
          ctx.drawImage(this.imagem,160,224,32,32,this.x,this.y,this.width,this.height);
        } else if(this.sentido==3){
          ctx.drawImage(this.imagem,160,160,32,32,this.x,this.y,this.width,this.height);
        }

      }
    }
  };
