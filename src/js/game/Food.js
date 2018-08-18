export default class Food {
	constructor({ canvas, ctx, boxSize, color = 'red' }) {
		this.boxSize = boxSize;
		this.canvas = canvas;
		this.ctx = ctx;
		this.color = color;
		this.food;
	}

	getColor() {
		return this.color;
	}

	setColor(color) {
		this.color = color;
	}

	create() {
		const boxCountOnXAxis = this.canvas.width / this.boxSize;
		const boxCountOnYAxis = this.canvas.height / this.boxSize;

		const foodX = Math.floor((Math.random() * boxCountOnXAxis)) * this.boxSize;
		const foodY = Math.floor((Math.random() * boxCountOnYAxis)) * this.boxSize;

		this.food = { x: foodX, y: foodY };
	}

	draw() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.food.x, this.food.y, this.boxSize, this.boxSize);
	}

	getPosition() {
		return this.food;
	}
}