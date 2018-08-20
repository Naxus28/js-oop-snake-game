export default class Snake {
	constructor({ ctx, canvas, boxSize, initialX, initialY, color = '#1F5226' }) {
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
		this.position = this.snake[0]; // default to initial position
	}

	/* public methods */
	eat() {
		this.snake.unshift(this._getNewHead());
	}

	getBoxSize() {
		return this.boxSize;
	}

	setBoxSize(boxSize) {
		this.boxSize = boxSize;
	}

	getColor() {
		return this.color;
	}

	setColor(color) {
		this.color = color;
	}
	
	getPosition() {
		return this.position;
	}

	getSnake() {
		return this.snake;
	}

	hasCollided(head) {
		let tail = this.snake.length > 1 && this.snake.slice(1);
		let selfCollision = tail && tail.findIndex(segment => segment.x === head.x && segment.y === head.y) !== -1;
		let borderCollision = (head.x < 0 || head.x + this.boxSize > this.canvas.width) || (head.y < 0 || head.y + this.boxSize > this.canvas.height);
		
		return borderCollision || selfCollision;
	}

	move(direction) {
		if (!direction) {
			this._draw(this.snake[0]);
		} else {
			this._setDirection(direction);
			const head = this._getNewHead();
			this._draw(head);
			
			if (this.hasCollided(head)) {
				this._setPosition({});
			} else {
				
				this._setPosition(head);
			}
		}
	}

	setSnakeInitialPosition() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.initialX * this.boxSize, this.initialY * this.boxSize, this.boxSize, this.boxSize);
	}


	/* private methods */
	_draw(head) {
		this.snake.unshift(head);
		this.snake.pop();
		this.ctx.fillStyle = this.color;
		
		this.snake.forEach(segment => {
			this.ctx.fillRect(segment.x, segment.y, this.boxSize, this.boxSize);
		});
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

	_setDirection(direction) {
		this.direction = direction;
	}

	_setPosition(position) {
		this.position = position;
	}
}
