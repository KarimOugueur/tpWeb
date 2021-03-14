
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

// Code temporaire pour tester le DnD
//new DnD(canvas);
//ctx.fillStyle = '#F0F0F0'; // set canvas' background color
//ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////


// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

MyForm.prototype.clear = function (ctx) {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};


Rectangle.prototype.paint = function (ctx) {
  ctx.lineWidth = this.getEpaisseur();
  ctx.strokeStyle = this.getCouleur();
  ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Line.prototype.paint = function (ctx) {
  ctx.lineWidth = this.getEpaisseur();
  ctx.strokeStyle = this.getCouleur();
  ctx.beginPath();
  ctx.moveTo(this.getInitX(), this.getInitY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};


Drawing.prototype.paint = function (ctx) {
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    eltDuTableau.paint(ctx);
  });
};
/**
 *  update shape list 
 * @param {*} shape 
 */

Line.updateShapeList = function (shape ) {
  var shapeList = document.getElementById("shapeList");
  var li = document.createElement("li");
  li.appendChild(shape);
  shapeList.appendChild(li);

};

Rectangle.updateShapeList = function (dnd ) {
  var shapeList = document.getElementById("shapeList");
  var li = document.createElement("li");
  li.appendChild(dnd);
  shapeList.appendChild(li);

};


