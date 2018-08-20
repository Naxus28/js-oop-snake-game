
# js-oop-snake-game

The classic snake game written in Javascript and HTML5 Canvas. 


## Index

1. [Foreword](https://github.com/Naxus28/js-oop-snake-game#foreword) 

2. [Next Steps](https://github.com/Naxus28/js-oop-snake-game#next-steps)  

3. [Getting Started](https://github.com/Naxus28/js-oop-snake-game#getting-started)  


## Foreword

It took me about 3.6 hrs to write the core code of this game (not including the time to set up gulp tasks). At the 3hr mark I had most of the code working, except that the snake was moving as a block (the whole body moving to the same side at once). I understand the instructions stated I should take 3hrs to complete the assessment but I knew I was close to getting the code to work so I took some extra time. I understand I may be penalized for it.

**Preparation Steps**

1. Although I had written a little Canvas race game back in 2013 when I first learned javascript I had forgotten almost everything about the Canvas API. My first step toward writting the snake game was to become more familiar with Canvas through the Mozilla Canvas tutorial and the Mozilla documentation about Canvas. 

2. Once I became more comfortable with Canvas, I took some time to think about how I would implement the actual code. Most tasks seemed reasonably simple to implement such as drawing the canvas, drawing food in random positions on the Canvas, and listening to keyboard events that controlled the snake. The most challenging piece of functionality was to make the snake move properly, which took me some time to figure out.

3. The third step in the "pre coding" stage was to implement some gulp tasks that would ease development and allow me to load javascript modules (I adapted tasks that I had already written for previous projects). This step also included installing the necessary npm packages and copying over an `.eslintrc.json` file and a `.gitignore` file that I have prepared for frontend projects.



**Implementation**

I took an OO approach because: 

1. I believe OOP is the best way to represent "real life" objects, making it very suitable for writing a game.

2. OOP allows for clean, modular, and scalable code.

3. In OOP, every class is (or should be) resposible for a single piece of the functionality, which makes code easier to reason about. Additionaly, classes encapsulate code, which prevents collision.


## Next Steps

**Code**

The first step would be to review the code and look for places to improve patterns before writting any new code. Below is a list of improvements I believe could be made on the current code:  

1. Snake Class/index.js: instead of passing `initialX` and `initialY` and calculating the inital position in the Snake class, the initial position code could be passed straight from the entry point file, which would make clearer what the initial position is without having to dig into the Snake class. 

2. I would like to have a Game class that handles some of the functionality currently on index.js. I don't know exactly what state and methods that class would hold but I would like it to controll at least the start and end of a game so it would certainly have a `start` and `end` methods. 

3. Pehaps find a better way to start the game without having two event listeners on "keydown".

4. Make sure classes have all getters and setters they should have.

5. Prevent new food from displaying under the snake's tail.

6. Currently the snake collides if the food displays on the corner because I am adding a new segment to the head of the snake. I would handle this edge case by changing the current code  so that a new segment is added to the tail--instead of the head--when the snake eats the food. It also seems more "natural" that the tail should grow instead of the head. Growing the tail would require keeping track of which direction it is moving, which would require comparing the tail's previous x and y positions with its current x and y positions (where `this.snake[this.snake.length-1]` is set to `this.previousTailPosition` every time the snake moves). This would be the code for such implementation:

```javascript
eat() {
	let currentTail = this.snake[this.snake.length-1];
	let tailX;
	let tailY;

	if (this.tailDirection === 'RIGHT') {
		tailX = currentTail.x - this.boxSize;
	} else if (this.tailDirection === 'LEFT') {
		tailX = currentTail.x + this.boxSize;
	} else if (this.tailDirection === 'UP') {
		tailY = currentTail.y - this.boxSize;
	} else  if(this.tailDirection === 'DOWN') {
		tailY = currentTail.y + this.boxSize;
	}

	let newTail = { x:tailX, y: tailY };
	this.snake.push(newTail);
}

move(direction) {
	if (!direction) {
		this._draw(this.snake[0]);
	} else {
		this._setDirection(direction);
		const head = this._getNewHead();
		this._draw(head);
		this.previousTailPosition = this.snake[this.snake.length-1];

		if (this.hasCollided(head)) {
			this._setPosition({});
		} else {
			this._setPosition(head);
		}
	}
}

getTailDirection(currentTailPosition) {
	let tailDirection = '';
	if (this.previousTailPosition.x < currentTailPosition.x) {
		this.tailDirection = 'RIGHT';
	} else if (this.previousTailPosition.x > currentTailPosition.x) {
		this.tailDirection = 'LEFT';
	} else if (this.previousTailPosition.y < currentTailPosition.y) {
		this.tailDirection = 'DOWN';
	} else if (this.previousTailPosition.y > currentTailPosition.y){
		this.tailDirection = 'UP';
	}

	return tailDirection;
}

```


**UI/UX(the game itself)**

1. The canvas size shold be responsive and the box size should adjust along with the canvas size to allow users to experience the game in multiple devices/screen sizes. This could be achieved through a combination of css breakpoints (canvas width and height) and javascript (box size changing for each of those breakpoints) or through changing both the canvas size and the box size via pure javascript.

2. Display some sort of UI controllers on tablets and mobile. On these devices javascript whould listen for touch events as opposed to key events.  

3. Improve the UI by refining the color pallete. 

3. Provide users with directions on how to play the game (like how to start a game). 

4. Implement a nicer "game over" UI (as opposed to an alert box). 

5. Improve the look of the snake (make it look more like a real snake).

6. Implement arrays of images that represent real food. These arrays would have such taxonomies as "animals", "fruits", "sweets", etc. Images would be randomly chosen from these arrays. These "foods" would bring more diversity to the game as well as they would allow for a richer scoring system. i.e. an apple may be worth 10 points while a pie may be worth 50 points, and so on. 

7. Allow users to choose different snake colors and scenery such as forest, mountain, city, countryside, beach, etc. The food would match the chosen scenary (i.e. animals and fruits in the forest, fish and sea animals at the beach, etc).

8. Implement sounds for movements, collision, and eating. 

9. Implement "score" and "lives" as well as different phases where some kind of "difficulty variant" is introduced such as obstacles, increased speed, predators, etc.

10. Implement time limit and minimum score to pass a phase. Users play a phase until they achieve the minimum score established for that phase within the time limit. They lose a life for every failed attempt. If a user is doing well, they are rewarded with food that is worth more points to help them complete a phase. 

11. Implement "bonus" phases where more than one piece of food is offered at the same time. 

12. Implement signup/login and "largest score" so different users can see how well they are doing in relation to one another. 



## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.


### Prerequisites

To run this project you need the following software installed on your system:

* [node.js and npm](https://nodejs.org/en/). Run `node -v` and `npm -v` on the terminal window to check if you have node and npm.

* [gulp cli](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). Run `gulp -v` on the terminal window to check if you have gulp-cli.

* [ruby](https://www.ruby-lang.org/en/downloads/). Run `ruby -v` on the terminal window to check if you have ruby (macs come with a ruby installation).


### Installation

Once download a  copy of this project to your machine, open a terminal window and:

```bash
$ npm install #npm postinstall will serve /builds/development on port 3000 (http://localhost:3000)
```


### Gulp: build and serve

Gulp is configured to build a "builds/development" directory


#### build the "builds/development" directory
```bash
$ gulp build
```

#### build and serve the "builds/development" directory
```bash
$ gulp serve
```


## Author

**Gabriel Ferraz** | Software Developer |  gabrielferraz27@gmail.com





