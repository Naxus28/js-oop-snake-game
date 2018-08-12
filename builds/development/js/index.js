(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

console.log('Game');

},{}],2:[function(require,module,exports){
'use strict';

console.log('KeyboardControllers');

},{}],3:[function(require,module,exports){
'use strict';

console.log('Hello from Snake');

},{}],4:[function(require,module,exports){
'use strict';

console.log('Stage');

},{}],5:[function(require,module,exports){
'use strict';

var _Game = require('./game/Game');

var _Game2 = _interopRequireDefault(_Game);

var _KeyboardControllers = require('./game/KeyboardControllers');

var _KeyboardControllers2 = _interopRequireDefault(_KeyboardControllers);

var _Snake = require('./game/Snake');

var _Snake2 = _interopRequireDefault(_Snake);

var _Stage = require('./game/Stage');

var _Stage2 = _interopRequireDefault(_Stage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./game/Game":1,"./game/KeyboardControllers":2,"./game/Snake":3,"./game/Stage":4}]},{},[5]);

//# sourceMappingURL=index.js.map
