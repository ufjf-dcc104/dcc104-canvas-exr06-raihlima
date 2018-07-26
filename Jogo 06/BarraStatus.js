function BarraStatus (){
  this.x = 0;
  this.y = 500;
  this.width = 761;
  this.height = 30;
  this.color = "gray";
}

BarraStatus.prototype.desenhar = function (ctx, tempo, pontos, minas, itens) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width/2,this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x,this.y,this.width/2,this.height);
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x+this.width/2,this.y,this.width/2,this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x+this.width/2,this.y,this.width/2,this.height);
  ctx.strokeStyle = "black";


  //Texto no Menu
  ctx.textAlign = "start";
  ctx.fillStyle = 'white';
  ctx.font = '14pt Arial';
  ctx.fillText("Tempo: ", 10, 523);
  ctx.fillText(tempo, 100, 523);
  ctx.fillText("Itens Recolhidos: ", 190, 523);
  ctx.fillText(pontos, 350, 523);
  ctx.fillText("Minas: ", 400, 523);
  ctx.fillText(minas, 480, 523);
  ctx.fillText("Itens: ", 600, 523);
  ctx.fillText(itens, 670, 523);

};
