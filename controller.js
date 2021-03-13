
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.ctx = ctx;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);


	this.onInteractionStart = function (dnd) {
		if (document.getElementById("butRect").checked) {
			this.currentShape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);

		} else {
			this.currentShape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
		}


	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		if (this.currentShape != 0) {
			this.currentShape.clear(this.ctx)
			this.currentShape.finalX = dnd.finalX;
			this.currentShape.finalY = dnd.finalY;
			drawing.paint(this.ctx);
			this.currentShape.paint(this.ctx);
		}
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		this.currentShape.finalX = dnd.finalX;
		this.currentShape.finalY = dnd.finalY;
		this.currentShape.paint(this.ctx);
		drawing.addForms(this.currentShape);
		drawing.paint(this.ctx);
	}.bind(this);



};