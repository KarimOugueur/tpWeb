
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

// Code temporaire pour tester le DnD
//new DnD(canvas);
//ctx.fillStyle = '#F0F0F0'; // set canvas' background color
//ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////


// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


MyForm.prototype.clear = function (ctx) {
  canvas.getContext('2d').fillStyle = '#F0F0F0';
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
  ctx.fillStyle = '#F0F0F0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    eltDuTableau.paint(ctx);
  });
};

const shapes = new Map();

Drawing.prototype.addShape = function (a, ctx) {
  shapes.set(a, ctx);
  a++;
};

/**
 *  update shape list 
 * @param {*} ctx 
 * @param {*} canvas 
 */
Drawing.prototype.updateShapeList = function (ctx, canvas) {
  shapeList = document.getElementById("shapeList");
  shapeList.textContent = "";

  for (let [index, shape] of shapes.entries()) {
    let li = document.createElement("li");
    li.style.color = shape.color;

    let button = document.createElement("button");
    button.type = "button";
    button.innerHTML = index + 1 + " " + shape.type + "  ";
    button.style = "color:" + shape.color;
    button.classList.add("btn", "btn-default");

    let span = document.createElement("span");
    span.classList.add("glyphicon", "glyphicon-remove-sign");
    button.append(span);

    button.addEventListener("click", event => {
      shapes.splice(index, 1);
      this.paint(ctx, canvas);
      this.updateShapeList(ctx, canvas);
    });

    li.append(button);
    shapeList.append(li);
  }
};

