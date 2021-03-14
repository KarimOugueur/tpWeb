
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.


function DnD(boundingObject, interactor) {
	this.initX = 0;
	this.initY = 0;
	this.finalX = 0;
	this.finalY = 0;
	this.pression = false;
	this.wait = true;
  
	this.boundingObject = boundingObject;
	this.interactor = interactor;
	this.getInitX = function() {
	  return   this.initX;
	}.bind(this) ;
  
	this.getInitY = function() {
	  return   this.initY;
  
	}.bind(this) ;
	this.getFinalX = function() {
	  return   this.finalX;
  
	}.bind(this) ;
	this.getFinalY = function() {
	  return   this.finalY;
  
	}.bind(this) ;
  
  
	this.press = function(evt) {
	  this.pression = true;
	  this.initX = getMousePosition(this.boundingObject,evt).x;
	  this.initY = getMousePosition(this.boundingObject,evt).y;
	  this.interactor.interactionStart(this);
  
	}.bind(this) ;
  
	this.deplacement = function(evt) {
	  if (this.pression){
		this.finalX = getMousePosition(this.boundingObject,evt).x;
		this.finalY = getMousePosition(this.boundingObject,evt).y;
		this.interactor.interactionUpDate(this);
	  }
  
	}.bind(this) ;
  
  
	this.relachement = function(evt) {
	  this.pression = false;
	  this.finalX = getMousePosition(this.boundingObject,evt).x;
	  this.finalY = getMousePosition(this.boundingObject,evt).y;
	  this.interactor.interactionEnd(this);
	}.bind(this) ;
  
  
	boundingObject.addEventListener('mousedown', this.press, false);
	boundingObject.addEventListener('mousemove', this.deplacement, false);
	boundingObject.addEventListener('mouseup', this.relachement, false);
  
  
  };
  
  
  function getMousePosition(can,evt) {
	var rect = can.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
  };
  