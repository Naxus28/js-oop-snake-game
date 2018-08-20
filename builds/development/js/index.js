(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
	function Canvas() {
		var canvasId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'snake-game';
		var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
		var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 600;

		_classCallCheck(this, Canvas);

		this.canvasId = canvasId;
		this.width = width;
		this.height = height;
		this.canvas = this.createCanvas();
	}

	_createClass(Canvas, [{
		key: 'createCanvas',
		value: function createCanvas() {
			var canvas = document.getElementById(this.canvasId);
			canvas.height = this.height;
			canvas.width = this.width;

			return canvas;
		}
	}, {
		key: 'getContext',
		value: function getContext() {
			if (!this.canvas.getContext) {
				alert('Your browser doesn\'t support HTML5 Canvas.');
				return;
			} else {
				return this.canvas.getContext('2d');
			}
		}
	}, {
		key: 'getCanvasId',
		value: function getCanvasId() {
			return this.canvasId;
		}
	}, {
		key: 'setCanvasId',
		value: function setCanvasId(canvasId) {
			this.canvasId = canvasId;
		}
	}, {
		key: 'getCanvas',
		value: function getCanvas() {
			return this.canvas;
		}
	}, {
		key: 'setCanvas',
		value: function setCanvas(canvas) {
			this.canvas = canvas;
		}
	}, {
		key: 'getWidth',
		value: function getWidth() {
			return this.width;
		}
	}, {
		key: 'setWidth',
		value: function setWidth(width) {
			this.width = width;
		}
	}, {
		key: 'getHeight',
		value: function getHeight() {
			return this.height;
		}
	}, {
		key: 'setHeight',
		value: function setHeight(height) {
			this.height = height;
		}
	}]);

	return Canvas;
}();

exports.default = Canvas;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controllers = function () {
	function Controllers(_ref) {
		var _ref$controllers = _ref.controllers,
		    controllers = _ref$controllers === undefined ? {
			37: 'LEFT',
			38: 'UP',
			39: 'RIGHT',
			40: 'DOWN'
		} : _ref$controllers,
		    _ref$initialDirection = _ref.initialDirection,
		    initialDirection = _ref$initialDirection === undefined ? 'RIGHT' : _ref$initialDirection;

		_classCallCheck(this, Controllers);

		this.controllers = controllers;
		this.direction = initialDirection; // initial snake direction
	}

	_createClass(Controllers, [{
		key: 'getControllers',
		value: function getControllers() {
			return this.controllers;
		}
	}, {
		key: 'setControllers',
		value: function setControllers(controllers) {
			this.controllers = controllers;
		}
	}, {
		key: 'getDirection',
		value: function getDirection() {
			return this.direction;
		}
	}, {
		key: 'keyboardListener',
		value: function keyboardListener() {
			var _this = this;

			document.addEventListener('keydown', function (e) {
				for (var key in _this.controllers) {
					var controllerDirection = _this.controllers[key];

					if (e.keyCode === parseInt(key)) {
						if (_this.direction === 'LEFT' && controllerDirection === 'RIGHT') {
							_this.direction = 'LEFT';
						} else if (_this.direction === 'RIGHT' && controllerDirection === 'LEFT') {
							_this.direction = 'RIGHT';
						} else if (_this.direction === 'UP' && controllerDirection === 'DOWN') {
							_this.direction = 'UP';
						} else if (_this.direction === 'DOWN' && controllerDirection === 'UP') {
							_this.direction = 'DOWN';
						} else {
							_this.direction = controllerDirection;
						}
					}
				}
			});
		}
	}]);

	return Controllers;
}();

exports.default = Controllers;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Food = function () {
	function Food(_ref) {
		var canvas = _ref.canvas,
		    ctx = _ref.ctx,
		    boxSize = _ref.boxSize,
		    _ref$color = _ref.color,
		    color = _ref$color === undefined ? 'red' : _ref$color;

		_classCallCheck(this, Food);

		this.boxSize = boxSize;
		this.canvas = canvas;
		this.ctx = ctx;
		this.color = color;
		this.food;
	}

	_createClass(Food, [{
		key: 'getColor',
		value: function getColor() {
			return this.color;
		}
	}, {
		key: 'setColor',
		value: function setColor(color) {
			this.color = color;
		}
	}, {
		key: 'create',
		value: function create() {
			var boxCountOnXAxis = this.canvas.width / this.boxSize;
			var boxCountOnYAxis = this.canvas.height / this.boxSize;

			var foodX = Math.floor(Math.random() * boxCountOnXAxis) * this.boxSize;
			var foodY = Math.floor(Math.random() * boxCountOnYAxis) * this.boxSize;

			this.food = { x: foodX, y: foodY };
		}
	}, {
		key: 'draw',
		value: function draw() {
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.food.x, this.food.y, this.boxSize, this.boxSize);
		}
	}, {
		key: 'getPosition',
		value: function getPosition() {
			return this.food;
		}
	}]);

	return Food;
}();

