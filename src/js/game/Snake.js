export default class Snake {
	constructor({ ctx, canvas, boxSize, initialX, initialY, color }) {
		this.snake = [];
		
		// set initial position
		this.snake[0] = { 
			x: initialX * boxSize, 
			y: initialY * boxSize 
		}; 
		this.ctx = ctx;
		this.canvas = canvas;
		this.boxSize = boxSize;
		this.initialX = initialX;
		this.initialY = initialY;
		this.color = color;
		this.direction;
		this.position = this.snake[0];
	}

	getSnake() {
		return this.snake;
	}

	setSnakeOnCanvas() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.initialX, this.initialY * this.boxSize, this.boxSize, this.boxSize);
	}

	draw(snakeX, snakeY) {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(snakeX, snakeY, this.boxSize, this.boxSize);
	}

	setDirection(direction) {
		this.direction = direction;
	}

	hasCollided(snakeX, snakeY) {
		return (snakeX < 0 || snakeX + this.boxSize > this.canvas.width)
			|| (snakeY < 0 || snakeY + this.boxSize > this.canvas.height);
	}

	eat() {
		let headX = this.snake[0].x;
		let headY = this.snake[0].y;

		if (this.direction === 'LEFT') {
			headX -= this.boxSize;
		} else if (this.direction === 'RIGHT') {
			headX += this.boxSize;
		} else if (this.direction === 'UP') {
			headY -= this.boxSize;
		} else if (this.direction === 'DOWN') {
			headY += this.boxSize;
		}

		this.snake.unshift({ x: headX, y: headY });
	}

	getPosition() {
		return this.position;
	}

	setPosition(position) {
		this.position = position;
	}

	move(direction) {
		this.setDirection(direction);
		let newHeadX;
		let newHeadY;

		for (let i = 0; i < this.snake.length; i++) {
			if (direction === 'LEFT') {
				newHeadX = this.snake[0].x - this.boxSize;
			} else if (direction === 'RIGHT') {
				newHeadX = this.snake[0].x + this.boxSize;
			} else if (direction === 'DOWN') {
				newHeadY = this.snake[0].y + this.boxSize;
			} else if (direction === 'UP') {
				newHeadY = this.snake[0].y - this.boxSize;
			}

			console.log(newHeadX);
			console.log(newHeadY);

			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(20, 30, this.boxSize, this.boxSize);

			// this.snake.pop();
			this.snake.unshift({x: 10+i, y:20+i});
			// this.draw(newHeadX, newHeadY);

			if (this.hasCollided(newHeadX, newHeadY)) {
				this.setPosition({});
			} else {
				this.setPosition({
					x: newHeadX, 
					y: newHeadY
				});
			}
		}
		// this.draw();
	}
}