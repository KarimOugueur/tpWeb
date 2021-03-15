
var editingMode = { rect: 0, line: 1 };


function Pencil(ctx, drawing, canvas) {
	this.currentShape = 0;
	this.ctx = ctx;
	new DnD(canvas, this);


	this.interactionStart = function (dnd) {
		if (document.getElementById("butRect").checked) {
			this.currentShape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
		} else {
			this.currentShape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
		}

	}.bind(this);


	this.interactionUpDate = function (dnd) {
		if (this.currentShape != 0) {
			this.currentShape.clear(this.ctx)
			this.currentShape.finalX = dnd.finalX;
			this.currentShape.finalY = dnd.finalY;
			drawing.paint(this.ctx);
			this.currentShape.paint(this.ctx);
		}
	}.bind(this);

	this.interactionEnd = function (dnd) {
		this.currentShape.finalX = dnd.finalX;
		this.currentShape.finalY = dnd.finalY;
		this.currentShape.paint(this.ctx);
		drawing.addForms(this.currentShape);
		drawing.paint(this.ctx);
		drawing.addShape(0, this.ctx);
		drawing.updateShapeList(this.ctx, this.canvas);
	}.bind(this);
};