exports.default = Food;

},{}],4:[function(require,module,exports){
"use strict";

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
	function Snake(_ref) {
		var ctx = _ref.ctx,
		    canvas = _ref.canvas,
		    boxSize = _ref.boxSize,
		    initialX = _ref.initialX,
		    initialY = _ref.initialY,
		    _ref$color = _ref.color,
		    color = _ref$color === undefined ? '#1F5226' : _ref$color;

		_classCallCheck(this, Snake);

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


	_createClass(Snake, [{
		key: 'eat',
		value: function eat() {
			this.snake.unshift(this._getNewHead());
		}
	}, {
		key: 'getBoxSize',
		value: function getBoxSize() {
			return this.boxSize;
		}
	}, {
		key: 'setBoxSize',
		value: function setBoxSize(boxSize) {
			this.boxSize = boxSize;
		}
	}, {
		key: 'getColor',
		value: function getColor() {
			return this.color;
		}
	}, {
		key: 'setColor',
		value: function setColor(color) {
			this.color = color;
		}
	}, {
		key: 'getPosition',
		value: function getPosition() {
			return this.position;
		}
	}, {
		key: 'getSnake',
		value: function getSnake() {
			return this.snake;
		}
	}, {
		key: 'hasCollided',
		value: function hasCollided(head) {
			var tail = this.snake.length > 1 && this.snake.slice(1);
			var selfCollision = tail && tail.findIndex(function (segment) {
				return segment.x === head.x && segment.y === head.y;
			}) !== -1;
			var borderCollision = head.x < 0 || head.x + this.boxSize > this.canvas.width || head.y < 0 || head.y + this.boxSize > this.canvas.height;

			return borderCollision || selfCollision;
		}
	}, {
		key: 'move',
		value: function move(direction) {
			if (!direction) {
				this._draw(this.snake[0]);
			} else {
				this._setDirection(direction);
				var head = this._getNewHead();

				if (this.hasCollided(head)) {
					this._setPosition({});
				} else {
					this._draw(head);
					this._setPosition(head);
				}
			}
		}
	}, {
		key: 'setSnakeInitialPosition',
		value: function setSnakeInitialPosition() {
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.initialX * this.boxSize, this.initialY * this.boxSize, this.boxSize, this.boxSize);
		}

		/* private methods */

	}, {
		key: '_draw',
		value: function _draw(head) {
			var _this = this;

			this.snake.unshift(head);
			this.snake.pop();
			this.ctx.fillStyle = this.color;

			this.snake.forEach(function (segment) {
				_this.ctx.fillRect(segment.x, segment.y, _this.boxSize, _this.boxSize);
			});
		}
	}, {
		key: '_getNewHead',
		value: function _getNewHead() {
			var headX = this.snake[0].x;
			var headY = this.snake[0].y;

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
	}, {
		key: '_setDirection',
		value: function _setDirection(direction) {
			this.direction = direction;
		}
	}, {
		key: '_setPosition',
		value: function _setPosition(position) {
			this.position = position;
		}
	}]);

	return Snake;
}();

exports.default = Snake;

},{}],6:[function(require,module,exports){
'use strict';

var _Controllers = require('./game/Controllers');

var _Controllers2 = _interopRequireDefault(_Controllers);

var _Food = require('./game/Food');

var _Food2 = _interopRequireDefault(_Food);

var _Snake = require('./game/Snake');

var _Snake2 = _interopRequireDefault(_Snake);

var _Canvas = require('./game/Canvas');

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var direction = void 0;
var boxSize = 20;

/* CANVAS */
var canvas = new _Canvas2.default();
var ctx = canvas.getContext();

/* CONTROLLERS */
var controllers = new _Controllers2.default({});

controllers.keyboardListener();

document.addEventListener('keydown', function () {
	direction = controllers.getDirection();
});

/* SNAKE */
var snake = new _Snake2.default({
	ctx: ctx,
	canvas: canvas,
	initialX: 0,
	initialY: 15,
	boxSize: boxSize,
	game: game
});

snake.setSnakeInitialPosition();

/* FOOD */
var food = new _Food2.default({ canvas: canvas, boxSize: boxSize, ctx: ctx });
food.create();

var gameOver = function gameOver() {
	alert('Game Over!');
	clearInterval(game);
	location.reload();
};

var game = setInterval(play, 100);

/* PLAY */
function play() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// draw food and get position
	food.draw();
	var foodPosition = food.getPosition();

	// move snake and get position
	snake.move(direction);
	var snakePosition = snake.getPosition();
	var collided = Object.keys(snakePosition).length === 0;

	// check next action
	if (collided) {
		gameOver();
	} else if (snakePosition.x === foodPosition.x && snakePosition.y === foodPosition.y) {
		food.create();
		food.draw();
		snake.eat();
	}
}

},{"./game/Canvas":1,"./game/Controllers":2,"./game/Food":3,"./game/Snake":5}]},{},[1,2,3,4,5,6])

//# sourceMappingURL=index.js.map
