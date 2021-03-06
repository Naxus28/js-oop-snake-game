import Controllers from './game/Controllers';
import Food from './game/Food';
import Snake from './game/Snake';
import Canvas from './game/Canvas';

let direction;
const boxSize = 20;

/* CANVAS */
const canvas = new Canvas();
const ctx = canvas.getContext();

/* CONTROLLERS */
const controllers = new Controllers({});

controllers.keyboardListener();

document.addEventListener('keydown', () => {
	direction = controllers.getDirection();
});

/* SNAKE */
const snake = new Snake({ 
	ctx, 
	canvas, 
	initialX: 0, 
	initialY: 15, 
	boxSize,
	game
});

snake.setSnakeInitialPosition();

/* FOOD */
const food = new Food({ canvas, boxSize, ctx }); 
food.create();


const gameOver = () => {
	alert('Game Over!');
	clearInterval(game);
	location.reload();
};

const game = setInterval(play, 100);

/* PLAY */
function play() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// draw food and get position
	food.draw();
	const foodPosition = food.getPosition();

	// move snake and get position
	snake.move(direction);
	const snakePosition = snake.getPosition();
	const collided = Object.keys(snakePosition).length === 0;

	// check next action
	if (collided) {
		gameOver();
	} else if ((snakePosition.x === foodPosition.x && snakePosition.y === foodPosition.y)) {
		snake.eat(); 
		food.create();
		food.draw();
	}
}














