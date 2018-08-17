import Controllers from './game/Controllers';
import Food from './game/Food';
// import Game from './game/Game';
import Snake from './game/Snake';
import Canvas from './game/Canvas';

let direction;
const boxSize = 20;
const game = setInterval(play, 100);

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


const gameOver = () => {
	alert('Game Over!');
	clearInterval(game);
	location.reload();
};

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
		food.create();
		food.draw();
		snake.eat(); 
	}
}














