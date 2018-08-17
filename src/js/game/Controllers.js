export default class Controllers {
	constructor({ controllers = {
		37: 'LEFT',
		38: 'UP',
		39: 'RIGHT',
		40: 'DOWN'
	}, initialDirection }) {
		this.controllers = controllers;
		this.direction = initialDirection;// initial snake direction
	}

	getControllers() {
		return this.controllers;
	}

	setControllers(controllers) {
		this.controllers = controllers;
	}

	getDirection() {
		return this.direction;
	}

	keyboardListener() {
		document.addEventListener('keydown', e => {
			Object.entries(this.controllers)
				.forEach(([controllerKey, controllerDirection]) => {
					if (e.keyCode === parseInt(controllerKey)) {
						if (this.direction === 'LEFT' && controllerDirection === 'RIGHT') {
							this.direction = 'LEFT';
						} else if (this.direction === 'RIGHT' && controllerDirection === 'LEFT') {
							this.direction = 'RIGHT';
						}	else if (this.direction === 'UP' && controllerDirection === 'DOWN') {
							this.direction = 'UP';
						} else if (this.direction === 'DOWN' && controllerDirection === 'UP') {
							this.direction = 'DOWN';
						} else {
							this.direction = controllerDirection;
						}
					}
				});
		});
	}
}