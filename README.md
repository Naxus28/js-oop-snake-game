
# js-oop-snake-game

The classic snake game written in Javascript and HTML5 Canvas. 


## Foreword

It took me about 3.5 hrs to write the core code of this game (not including the time to set up gulp tasks). At the 3hr mark I had most of the code working, except that the snake was moving as a block (the whole body moving to the same side at once). I understand the instructions stated I should take 3hrs to complete the assessment but I knew I was close to getting the code to work so I took some extra time. I understand if I am penalized for it.

**Steps**

1. Although I wrote a little race game back in 2013 when I first learned javascript but I had forgotten almost everything about the Canvas API. My first step toward writting the game was to become more familiar with Canvas through the Mozilla Canvas tutorial and the Mozilla documentation on Canvas. 

2. Before writting the code I took some time to think about possible solutions for the problem. Most tasks seemed reasonably simple to implement such as drawing the canvas, drawing food in random positions on the Canvas, and listening to keyboard events that would control the snake. The most challenging piece of functionality was to make the snake move properly, which took me some time to figure out.

3. Implement some gulp tasks that would ease development and allow me to load modules.




**Implementation**


As far as the code implementation, I took an OO approach because: 

1. I believe OOP is the best way to represent "real life" objects, making it very suitable for writing a game.

2. OOP allows for cleaner, modular, and scalable code.

3. In OOP every class is resposible for a single piece of the functionality, which makes it easier to reason about it. Additionaly, encapsulation prevents code collision.


## Next Steps

**Code**

The first step would be review the code and look for places to improve patterns before writting any new code. Perhaps some of the code could profit from some refactoring:  

1. Snake Class/index.js: instead of passing `initialX` and `initialY` and calculating the inital position in the Snake class, the codE could pass the initial position straight from the entry point file, which would make it clearer what the initial position is without having to dig into the snake class. 

2. I would like to have a Game class that handles some of the functionality currently on index.js. I don't know exactly what state and methods would be held in that class but I would like it to controll at least the start and end of a game so I imaged the class would have at least a `start` or `play` method and `end` method. 

3. Make sure classes have all getters and setters they should have.


**UI/UX(the game itself)**

1. The canvas size shold be responsive and the box size should adjust along with the canvas size to allow users to experience the game in multiple divices/screen sizes. That could be achieved through a combination of css breakpoints (canvas widht and height) and javascript (box size changing for each of thos breakpoints) or through changing both the canvas size and the box size through pure javascript.

2. Improve the UI by refining the color pallete. 

3. Improve the look of the snake (make it look like a real snake).

4. Tables and mobile would need to display some sort of UI controllers. On these devices javascript whould listen for touch events as opposed to key events.  

5. Implement "score" and "lives" to the game as well as different phases where some kind of "difficulty variant" is introduced such as obstacles, increased speed, predators, etc.

6. Implementation of arrays of images that represent real food. These arrays would have such taxonomies as "animals", "fruits", "sweets", etc. These "foods" would bring more diversity to the game as well as they would allow for a richer scoring system. i.e. an apple may be worth 10 points while a pie may be worth 50 points, and so on. 

7. Allow user to choose different snake colors and scenery such as forest, mountain, city, countryside, beach, etc. The food would match the chosen scenary (i.e. animals and fruits in the forest, fish and sea animals at the beach, etc).

8. Implement time limit and minimum score to pass a phase. If the user is doing well, rewarded them with food that is worth more points to help them complete the phase. Users play a phase until they achieve the minimum score established for that phase within the time limit. They lose a life for every failed attempt.

9. Implement "bonus" phase where more than one piece of food is offered at the same time. 

10. Implement signup/login and "largest score" so different users can see how they are doing in relation to one another. 






## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine 


### Prerequisites

To run this project you need the following software installed on your system:

* [node.js and npm](https://nodejs.org/en/). Run `node -v` and `npm -v` on the terminal window to check if you have node and npm.

* [gulp cli](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). Run `gulp -v` on the terminal window to check if you have gulp-cli.

* [ruby](https://www.ruby-lang.org/en/downloads/). Run `ruby -v` on the terminal window to check if you have ruby (macs come with a ruby installation).


### Installation

Open a terminal window and:

```bash
$ cd ~/Sites #or wherever you keep your projects

$ git clone https://github.com/Naxus28/jquery-gulp-seed.git

$ cd js-oop-snake-game

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

**Gabriel Ferraz** | gabrielferraz27@gmail.com





