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

	draw(head) {
		this.snake.unshift(head);
		this.snake.pop();
		this.ctx.fillStyle = this.color;
		
		this.snake.forEach(segment => {
			this.ctx.fillRect(segment.x, segment.y, this.boxSize, this.boxSize);
		});
	}

	setDirection(direction) {
		this.direction = direction;
	}

	hasCollided(head) {
		return (head.x < 0 || head.x + this.boxSize > this.canvas.width)
			|| (head.y < 0 || head.y + this.boxSize > this.canvas.height);
	}

	eat() {
		this.snake.unshift(this._getNewHead());
	}

	getPosition() {
		return this.position;
	}

	setPosition(position) {
		this.position = position;
	}

	_getNewHead() {
		let headX = this.snake[0].x;
		let headY = this.snake[0].y;

		if (this.direction === 'LEFT') {
			headX -= this.boxSize;
		} else if (this.direction === 'RIGHT') {
			headX += this.boxSize;
		} else if (this.direction === 'DOWN') {
			headY += this.boxSize;
		} else if (this.direction === 'UP') {
			headY -= this.boxSize;
		}

		return { x: headX, y: headY };
	}

	move(direction) {
		if (!direction) {
			this.draw(this.snake[0]);
		} else {
			this.setDirection(direction);
			
			const head = this._getNewHead();
			this.draw(head);

			if (this.hasCollided(head)) {
				this.setPosition({});
			} else {
				this.setPosition(head);
			}
		}
	}
}