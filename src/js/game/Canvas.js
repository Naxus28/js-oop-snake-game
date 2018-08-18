export default class Canvas {
	constructor(canvasId = 'snake-game', width = 600, height = 600) {
		this.canvasId = canvasId;
		this.width = width;
		this.height = height;
		this.canvas = this.createCanvas();
	}

	createCanvas() {
		const canvas = document.getElementById(this.canvasId);
		canvas.height = this.height;
		canvas.width = this.width;
		
		return canvas;
	}

	getContext() {
		if (!this.canvas.getContext) {
			alert('Your browser doesn\'t support HTML5 Canvas.');
			return;
		} else {
			return this.canvas.getContext('2d');
		}
	}

	getCanvasId() {
		return this.canvasId;
	} 

	setCanvasId(canvasId) {
		this.canvasId = canvasId;
	} 

	getCanvas() {
		return this.canvas;
	} 

	setCanvas(canvas) {
		this.canvas = canvas;
	} 

	getWidth() {
		return this.width;
	} 

	setWidth(width) {
		this.width = width;
	} 

	getHeight() {
		return this.height;
	} 

	setHeight(height) {
		this.height = height;
	} 
}
