import Controllers from './game/Controllers';
import Food from './game/Food';
// import Game from './game/Game';
import Snake from './game/Snake';
import Canvas from './game/Canvas';

let direction;
const boxSize = 20;
const game = setInterval(play, 120);

/* CANVAS */
const canvas = new Canvas();
const ctx = canvas.getContext();

/* CONTROLLERS */
const controllers = new Controllers({ initialPosition: 'RIGHT' });

controllers.keyboardListener();

document.addEventListener('keydown', () => {
	direction = controllers.getDirection();
});


/* SNAKE */
const snake = new Snake({ 
	ctx, 
	canvas, 
	boxSize, 
	initialX: 0, 
	initialY: 15, 
	color: 'green', 
	game
});

snake.setSnakeOnCanvas();

/* FOOD */
const food = new Food(canvas, ctx, boxSize, 'red'); 
food.create();

/* PLAY */
function play() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	food.draw();
	snake.move(direction);
	const foodPosition = food.getPosition();
	const snakePosition = snake.getPosition();

	if (Object.keys(snakePosition).length === 0) {
		alert('Game Over!');
		clearInterval(game);
		location.reload();
	} else if ((snakePosition.x === foodPosition.x && snakePosition.y === foodPosition.y)) {
		food.create();
		food.draw();
		snake.eat();
	}
}














