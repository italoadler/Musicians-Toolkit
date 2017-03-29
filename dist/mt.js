(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["es6Boilerplate"] = factory();
	else
		root["es6Boilerplate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var MusiciansToolkit = __webpack_require__(1);
	window.mt = new MusiciansToolkit();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _applyConstructor = function (Constructor, args) { var instance = Object.create(Constructor.prototype); var result = Constructor.apply(instance, args); return result != null && (typeof result == "object" || typeof result == "function") ? result : instance; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interfaces = _interopRequire(__webpack_require__(2));
	
	var math = _interopRequire(__webpack_require__(5));
	
	//import dom from './util/dom';
	
	var Rack = _interopRequire(__webpack_require__(41));
	
	var Time = _interopRequire(__webpack_require__(43));
	
	var Tune = _interopRequire(__webpack_require__(48));
	
	//import RangeModel from './models/range';
	
	var Counter = __webpack_require__(30);
	var Radio = __webpack_require__(50);
	var Drunk = __webpack_require__(31);
	var Sequence = __webpack_require__(51);
	/*let StepRange = require('./models/range');
	let StepNumber = require('./models/step');
	let Matrix = require('./models/matrix');
	
	let Binary = require('./models/toggle');
	 */
	
	/**
	Musician's Toolkit => created as mt
	*/
	
	var MusiciansToolkit = (function () {
	    function MusiciansToolkit(context) {
	        _classCallCheck(this, MusiciansToolkit);
	
	        for (var key in Interfaces) {
	            this[key] = Interfaces[key];
	        }
	        for (key in math) {
	            this[key] = math[key];
	        }
	
	        var DefaultContext = window.AudioContext || window.webkitAudioContext;
	        this.context = context || new DefaultContext();
	
	        this.time = new Time(this.context);
	        this.tune = new Tune();
	
	        this.colors = 0;
	    }
	
	    _createClass(MusiciansToolkit, {
	        rack: {
	            value: function rack(parent, title, open) {
	                return new Rack(parent, title, open);
	            }
	        },
	        counter: {
	            value: function counter(min, max, mode, value) {
	                return new Counter(min, max, mode, value);
	            }
	        },
	        radio: {
	            value: function radio(length) {
	                for (var _len = arguments.length, onVals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    onVals[_key - 1] = arguments[_key];
	                }
	
	                return _applyConstructor(Radio, [length].concat(onVals));
	            }
	        },
	        drunk: {
	            value: function drunk(min, max, value, increment, loop) {
	                return new Drunk(min, max, value, increment, loop);
	            }
	        },
	        sequence: {
	            value: (function (_sequence) {
	                var _sequenceWrapper = function sequence(_x, _x2, _x3, _x4) {
	                    return _sequence.apply(this, arguments);
	                };
	
	                _sequenceWrapper.toString = function () {
	                    return _sequence.toString();
	                };
	
	                return _sequenceWrapper;
	            })(function (sequence, mode, position, cacheSize) {
	                return new Sequence(sequence, mode, position, cacheSize);
	            })
	        }
	    });
	
	    return MusiciansToolkit;
	})();
	
	module.exports = MusiciansToolkit;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	  Position: __webpack_require__(3),
	  Slider: __webpack_require__(14),
	  Toggle: __webpack_require__(15),
	  Range: __webpack_require__(16),
	  Waveform: __webpack_require__(20),
	  Button: __webpack_require__(21),
	  TextButton: __webpack_require__(23),
	  RadioButton: __webpack_require__(24),
	  Number: __webpack_require__(25),
	  Dial: __webpack_require__(26),
	  Piano: __webpack_require__(27),
	  Matrix: __webpack_require__(28),
	  Pan3D: __webpack_require__(32),
	  Tilt: __webpack_require__(33),
	  Multislider: __webpack_require__(35),
	  Pan: __webpack_require__(36),
	  Envelope: __webpack_require__(37),
	  Spectrogram: __webpack_require__(38),
	  Meter: __webpack_require__(39),
	  Oscilloscope: __webpack_require__(40)
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	var Position = (function (_Interface) {
	  function Position() {
	    _classCallCheck(this, Position);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [200, 200],
	      mode: "absolute"
	      //scaleX, scaleY
	      //valueX, valueY
	      //stepX, stepY
	    };
	
	    _get(Object.getPrototypeOf(Position.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._value = {
	      x: new Step(0, 1, 0, 0.5),
	      y: new Step(0, 1, 0, 0.5)
	    };
	
	    this.mode = this.settings.mode;
	
	    this.position = {
	      x: new Interaction.Handle(this.mode, "horizontal", [0, this.width], [this.height, 0]),
	      y: new Interaction.Handle(this.mode, "vertical", [0, this.width], [this.height, 0])
	    };
	    this.position.x.value = this._value.x.normalized;
	    this.position.y.value = this._value.y.normalized;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Position, _Interface);
	
	  _createClass(Position, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.knob = svg.create("circle");
	        this.element.appendChild(this.knob);
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.position.x.resize([0, this.width], [this.height, 0]);
	        this.position.y.resize([0, this.width], [this.height, 0]);
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        this.knobRadius = {
	          off: ~ ~(this._minDimension / 100) * 5 + 5 };
	        this.knobRadius.on = this.knobRadius.off * 2;
	
	        this.knob.setAttribute("cx", this.width / 2);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobRadius.off);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	        this.knob.setAttribute("fill", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        if (this.clicked) {
	          //  this.knobRadius = 30;
	          this.knob.setAttribute("r", this.knobRadius.on);
	        } else {
	          //  this.knobRadius = 15;
	          this.knob.setAttribute("r", this.knobRadius.off);
	        }
	
	        this.knobCoordinates = {
	          x: this._value.x.normalized * this.width,
	          y: this.height - this._value.y.normalized * this.height
	        };
	
	        this.knob.setAttribute("cx", this.knobCoordinates.x);
	        this.knob.setAttribute("cy", this.knobCoordinates.y);
	      }
	    },
	    click: {
	      value: function click() {
	        this.position.x.anchor = this.mouse;
	        this.position.y.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.x.update(this.mouse);
	          this.position.y.update(this.mouse);
	          this.value = {
	            x: this._value.x.updateNormal(this.position.x.value),
	            y: this._value.y.updateNormal(this.position.y.value)
	          };
	          this.emit("change", this.value);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    value: {
	      get: function () {
	        return {
	          x: this._value.x.value,
	          y: this._value.y.value
	        };
	      },
	      set: function (value) {
	        return {
	          x: this._value.x.update(value.x),
	          y: this._value.y.update(value.y)
	        };
	      }
	    },
	    normalized: {
	      get: function () {
	        return {
	          x: this._value.x.normalized,
	          y: this._value.y.normalized
	        };
	      }
	    }
	  });
	
	  return Position;
	})(Interface);
	
	module.exports = Position;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var math = __webpack_require__(5);
	
	module.exports = {
	
	  create: function (type) {
	    return document.createElementNS("http://www.w3.org/2000/svg", type);
	  },
	
	  arc: function (x, y, radius, startAngle, endAngle) {
	
	    var start = math.toCartesian(radius, endAngle);
	    var end = math.toCartesian(radius, startAngle);
	
	    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
	
	    var d = ["M", start.x + x, start.y + y, "A", radius, radius, 0, largeArcFlag, 0, end.x + x, end.y + y].join(" ");
	
	    return d;
	  },
	
	  radialGradient: function (defs, numberOfStops) {
	
	    var id = "gradient" + math.ri(100000000000);
	    var stops = [];
	
	    var gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
	    gradient.setAttribute("id", id);
	    gradient.setAttribute("cx", "50%");
	    gradient.setAttribute("cy", "50%");
	    gradient.setAttribute("r", "50%");
	
	    defs.appendChild(gradient);
	
	    for (var i = 0; i < numberOfStops; i++) {
	      var _stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
	      _stop.setAttribute("id", "stop" + i);
	      //stop.setAttribute('offset', '70%');
	      //stop.setAttribute('stop-color', 'White');
	      gradient.appendChild(_stop);
	      stops.push(_stop);
	    }
	
	    return {
	      id: id,
	      stops: stops,
	      element: gradient
	    };
	  }
	
	};
	
	/* */

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	exports.clip = function (value, min, max) {
	  return Math.min(Math.max(value, min), max);
	};
	
	exports.normalize = function (value, min, max) {
	  return (value - min) / (max - min);
	};
	
	exports.scale = function (inNum, inMin, inMax, outMin, outMax) {
	  return (inNum - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
	};
	
	exports.toPolar = function (x, y) {
	  var r = Math.sqrt(x * x + y * y);
	
	  var theta = Math.atan2(y, x);
	  if (theta < 0) {
	    theta = theta + 2 * Math.PI;
	  }
	  return { radius: r, angle: theta };
	};
	
	exports.toCartesian = function (radius, angle) {
	  var cos = Math.cos(angle);
	  var sin = Math.sin(angle);
	  return { x: radius * cos, y: radius * sin * -1 };
	};
	/*
	exports.polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
	
	  return {
	    x: centerX + (radius * Math.cos(angleInRadians)),
	    y: centerY + (radius * Math.sin(angleInRadians))
	  };
	}  */
	
	exports.prune = function (data, scale) {
	  return parseFloat(data.toFixed(scale));
	};
	
	exports.invert = function (inNum) {
	  return exports.scale(inNum, 1, 0, 0, 1);
	};
	
	exports.mtof = function (midi) {
	  return Math.pow(2, (midi - 69) / 12) * 440;
	};
	/*
	exports.ri = function(scale) {
	  return Math.floor(Math.random() * scale);
	};
	
	exports.rf = function(scale) {
	  return Math.random() * scale;
	}; */
	
	exports.interp = function (loc, min, max) {
	  return loc * (max - min) + min;
	};
	
	exports.pick = function () {
	  return arguments[~ ~(Math.random() * arguments.length)];
	};
	
	exports.octave = function (num) {
	  return Math.pow(2, num);
	};
	
	exports.ri = function (bound1, bound2) {
	  if (!bound2) {
	    bound2 = bound1;
	    bound1 = 0;
	  }
	  var low = Math.min(bound1, bound2);
	  var high = Math.max(bound1, bound2);
	  return Math.floor(Math.random() * (high - low) + low);
	};
	
	exports.rf = function (bound1, bound2) {
	  if (!bound2) {
	    bound2 = bound1;
	    bound1 = 0;
	  }
	  var low = Math.min(bound1, bound2);
	  var high = Math.max(bound1, bound2);
	  return Math.random() * (high - low) + low;
	};
	
	exports.cycle = function (input, min, max) {
	  input++;
	  if (input >= max) {
	    input = min;
	  }
	  return input;
	};
	
	exports.average = function (data) {
	  var total = 0;
	  for (var i = 0; i < data.length; i++) {
	    total += data[i];
	  }
	  return total / data.length;
	};
	
	exports.distance = function (x1, y1, x2, y2) {
	  var a = x1 - x2;
	  var b = y1 - y2;
	  return Math.sqrt(a * a + b * b);
	};
	
	exports.gainToDB = function (gain) {
	  return 20 * Math.log10(gain);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var dom = __webpack_require__(7);
	var util = __webpack_require__(8);
	var touch = __webpack_require__(9);
	var EventEmitter = __webpack_require__(10);
	
	var Interface = (function (_EventEmitter) {
	  function Interface(args, options, defaults) {
	    _classCallCheck(this, Interface);
	
	    _get(Object.getPrototypeOf(Interface.prototype), "constructor", this).call(this);
	    this.settings = this.parseSettings(args, options, defaults);
	    this.mouse = {};
	    this.wait = false;
	    this._colors = {};
	    this.colors = Object.defineProperties({
	      fill: "#e6e6e6", // should be e6e6e6
	      accent: "#d18",
	      dark: "#444",
	      border: "#ccc"
	    }, {
	      test: {
	        set: function (v) {
	          this._colors.dark = v;
	          this.colorInterface();
	        },
	        get: function () {
	          return this._colors.dark;
	        },
	        configurable: true,
	        enumerable: true
	      }
	    });
	  }
	
	  _inherits(Interface, _EventEmitter);
	
	  _createClass(Interface, {
	    parseSettings: {
	      value: function parseSettings(args, options, defaults) {
	
	        options.unshift("target");
	        defaults.defaultSize = defaults.size.splice(0, 2);
	        defaults.size = false;
	
	        var settings = {
	          target: document.body,
	          colors: {}, // should inherit from a colors module,
	          snapWithParent: true,
	          event: console.log.bind(console),
	          component: false
	        };
	
	        for (var key in defaults) {
	          settings[key] = defaults[key];
	        }
	
	        for (var i = 0; i < args.length; i++) {
	          // grabs the next argument
	          var setting = args[i];
	          // if it's an object, it must be the settings object
	          if (util.isObject(setting)) {
	            for (var key in setting) {
	              settings[key] = setting[key];
	            }
	            // if it's a function, it must be the event setting
	          } else if (typeof setting === "function") {
	            settings.event = setting;
	            // otherwise, consider it one of the widget's custom options
	          } else if (options.length >= 1) {
	            // grab the first option -- i.e. 'target'
	            var key = options.splice(0, 1)[0];
	            settings[key] = setting;
	          }
	        }
	
	        // handle common settings
	        // ... target, colors, event, sizing...
	
	        // target
	
	        if (typeof settings.target === "string") {
	          this.parent = document.getElementById(settings.target.replace("#", ""));
	        } else if (settings.target instanceof HTMLElement) {
	          this.parent = settings.target;
	        } else if (settings.target instanceof SVGElement) {
	          this.parent = settings.target;
	        }
	
	        if (this.parent && this.parent instanceof HTMLElement && !settings.component) {
	          if (this.parent.className) {
	            this.parent.className += " mt-ui";
	          } else {
	            this.parent.className = "mt-ui";
	          }
	        }
	
	        // size
	
	        if (settings.size && Array.isArray(settings.size) && settings.snapWithParent) {
	          this.width = settings.size[0];
	          this.height = settings.size[1];
	          this.parent.style.width = this.width;
	          this.parent.style.height = this.height;
	        } else if (settings.snapWithParent) {
	          this.width = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("width").replace("px", ""));
	          this.height = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("height").replace("px", ""));
	          //  if (!this.width || !this.parent.style.width) {
	          if (!this.width) {
	            this.width = settings.defaultSize[0];
	            this.parent.style.width = this.width + "px";
	          }
	          //  if (!this.height || !this.parent.style.height) {
	          if (!this.height) {
	            this.height = settings.defaultSize[1];
	            this.parent.style.height = this.height + "px";
	          }
	          //  this.width = this.width && this.parent.style.width ? this.width : settings.defaultSize[0];
	          //  this.height = this.height && this.parent.style.width  ? this.height : settings.defaultSize[1];
	        } else {
	          settings.size = settings.defaultSize;
	          this.width = settings.size[0];
	          this.height = settings.size[1];
	        }
	
	        // event
	
	        if (settings.event) {
	          this.event = this.on("change", settings.event);
	        } else {
	          this.event = false;
	        }
	
	        return settings;
	      }
	    },
	    init: {
	      value: function init() {
	        this.buildFrame();
	        this.attachListeners();
	        this.buildInterface();
	        //this.sizeInterface(); should probably add this here instead of in each interface
	        this.colorInterface();
	        //or
	        //this.update.build()
	        //this.update.size()
	        //this.update.colors()
	        //or this.render.state()
	        this.finalTouches();
	      }
	    },
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {}
	    },
	    sizeInterface: {
	      value: function sizeInterface() {}
	    },
	    colorInterface: {
	      value: function colorInterface() {}
	    },
	    attachListeners: {
	      value: function attachListeners() {
	        var _this = this;
	
	        // Setup interaction
	        if (touch.exists) {
	          this.element.addEventListener("touchstart", function (evt) {
	            return _this.preTouch(evt);
	          });
	          this.element.addEventListener("touchmove", function (evt) {
	            return _this.preTouchMove(evt);
	          });
	          this.element.addEventListener("touchend", function (evt) {
	            return _this.preTouchRelease(evt);
	          });
	        }
	        this.boundPreMove = function (evt) {
	          return _this.preMove(evt);
	        };
	        this.boundPreRelease = function (evt) {
	          return _this.preRelease(evt);
	        };
	        this.element.addEventListener("mousedown", function (evt) {
	          return _this.preClick(evt);
	        });
	      }
	    },
	    finalTouches: {
	      value: function finalTouches() {
	        this.element.style.cursor = "pointer";
	      }
	    },
	    preClick: {
	      value: function preClick(e) {
	        // 10000 getComputedStyle calls takes 100 ms.
	        // .:. one takes about .01ms
	        if (this.element instanceof HTMLElement) {
	          this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
	        }
	        // 10000 getComputedStyle calls takes 40 ms.
	        // .:. one takes about .004ms
	        this.offset = dom.findPosition(this.element);
	        this.mouse = dom.locateMouse(e, this.offset);
	        this.clicked = true;
	        this.click();
	        this.moveEvent = document.addEventListener("mousemove", this.boundPreMove);
	        this.releaseEvent = document.addEventListener("mouseup", this.boundPreRelease);
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preMove: {
	      value: function preMove(e) {
	        var _this = this;
	
	        if (!this.wait) {
	          this.mouse = dom.locateMouse(e, this.offset);
	          this.move();
	          this.wait = true;
	          setTimeout(function () {
	            _this.wait = false;
	          }, 25);
	        }
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preRelease: {
	      value: function preRelease(e) {
	        this.mouse = dom.locateMouse(e, this.offset);
	        this.clicked = false;
	        this.release();
	        document.removeEventListener("mousemove", this.boundPreMove);
	        document.removeEventListener("mouseup", this.boundPreRelease);
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    click: {
	      value: function click() {}
	    },
	    move: {
	      value: function move() {}
	    },
	    release: {
	      value: function release() {}
	    },
	    preTouch: {
	
	      /* touch */
	
	      value: function preTouch(e) {
	        if (this.element instanceof HTMLElement) {
	          this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
	        }
	        this.offset = dom.findPosition(this.element);
	        this.mouse = dom.locateTouch(e, this.offset);
	        this.clicked = true;
	        this.touch(e);
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preTouchMove: {
	      value: function preTouchMove(e) {
	        if (this.clicked) {
	          /*    if (!this.wait) {
	                this.mouse = dom.locateTouch(e,this.offset);
	                this.move();
	                this.wait = true;
	                setTimeout(() => { this.wait = false; },25);
	              } */
	          this.mouse = dom.locateTouch(e, this.offset);
	          this.touchMove();
	          e.preventDefault();
	          e.stopPropagation();
	        }
	      }
	    },
	    preTouchRelease: {
	      value: function preTouchRelease(e) {
	        //  if (e.targetTouches.length<=1) {
	        this.mouse = dom.locateTouch(e, this.offset);
	        this.clicked = false;
	        this.touchRelease();
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    touch: {
	      value: function touch() {
	        this.click();
	      }
	    },
	    touchMove: {
	      value: function touchMove() {
	        this.move();
	      }
	    },
	    touchRelease: {
	      value: function touchRelease() {
	        this.release();
	      }
	    },
	    resize: {
	      value: function resize(w, h) {
	        this.width = w;
	        this.height = h;
	        this.parent.style.width = this.width + "px";
	        this.parent.style.height = this.height + "px";
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.sizeInterface();
	      }
	    },
	    empty: {
	      value: function empty() {
	        while (this.element.lastChild) {
	          this.element.removeChild(this.element.lastChild);
	        }
	      }
	    },
	    destroy: {
	      value: function destroy() {
	        this.empty();
	        this.parent.removeChild(this.element);
	        this.removeAllListeners();
	        if (this.instrument) {
	          delete this.instrument.ui[this.id];
	        }
	      }
	    }
	  });
	
	  return Interface;
	})(EventEmitter);
	
	module.exports = Interface;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports.findPosition = function (el) {
	  var viewportOffset = el.getBoundingClientRect();
	  var top = viewportOffset.top + window.scrollY;
	  var left = viewportOffset.left + window.scrollX;
	  return { top: top, left: left };
	};
	
	exports.parseElement = function (parent) {
	  if (typeof parent === "string") {
	    parent = document.getElementById(parent);
	  }
	
	  if (parent instanceof HTMLElement) {
	    return parent;
	  } else {
	    return "No valid parent argument";
	  }
	};
	
	exports.locateMouse = function (e, offset) {
	  return {
	    x: e.pageX - offset.left,
	    y: e.pageY - offset.top
	  };
	};
	
	exports.locateTouch = function (e, offset) {
	  return {
	    x: e.targetTouches.length ? e.targetTouches[0].pageX - offset.left : false,
	    y: e.targetTouches.length ? e.targetTouches[0].pageY - offset.top : false
	  };
	};
	
	exports.SmartCanvas = function (parent) {
	  var _this = this;
	
	  this.element = document.createElement("canvas");
	  this.context = this.element.getContext("2d");
	  parent.appendChild(this.element);
	
	  this.resize = function (w, h) {
	    _this.element.width = w * 2;
	    _this.element.height = h * 2;
	    _this.element.style.width = w + "px";
	    _this.element.style.height = h + "px";
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	exports.isObject = function (obj) {
	  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null && obj instanceof SVGElement === false && obj instanceof HTMLElement === false) {
	    return true;
	  } else {
	    return false;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	exports.exists = "ontouchstart" in document.documentElement;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	
	/**
	  Creates a steppable value with minimum, maximum, and step size. This is used in many interfaces to constrict their values to certain ranges.
	  @param {number} [min=0] minimum
	  @param {number} [max=1] maximum
	  @param {number} [step=0]
	  @param {number} [value=0] initial value
	  @returns {Object} Step
	*/
	
	var Step = (function () {
	  function Step() {
	    var min = arguments[0] === undefined ? 0 : arguments[0];
	    var max = arguments[1] === undefined ? 1 : arguments[1];
	    var step = arguments[2] === undefined ? 0 : arguments[2];
	    var value = arguments[3] === undefined ? 0 : arguments[3];
	
	    _classCallCheck(this, Step);
	
	    //Object.assign(this,{min,max,step});
	    //Cannot use Object.assign because not supported in Safari.
	    //I would expect for Babel to take care of this but it is now.
	    this.min = min;
	    this.max = max;
	    this.step = step;
	    this.value = value;
	    this.changed = false;
	    this.oldValue = false;
	    this.update(this.value);
	  }
	
	  _createClass(Step, {
	    update: {
	
	      /**
	        Update with a new value. The value will be auto-adjusted to fit the min/max/step.
	        @param {number} value
	      */
	
	      value: function update(value) {
	        if (this.step) {
	          this.value = math.clip(Math.round(value / this.step) * this.step, this.min, this.max);
	        } else {
	          this.value = math.clip(value, this.min, this.max);
	        }
	        if (this.oldValue !== this.value) {
	          this.oldValue = this.value;
	          this.changed = true;
	        } else {
	          this.changed = false;
	        }
	        return this.value;
	      }
	    },
	    updateNormal: {
	
	      /**
	        Update with a normalized value 0-1.
	        @param {number} value
	      */
	
	      value: function updateNormal(value) {
	        this.value = math.scale(value, 0, 1, this.min, this.max);
	        return this.update(this.value);
	      }
	    },
	    normalized: {
	
	      /**
	        Get a normalized version of this.value . Not settable.
	      */
	
	      get: function () {
	        return math.normalize(this.value, this.min, this.max);
	      }
	    }
	  });
	
	  return Step;
	})();
	
	module.exports = Step;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";
	
	var math = _interopRequire(__webpack_require__(5));
	
	var ToggleModel = _interopRequire(__webpack_require__(13));
	
	/*
	how to use :
	
	dial.interaction = new Handle('radial','relative',this.width,this.height);
	// dial.interaction.mode = 'relative'
	// dial.interaction.direction = 'radial'
	
	on click:
	dial.interaction.anchor = this.mouse;
	
	on move:
	dial.interaction.update(this.mouse);
	
	console.log( dial.interaction.value ); should be a normalized value.
	
	*/
	
	/*
	  absolute/relative are property: mode
	  radial/vertical/horizontal/2d are property: direction
	
	  plan :
	
	  if relative --
	  NO on click, get value offset between current value and click value.
	  NO on move, use click value - offset
	  INSTEAD
	  use delta -- bc vertical motion on dial is impossible otherwise
	  also allow to set sensitivity
	
	*/
	
	var Handle = exports.Handle = (function () {
	  function Handle() {
	    var mode = arguments[0] === undefined ? "absolute" : arguments[0];
	    var direction = arguments[1] === undefined ? "vertical" : arguments[1];
	    var xbound = arguments[2] === undefined ? [0, 100] : arguments[2];
	    var ybound = arguments[3] === undefined ? [0, 100] : arguments[3];
	
	    _classCallCheck(this, Handle);
	
	    this.mode = mode;
	    this.direction = direction;
	    this.previous = 0;
	    this.value = 0;
	    this.sensitivity = 1;
	    this.resize(xbound, ybound);
	  }
	
	  _createClass(Handle, {
	    resize: {
	      value: function resize(xbound, ybound) {
	        this.boundary = {
	          min: {
	            x: xbound[0],
	            y: ybound[0]
	          },
	          max: {
	            x: xbound[1],
	            y: ybound[1]
	          },
	          center: {
	            x: (xbound[1] - xbound[0]) / 2 + xbound[0],
	            y: (ybound[1] - ybound[0]) / 2 + ybound[0]
	          }
	        };
	      }
	    },
	    anchor: {
	      set: function (mouse) {
	        this._anchor = this.convertPositionToValue(mouse);
	      },
	      get: function () {
	        return this._anchor;
	      }
	    },
	    update: {
	      value: function update(mouse) {
	        if (this.mode === "relative") {
	          var increment = this.convertPositionToValue(mouse) - this.anchor;
	          if (Math.abs(increment) > 0.5) {
	            increment = 0;
	          }
	          this.anchor = mouse;
	          this.value = this.value + increment * this.sensitivity;
	        } else {
	          this.value = this.convertPositionToValue(mouse);
	        }
	        this.value = math.clip(this.value, 0, 1);
	      }
	    },
	    convertPositionToValue: {
	      value: function convertPositionToValue(current) {
	        switch (this.direction) {
	          case "radial":
	            var position = math.toPolar(current.x - this.boundary.center.x, current.y - this.boundary.center.y);
	            // instead of using modulo, should simply adjust the lower values (0 - 0.5PI) to be higher (2PI - 2.5PI), then clip the numbers between 0.5 pi and 2.5 pi.
	            position = position.angle / (Math.PI * 2);
	            position = (position - 0.25) % 1;
	            return position;
	          case "vertical":
	            return math.scale(current.y, this.boundary.min.y, this.boundary.max.y, 0, 1);
	          case "horizontal":
	            return math.scale(current.x, this.boundary.min.x, this.boundary.max.x, 0, 1);
	            /*  case '2d':
	                return {
	                  x: math.scale(current.x,this.boundary.min.x,this.boundary.max.x,0,1),
	                  y: math.scale(current.y,this.boundary.min.y,this.boundary.max.y,0,1)
	                } */
	        }
	      }
	    }
	  });
	
	  return Handle;
	})();
	
	var Button = exports.Button = (function () {
	  function Button() {
	    var mode = arguments[0] === undefined ? "button" : arguments[0];
	
	    _classCallCheck(this, Button);
	
	    this.mode = mode;
	    this.state = new ToggleModel();
	    this.paintbrush = false;
	  }
	
	  _createClass(Button, {
	    click: {
	      value: function click() {
	        switch (this.mode) {
	          case "impulse":
	            this.state.on();
	            if (this.timeout) {
	              clearTimeout(this.timeout);
	            }
	            this.timeout = setTimeout(this.state.off.bind(this), 30);
	            this.emit("change", this.state);
	            break;
	          case "button":
	            this.turnOn();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            this.turnOn();
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	          case "toggle":
	            this.flip();
	            this.emit("change", this.state);
	            break;
	        }
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.mode === "aftertouch") {
	          this.position = {
	            x: math.clip(this.mouse.x / this.width, 0, 1),
	            y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	          };
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        switch (this.mode) {
	          case "button":
	            this.turnOff();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.turnOff();
	            this.position = {
	              x: this.mouse.x / this.width,
	              y: 1 - this.mouse.y / this.height
	            };
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	        }
	      }
	    }
	  });
	
	  return Button;
	})();

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Toggle = (function () {
	  function Toggle() {
	    _classCallCheck(this, Toggle);
	
	    this.state = false;
	  }
	
	  _createClass(Toggle, {
	    flip: {
	      value: function flip(state) {
	        if (state || state === false) {
	          this.state = state;
	        } else {
	          this.state = !this.state;
	        }
	      }
	    },
	    on: {
	      value: function on() {
	        this.state = true;
	      }
	    },
	    off: {
	      value: function off() {
	        this.state = false;
	      }
	    }
	  });
	
	  return Toggle;
	})();
	
	module.exports = Toggle;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	Slider interface
	*/
	
	var Slider = (function (_Interface) {
	  function Slider() {
	    _classCallCheck(this, Slider);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      orientation: "vertical",
	      mode: "relative",
	      scale: [0, 1],
	      step: 0,
	      value: 0,
	      hasKnob: true
	    };
	
	    _get(Object.getPrototypeOf(Slider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.orientation = this.settings.orientation;
	
	    this.mode = this.settings.mode;
	
	    this.hasKnob = this.settings.hasKnob;
	
	    // this.step should eventually be get/set
	    // updating it will update the _value step model
	    this.step = this.settings.step; // float
	
	    this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
	
	    this.init();
	
	    // issue -- position should be created here, but 'resize interface' is called from within this.init, which tries to resize the position element.....
	    this.position = new Interaction.Handle(this.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.value = this._value.value;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Slider, _Interface);
	
	  _createClass(Slider, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.fillbar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.fillbar);
	        this.element.appendChild(this.knob);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.width < this.height) {
	          this.orientation = "vertical";
	        } else {
	          this.orientation = "horizontal";
	        }
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	
	        if (this.orientation === "vertical") {
	          this.fillbar.setAttribute("x", x);
	          this.fillbar.setAttribute("y", this.knobData.level);
	          this.fillbar.setAttribute("width", w);
	          this.fillbar.setAttribute("height", h - this.knobData.level);
	        } else {
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("y", y);
	          this.fillbar.setAttribute("width", this.knobData.level);
	          this.fillbar.setAttribute("height", h);
	        }
	        this.fillbar.setAttribute("transform", barOffset);
	        this.fillbar.setAttribute("rx", cornerRadius);
	        this.fillbar.setAttribute("ry", cornerRadius);
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (!this.hasKnob) {
	          this.knob.setAttribute("fill", "transparent");
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.bar.setAttribute("fill", this.colors.fill);
	        this.fillbar.setAttribute("fill", this.colors.accent);
	        this.knob.setAttribute("fill", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	          this.fillbar.setAttribute("y", this.height - this.knobData.level);
	          this.fillbar.setAttribute("height", this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("width", this.knobData.level);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	
	          this.value = this._value.updateNormal(this.position.value);
	
	          this.emit("change", this.value);
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    value: {
	      get: function () {
	        return this._value.value;
	      },
	      set: function (value) {
	        this._value.update(value);
	        this.position.value = this._value.normalized;
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    }
	  });
	
	  return Slider;
	})(Interface);
	
	module.exports = Slider;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var ToggleModel = __webpack_require__(13);
	var Interface = __webpack_require__(6);
	
	var Toggle = (function (_Interface) {
	  function Toggle() {
	    _classCallCheck(this, Toggle);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [40, 20],
	      target: false,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Toggle.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    //this.parent = document.getElementById(parent.replace('#',''));
	    this._state = new ToggleModel();
	
	    this.init();
	  }
	
	  _inherits(Toggle, _Interface);
	
	  _createClass(Toggle, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.knob = svg.create("circle");
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.knob);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.height < this.width / 2) {
	          this.knobSize = this.height / 2;
	        } else {
	          this.knobSize = this.width / 4;
	        }
	
	        this.bar.setAttribute("x", this.width / 2 - this.knobSize * 1.5);
	        this.bar.setAttribute("y", this.height / 2 - this.knobSize / 2);
	        this.bar.setAttribute("rx", this.knobSize / 2);
	        this.bar.setAttribute("ry", this.knobSize / 2);
	        this.bar.setAttribute("width", this.knobSize * 3);
	        this.bar.setAttribute("height", this.knobSize);
	
	        this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobSize);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.knob.setAttribute("fill", this.colors.accent);
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
	          this.bar.setAttribute("fill", this.colors.fill);
	        } else {
	          this.knob.setAttribute("cx", this.width / 2 + this.knobSize);
	          this.bar.setAttribute("fill", this.colors.accent);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.flip();
	        this.render();
	        this.emit("change", this.state);
	      }
	    },
	    state: {
	      get: function () {
	        return this._state.state;
	      },
	      set: function (value) {
	        var newvalue = this._state.flip(value);
	        this.render();
	        return newvalue;
	      }
	    },
	    flip: {
	      value: function flip(value) {
	        this._state.flip(value);
	        this.render();
	      }
	    },
	    turnOn: {
	      value: function turnOn() {
	        this._state.on();
	        this.render();
	      }
	    },
	    turnOff: {
	      value: function turnOff() {
	        this._state.off();
	        this.render();
	      }
	    }
	  });
	
	  return Toggle;
	})(Interface);
	
	module.exports = Toggle;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//let svg = require('../util/svg');
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var RangeSlider = __webpack_require__(17);
	
	var Range = (function (_Interface) {
	  function Range() {
	    _classCallCheck(this, Range);
	
	    //settings would include how many sliders and their location ?
	    //and their ranges
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [200, 30],
	      mode: "select", // select, scale? drag? range?
	      scale: [0, 20],
	      step: 1,
	      value: [[7, 9], [1, 3]],
	      maxSliders: 5
	    };
	
	    _get(Object.getPrototypeOf(Range.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.min = this.settings.scale[0];
	    this.max = this.settings.scale[1];
	    this.mode = this.settings.mode;
	    this.step = this.settings.step;
	    this.maxSliders = this.settings.maxSliders;
	    this.value = this.settings.value;
	    this.sliders = [];
	    //  this.buildFrame();
	    //  this.buildInterface();
	    //  this.attachListeners();
	    this.init();
	  }
	
	  _inherits(Range, _Interface);
	
	  _createClass(Range, {
	    buildInterface: {
	      value: function buildInterface() {
	        for (var i = 0; i < this.value.length; i++) {
	          var value = this.value[i];
	          this.addSlider(value[0], value[1]);
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        var _this = this;
	
	        // how to tell slider what size to move to?
	        this.sliders.forEach(function (slider) {
	          slider.resize(_this.width, _this.height);
	        });
	      }
	    },
	    addSlider: {
	      value: function addSlider(start, end) {
	
	        // arguments: parent, options
	        var component = new RangeSlider(this.element, {
	          min: this.min,
	          max: this.max,
	          step: this.step,
	          mode: this.mode
	        });
	
	        //  component.range.start.value = start || math.interp(0.25,this.min,this.max);
	        //  component.range.end.value = end ||  math.interp(0.75,this.min,this.max);
	        //  console.log( start || math.interp(0.25,this.min,this.max) );
	        //   component.start = start || math.interp(0.25,this.min,this.max);
	        //   console.log(component.start);
	        /*  component.end = end ||  math.interp(0.75,this.min,this.max);
	          component.render();
	          this.sliders.push( component ); */
	
	        start = start || math.interp(0.25, this.min, this.max);
	        end = end || math.interp(0.75, this.min, this.max);
	        component.range.move(start, end);
	
	        if (this.mode === "drag") {
	          component.position.center.value = math.normalize(component.range.center, this.min, this.max);
	          component.position.size.value = math.normalize(component.range.size, this.min, this.max);
	        } else if (this.mode === "select") {
	          component.position.center.value = math.normalize(component.range.center, this.min, this.max);
	        }
	        component.render();
	        this.sliders.push(component);
	        return component;
	      }
	    },
	    click: {
	      value: function click() {
	        var slider = this.addSlider();
	        slider.mouse = this.mouse;
	        //  slider.preClick();
	      }
	    },
	    move: {
	      value: function move() {}
	    },
	    release: {
	      value: function release() {}
	    }
	  });
	
	  return Range;
	})(Interface);
	
	module.exports = Range;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var RangeModel = __webpack_require__(18);
	var math = __webpack_require__(5);
	var ColorOps = __webpack_require__(19);
	// is this needed? where is it used?
	window.ColorOps = __webpack_require__(19);
	
	var Interface = _interopRequire(__webpack_require__(6));
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	var RangeSlider = (function (_Interface) {
	  function RangeSlider() {
	    _classCallCheck(this, RangeSlider);
	
	    var options = [];
	
	    var defaults = {
	      size: [0, 0],
	      mode: "select"
	      //scaleX, scaleY
	      //valueX, valueY
	      //stepX, stepY
	    };
	
	    _get(Object.getPrototypeOf(RangeSlider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.min = this.settings.min;
	    this.max = this.settings.max;
	    this.step = this.settings.step;
	    this.mode = this.settings.mode;
	
	    /*  let colorIndex = 0;
	      this.color = ColorOps.spin([230,0,100,0],colorIndex * 60);
	      this.color = this.color.map((v) => { return Math.floor(v); });
	      this.color.length = 3;
	      this.color = 'rgb('+this.color.join(',')+')'; */
	
	    this.range = new RangeModel(this.min, this.max, this.step);
	
	    if (this.mode === "drag") {
	      this.position = {
	        center: new Interaction.Handle("relative", "horizontal", [0, this.width], [this.height, 0]),
	        size: new Interaction.Handle("relative", "vertical", [0, this.width], [this.height, 0])
	      };
	      this.position.size.sensitivity = 0.2;
	    } else if (this.mode === "select") {
	      this.position = {
	        center: new Interaction.Handle("relative", "horizontal", [0, this.width], [this.height, 0]),
	        start: new Interaction.Handle("relative", "horizontal", [0, this.width], [this.height, 0]),
	        end: new Interaction.Handle("relative", "horizontal", [0, this.width], [this.height, 0])
	        //  size: new Interaction.Handle('relative','vertical',[0,this.width],[this.height,0])
	      };
	    }
	
	    this.init();
	    return this;
	  }
	
	  _inherits(RangeSlider, _Interface);
	
	  _createClass(RangeSlider, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("x", 0);
	        this.element.setAttribute("y", 0);
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.dummy = svg.create("rect");
	        this.dummy.setAttribute("width", "100%");
	        this.dummy.setAttribute("height", "100%");
	        this.dummy.setAttribute("x", 0);
	        this.dummy.setAttribute("y", 0);
	        this.dummy.setAttribute("fill", "none");
	
	        this.element.appendChild(this.dummy);
	
	        this.ref = svg.create("g");
	        this.ref.setAttribute("width", "100%");
	        this.ref.setAttribute("height", "100%");
	        this.ref.setAttribute("x", 0);
	        this.ref.setAttribute("y", 0);
	        this.ref.setAttribute("fill", "none");
	
	        this.element.appendChild(this.ref);
	
	        this.bar = svg.create("rect");
	        this.bar.setAttribute("x", 0);
	        this.bar.setAttribute("y", 0);
	        this.bar.setAttribute("stroke-width", "0");
	        this.bar.setAttribute("fill-opacity", "0.4");
	
	        this.arrowL = svg.create("rect");
	        this.arrowL.setAttribute("x", 0);
	        this.arrowL.setAttribute("y", 0);
	        this.arrowL.setAttribute("fill-opacity", "0.7");
	
	        this.arrowL.addEventListener("mousedown", function (e) {
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.arrowR = svg.create("rect");
	        this.arrowR.setAttribute("fill-opacity", "0.7");
	
	        this.arrowR.addEventListener("mousedown", function (e) {
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.ref.appendChild(this.arrowL);
	        this.ref.appendChild(this.arrowR);
	        this.ref.appendChild(this.bar);
	
	        this.resize();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.bar.setAttribute("fill", this.colors.accent);
	        this.bar.setAttribute("stroke", this.colors.accent);
	        this.arrowL.setAttribute("fill", this.colors.accent);
	        this.arrowR.setAttribute("fill", this.colors.accent);
	      }
	    },
	    resize: {
	      value: function resize(w, h) {
	        this.width = w || this.width;
	        this.height = h || this.height;
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.bar.setAttribute("width", (this.range.end.normalized - this.range.start.normalized) * this.width);
	        this.bar.setAttribute("height", this.height);
	        this.arrowL.setAttribute("width", 3);
	        this.arrowL.setAttribute("height", this.height);
	        this.arrowR.setAttribute("width", 3);
	        this.arrowR.setAttribute("height", this.height);
	        this.arrowR.setAttribute("x", this.bar.getAttribute("width"));
	        this.arrowR.setAttribute("y", 0);
	        if (this.mode === "drag") {
	          this.positoin.center.resize([0, this.width], [this.height, 0]);
	          this.position.size.resize([0, this.width], [this.height, 0]);
	        } else if (this.mode === "select") {
	          this.position.center.resize([0, this.width], [this.height, 0]);
	          this.position.start.resize([0, this.width], [this.height, 0]);
	          this.position.end.resize([0, this.width], [this.height, 0]);
	        }
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        this.ref.setAttribute("transform", "translate(" + this.range.start.normalized * this.width + ", 0)");
	        this.bar.setAttribute("width", (this.range.end.normalized - this.range.start.normalized) * this.width);
	        this.arrowR.setAttribute("x", this.bar.getAttribute("width") - 3);
	      }
	    },
	    click: {
	      value: function click() {
	        this.hasMoved = false;
	        console.log("slider clicked");
	
	        if (this.mode === "drag") {
	          this.position.center.anchor = this.mouse;
	          this.position.size.anchor = this.mouse;
	        } else if (this.mode === "select") {
	          this.position.center.anchor = this.mouse;
	        }
	        //this.range.center = math.scale(this.mouse.x,0,this.width,this.min,this.max);
	        this.render();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.hasMoved = true;
	          if (this.mode === "drag") {
	
	            this.position.center.update(this.mouse);
	            this.range.center = math.scale(this.position.center.value, 0, 1, this.min, this.max);
	            //this.range.center = math.scale(this.mouse.x,0,this.width,this.min,this.max);
	
	            this.position.size.update(this.mouse);
	            this.range.size = math.scale(this.position.size.value, 0, 1, this.min, this.max);
	
	            this.render();
	          } else if (this.mode === "select") {
	            this.position.center.update(this.mouse);
	            this.range.center = math.scale(this.position.center.value, 0, 1, this.min, this.max);
	            this.render();
	          }
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        if (!this.hasMoved) {
	          this.destroy();
	        }
	        this.render();
	      }
	    },
	    start: {
	      get: function () {
	        return this.range.start.value;
	      },
	      set: function (value) {
	        //  console.log("start is being set to", value);
	        this.range.start.value = value;
	        this.updatePosition();
	      }
	    },
	    end: {
	      get: function () {
	        return this.range.end.value;
	      },
	      set: function (value) {
	        //  console.log("end is being set to", value);
	        this.range.end.value = value;
	        this.updatePosition();
	      }
	    },
	    updatePosition: {
	      value: function updatePosition() {
	        //  console.log("updatePosition is being set");
	        var start = this.range.start.normalized;
	        //        console.log("updatePosition start", start);
	        var end = this.range.end.normalized;
	        //        console.log("updatePosition end", end);
	        var center = (end + start) / 2;
	        var size = end - start;
	
	        //    console.log("updatePosition center", center);
	        //        console.log("updatePosition size", size);
	        this.position.center.update(center);
	        this.position.size.update(size);
	      }
	    }
	  });
	
	  return RangeSlider;
	})(Interface);
	
	module.exports = RangeSlider;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Step = _interopRequire(__webpack_require__(11));
	
	/**
	  Creates an abstract model of a steppable range slider with start and end values which are constricted by a minimum, maximum, and step size.
	  @param {number} [min=0] minimum
	  @param {number} [max=1] maximum
	  @param {number} [step=0]
	  @returns {Object} Step
	*/
	
	var Range = (function () {
	  function Range() {
	    var min = arguments[0] === undefined ? 0 : arguments[0];
	    var max = arguments[1] === undefined ? 1 : arguments[1];
	    var step = arguments[2] === undefined ? false : arguments[2];
	
	    _classCallCheck(this, Range);
	
	    /**
	      {number} Minimum value of the range
	    */
	    this.min = min;
	
	    /**
	      {number} Maximum value of the range
	    */
	    this.max = max;
	
	    /**
	      {Step} Start value of the range selection
	    */
	    this.start = new Step(min, max, step);
	
	    /**
	      {Step} End value of the range selection
	    */
	    this.end = new Step(min, max, step);
	  }
	
	  _createClass(Range, {
	    center: {
	
	      /**
	        {number} Center of the range selection
	      */
	
	      get: function () {
	        return this.start.value + (this.end.value - this.start.value) / 2;
	      },
	      set: function (value) {
	        var size = this.end.value - this.start.value;
	        console.log("====");
	        console.log(this.start.value);
	        console.log(this.end.value);
	        this.start.update(value - size / 2);
	        this.end.update(this.start.value + size);
	      }
	    },
	    size: {
	
	      /**
	        {number} Size of the range selection
	      */
	
	      get: function () {
	        return this.end.value - this.start.value;
	      },
	      set: function (size) {
	        var center = this.center;
	        this.start.update(center - size / 2);
	        // Ensure that the range slsection _is_ the size desired, even if it changes the center.
	        this.end.update(this.start.value + size);
	        //this.end.update(center + size/2);
	      }
	    },
	    move: {
	
	      /**
	        Move the range selection
	        @param {number} start New start value of the range selection
	        @param {number} end New end value of the range selection
	      */
	
	      value: function move(start, end) {
	        if (start) {
	          this.start.update(start);
	        }
	        if (end) {
	          this.end.update(end);
	        }
	      }
	    }
	  });
	
	  return Range;
	})();
	
	module.exports = Range;

/***/ },
/* 19 */
/***/ function(module, exports) {

	var colorFunctions = {
	  /**
	   * Convert a color specified as an RGBA array
	   * into an HSL object.
	   *
	   * @param {Array} color rgba color
	   * @returns {Object} hsl representation of that color
	   */
	  toHSL: function(color) {
	    var r = color[0] / 255,
	    g = color[1] / 255,
	    b = color[2] / 255,
	    a = color[3];
	
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2, d = max - min;
	
	    if (max === min) {
	      h = s = 0;
	    } else {
	      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	
	      switch (max) {
	        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	        case g: h = (b - r) / d + 2; break;
	        case b: h = (r - g) / d + 4; break;
	      }
	      h /= 6;
	    }
	    return { h: h * 360, s: s, l: l, a: a };
	  },
	  /**
	   * Given an r, g, b color, return a 4-element RGBA array
	   * @param {number} r red
	   * @param {number} g green
	   * @param {number} b blue
	   * @returns {Array} rgba array
	   */
	  rgb: function(r, g, b) {
	    return this.rgba(r, g, b, 1.0);
	  },
	  /**
	   * Given an rgba color as number-like objects, return that array
	   * with numbers if possible, and null otherwise
	   *
	   * @param {number} r red
	   * @param {number} g green
	   * @param {number} b blue
	   * @param {number} a alpha
	   * @returns {Array} rgba array
	   */
	  rgba: function(r, g, b, a) {
	    var rgb = [r, g, b].map(function (c) { return number(c); });
	    a = number(a);
	    if (rgb.some(isNaN) || isNaN(a)) return null;
	    rgb.push(a);
	    return rgb;
	  },
	  /**
	   * Given an HSL color as components, return an RGBA array with 100% alpha
	   *
	   * @param {number} h hue
	   * @param {number} s saturation
	   * @param {number} l luminosity
	   * @returns {Array} rgba color
	   */
	  hsl: function(h, s, l) {
	    return this.hsla(h, s, l, 1.0);
	  },
	  /**
	   * Given an HSL color as components, return an RGBA array
	   *
	   * @param {number} h hue
	   * @param {number} s saturation
	   * @param {number} l luminosity
	   * @param {number} a alpha
	   * @returns {Array} rgba color
	   */
	  hsla: function(h, s, l, a) {
	    h = (number(h) % 360) / 360;
	    s = number(s); l = number(l); a = number(a);
	    if ([h, s, l, a].some(isNaN)) return null;
	
	    var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s,
	    m1 = l * 2 - m2;
	
	    return this.rgba(hue(h + 1 / 3) * 255,
	      hue(h) * 255,
	      hue(h - 1 / 3) * 255,
	      a);
	
	    function hue(h) {
	      h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
	      if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
	      else if (h * 2 < 1) return m2;
	      else if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
	      else return m1;
	    }
	  },
	  /**
	   * Get the hue component of a color
	   *
	   * @param {Color} color
	   * @returns {Number} hue
	   */
	  hue: function(color) {
	    return Math.round(this.toHSL(color).h);
	  },
	  /**
	   * Get the saturation component of a color as a string
	   * representing percentage
	   *
	   * @param {Color} color
	   * @returns {String} saturation
	   */
	  saturation: function(color) {
	    return Math.round(this.toHSL(color).s * 100);
	  },
	  /**
	   * Get the lightness component of a color as a string
	   * representing percentage
	   *
	   * @param {Color} color
	   * @returns {String} lightness
	   */
	  lightness: function(color) {
	    return Math.round(this.toHSL(color).l * 100);
	  },
	  /**
	   * Get the alpha component of a color
	   *
	   * @param {Array} color
	   * @returns {Number} alpha
	   */
	  alpha: function(color) {
	    return this.toHSL(color).a;
	  },
	  /**
	   * Saturate or desaturate a color by a given amount
	   *
	   * @param {Color} color
	   * @param {Number} amount
	   * @returns {Color} color
	   */
	  saturate: function(color, amount) {
	    var hsl = this.toHSL(color);
	
	    hsl.s += amount / 100;
	    hsl.s = clamp(hsl.s);
	    return hsla(hsl);
	  },
	  /**
	   * Lighten or darken a color by a given amount
	   *
	   * @param {Color} color
	   * @param {Number} amount
	   * @returns {Color} color
	   */
	  lighten: function(color, amount) {
	    var hsl = this.toHSL(color);
	
	    hsl.l += amount / 100;
	    hsl.l = clamp(hsl.l);
	    return hsla(hsl);
	  },
	  /**
	   * Fade a color by a given amount
	   *
	   * @param {Color} color
	   * @param {Number} amount
	   * @returns {Color} color
	   */
	  fade: function(color, amount) {
	    var hsl = this.toHSL(color);
	
	    hsl.a += amount / 100;
	    hsl.a = clamp(hsl.a);
	    return hsla(hsl);
	  },
	  /**
	   * Rotate the hue of a color by an amount given in decimal degrees.
	   * @param {Color} color
	   * @param {Number} degrees
	   * @returns {Color} output
	   */
	  spin: function(color, amount) {
	    var hsl = this.toHSL(color);
	    var hue = (hsl.h + amount) % 360;
	
	    hsl.h = hue < 0 ? 360 + hue : hue;
	    return hsla(hsl);
	  },
	  /**
	   * Mix two colors.
	   * @param {Color} color1
	   * @param {Color} color2
	   * @param {Number} degrees
	   * @returns {Color} output
	   */
	  mix: function(color1, color2, amount) {
	    var p = amount / 100.0;
	    var w = p * 2 - 1;
	    var hsl1 = this.toHSL(color1);
	    var hsl2 = this.toHSL(color2);
	    var a = hsl1.a - hsl2.a;
	
	    var w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
	    var w2 = 1 - w1;
	
	    var rgb = [
	        color1[0] * w1 + color2[0] * w2,
	        color1[1] * w1 + color2[1] * w2,
	        color1[2] * w1 + color2[2] * w2
	    ];
	
	    var alpha = color1[3] * p + color2[3] * (1 - p);
	    rgb[3] = alpha;
	    return rgb;
	  }
	};
	
	function hsla(h) {
	  return colorFunctions.hsla(h.h, h.s, h.l, h.a);
	}
	
	function number(n) {
	  if (typeof n === 'number') return n;
	  else return NaN;
	}
	
	function clamp(val) {
	  return Math.min(1, Math.max(0, val));
	}
	
	module.exports = colorFunctions;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	//let Step = require('../models/step');
	//let math = require('../util/math');
	var RangeSlider = __webpack_require__(17);
	
	var Waveform = (function (_Interface) {
	  function Waveform() {
	    _classCallCheck(this, Waveform);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [400, 150]
	      //scaleX, scaleY
	      //valueX, valueY
	      //stepX, stepY
	    };
	
	    _get(Object.getPrototypeOf(Waveform.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.selections = [];
	    this.times = [{ dur: 10, format: 1 }, { dur: 50, format: 1 }, { dur: 100, format: 1 }, { dur: 200, format: 1 }, { dur: 500, format: 1 }, { dur: 1000, format: 1 }, { dur: 2000, format: 1 }, { dur: 5000, format: 1 }, { dur: 10000, format: 3 }, { dur: 15000, format: 3 }, { dur: 60000, format: 3 }, // 1 min
	    { dur: 120000, format: 3 }, // 2 mins
	    { dur: 300000, format: 3 }, // 5 mins
	    { dur: 600000, format: 3 }];
	    this.timescale = false;
	
	    this.definition = 2;
	    this.pieces = ~ ~(this.width / this.definition);
	
	    this.channels = 1;
	
	    this.wavePieces = [];
	
	    this.init();
	  }
	
	  _inherits(Waveform, _Interface);
	
	  _createClass(Waveform, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.element.style.borderRadius = "5px";
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.waveHeight = this.height / this.channels;
	
	        this.empty();
	        if (this.buffer) {
	          this.buildWaveform();
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	
	        if (this.wavePieces) {
	          for (var i = 0; i < this.wavePieces.length; i++) {
	            this.wavePieces[i].setAttribute("fill", this.colors.dark);
	          }
	        }
	      }
	    },
	    buildWaveform: {
	      value: function buildWaveform() {
	        for (var i = 0; i < this.buffer.length; i++) {
	          var waveTop = i * this.waveHeight;
	          var waveCenter = waveTop + this.waveHeight / 2;
	          for (var j = 0; j < this.buffer[i].length; j++) {
	            var ht1 = waveCenter - this.buffer[i][j][0] * this.waveHeight;
	            var ht2 = waveCenter + Math.abs(this.buffer[i][j][1] * this.waveHeight);
	            ht2 = ht2 - ht1;
	
	            var rect = svg.create("rect");
	            rect.setAttribute("x", j * this.definition);
	            rect.setAttribute("y", ht1);
	            rect.setAttribute("width", this.definition);
	            rect.setAttribute("height", ht2);
	            rect.setAttribute("fill", this.colors.dark);
	            this.wavePieces.push(rect);
	
	            this.element.appendChild(rect);
	          }
	        }
	      }
	    },
	    render: {
	      /*
	        buildSelection() {
	          let starttime = math.rf(this.duration);
	          let endtime =  starttime + 0.2;
	      
	          let startx = this.width * starttime / this.duration;
	          let endx = this.width * endtime / this.duration;
	      
	          let rect = svg.create('rect');
	          rect.setAttribute('x',startx);
	          rect.setAttribute('y',0);
	          rect.setAttribute('width',endx - startx);
	          rect.setAttribute('height',this.height);
	          rect.setAttribute('fill','#d19');
	          rect.setAttribute('stroke','#d19');
	          rect.setAttribute('stroke-width','1');
	          rect.setAttribute('fill-opacity','0.5');
	      
	          rect.addEventListener('mousedown', (e) => {
	            console.log('selection clicked');
	            e.preventDefault();
	            e.stopPropagation()
	          });
	      
	          this.element.appendChild( rect );
	        } */
	
	      value: function render() {}
	    },
	    click: {
	      value: function click() {
	        //  this.value = {
	        //    x: this._value.x.updateNormal( this.mouse.x / this.height ),
	        //    y: this._value.y.updateNormal( this.mouse.y / this.height )
	        //  };
	
	        this.selections.push(new RangeSlider(this.element));
	        //will need to include this in settings: this.mouse.x / this.width
	
	        // rules:
	        // if not on an existing selection, create a selection
	        // if on an existing selection, save x location
	        // and check whether it is in 'resize' territory
	        // possible a different interaction for touch -- 'range' style
	
	        this.render();
	      }
	    },
	    move: {
	      value: function move() {}
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    load: {
	      value: function load(buffer) {
	
	        this.channels = buffer.numberOfChannels;
	        this.duration = buffer.duration;
	        this.sampleRate = buffer.sampleRate;
	        this.waveHeight = this.height / this.channels;
	
	        // timescale
	        this.durationMS = this.duration * 1000;
	        this.timescale = 0;
	        while (~ ~(this.durationMS / this.times[this.timescale].dur) > 7 && this.timescale < this.times.length) {
	          this.timescale++;
	        }
	        this.timescale = this.times[this.timescale];
	
	        this.rawbuffer = [];
	        this.buffer = [];
	
	        // reduce/crush buffers
	        for (var i = 0; i < this.channels; i++) {
	          this.rawbuffer.push(buffer.getChannelData(0));
	          this.buffer.push([]);
	
	          // counts faster (sacrificing some accuracy) through larger buffers.
	          // a 5 second sample will only look at every 2nd sample.
	          // a 10 second buffer will only look at every 3rd sample.
	          var countinc = ~ ~(this.rawbuffer[0].length / (this.sampleRate * 5)) + 1;
	
	          var groupsize = ~ ~(this.rawbuffer[i].length / this.pieces);
	          var cmax = 0;
	          var cmin = 0;
	          var group = 0;
	          for (var j = 0; j < this.rawbuffer[i].length; j += countinc) {
	            if (this.rawbuffer[i][j] > 0) {
	              cmax = Math.max(cmax, this.rawbuffer[i][j]);
	            } else {
	              cmin = Math.min(cmin, this.rawbuffer[i][j]);
	            }
	            if (j > group * groupsize) {
	              this.buffer[i].push([cmax, cmin]);
	              group++;
	              cmin = 0;
	              cmax = 0;
	            }
	          }
	        }
	
	        this.buildWaveform();
	
	        //this.val.starttime = Math.round(this.val.start * this.durationMS);
	        //this.val.stoptime = Math.round(this.val.stop * this.durationMS);
	        //this.val.looptime = Math.round(this.val.size * this.durationMS);
	      }
	    }
	  });
	
	  return Waveform;
	})(Interface);
	
	module.exports = Waveform;
	// 10 mins

	//  this.knobCoordinates = {
	//    x: this._value.x.normalized * this.width,
	//    y: this._value.y.normalized * this.height
	//  };

	//  if (this.clicked) {
	// rules:
	// if not on an existing selection, expand the created selection
	// if on an existing selection, move it or resize it
	/*    this.value = {
	      x: this._value.x.updateNormal( this.mouse.x / this.height ),
	      y: this._value.y.updateNormal( this.mouse.y / this.height )
	    };
	    this.render();
	  } */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var ButtonTemplate = __webpack_require__(22);
	
	var Button = (function (_ButtonTemplate) {
	  function Button() {
	    _classCallCheck(this, Button);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [80, 80],
	      target: false,
	      mode: "aftertouch", // button, aftertouch, impulse, toggle
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Button.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.aftertouch = this.settings.aftertouch;
	    this.mode = this.settings.mode;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Button, _ButtonTemplate);
	
	  _createClass(Button, {
	    buildInterface: {
	      value: function buildInterface() {
	        this.pad = svg.create("circle");
	        this.element.appendChild(this.pad);
	
	        // only used if in 'aftertouch' mode
	        this.defs = svg.create("defs");
	        this.element.appendChild(this.defs);
	
	        this.gradient = svg.radialGradient(this.defs, 2);
	
	        this.gradient.stops[0].setAttribute("offset", "80%");
	
	        this.gradient.stops[1].setAttribute("offset", "110%");
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.pad.setAttribute("cx", this.width / 2);
	        this.pad.setAttribute("cy", this.height / 2);
	        this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - this.width / 40);
	        this.pad.setAttribute("stroke-width", this.width / 20);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.gradient.stops[0].setAttribute("stop-color", this.colors.accent);
	        this.gradient.stops[1].setAttribute("stop-color", this.colors.fill);
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors.fill);
	          this.pad.setAttribute("stroke", this.colors.border);
	        } else {
	          if (this.mode === "aftertouch") {
	            this.pad.setAttribute("stroke", "url(#" + this.gradient.id + ")");
	            this.gradient.element.setAttribute("cx", this.position.x * 100 + "%");
	            this.gradient.element.setAttribute("cy", (1 - this.position.y) * 100 + "%");
	          } else {
	            this.pad.setAttribute("stroke", this.colors.accent);
	          }
	          this.pad.setAttribute("fill", this.colors.accent);
	        }
	      }
	    }
	  });
	
	  return Button;
	})(ButtonTemplate);
	
	module.exports = Button;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var ToggleModel = __webpack_require__(13);
	var Interface = __webpack_require__(6);
	
	var ButtonTemplate = (function (_Interface) {
	  function ButtonTemplate(args, options, defaults) {
	    _classCallCheck(this, ButtonTemplate);
	
	    _get(Object.getPrototypeOf(ButtonTemplate.prototype), "constructor", this).call(this, args, options, defaults);
	
	    this.mode = this.settings.mode || "button";
	
	    this.position = {
	      x: 0,
	      y: 0
	    };
	
	    this._state = new ToggleModel();
	  }
	
	  _inherits(ButtonTemplate, _Interface);
	
	  _createClass(ButtonTemplate, {
	    buildInterface: {
	      value: function buildInterface() {
	        this.pad = svg.create("circle");
	        this.pad.setAttribute("fill", "#d18");
	        this.pad.setAttribute("stroke", "#d18");
	        this.pad.setAttribute("stroke-width", 4);
	
	        this.element.appendChild(this.pad);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.pad.setAttribute("cx", this.width / 2);
	        this.pad.setAttribute("cy", this.height / 2);
	        this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - 2);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", "#e7e7e7");
	          this.pad.setAttribute("stroke", "#ccc");
	        } else {
	          this.pad.setAttribute("fill", "#d18");
	          this.pad.setAttribute("stroke", "#d18");
	        }
	      }
	    },
	    down: {
	      value: function down(paintbrush) {
	        switch (this.mode) {
	          case "impulse":
	            this.turnOn();
	            if (this.timeout) {
	              clearTimeout(this.timeout);
	            }
	            this.timeout = setTimeout(this.turnOff.bind(this), 30);
	            this.emit("change", this.state);
	            break;
	          case "button":
	            this.turnOn();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            this.turnOn();
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	          case "toggle":
	            this.flip(paintbrush);
	            this.emit("change", this.state);
	            break;
	        }
	      }
	    },
	    bend: {
	      value: function bend(mouse) {
	        if (this.mode === "aftertouch") {
	          this.mouse = mouse || this.mouse;
	          this.position = {
	            x: math.clip(this.mouse.x / this.width, 0, 1),
	            y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	          };
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	          this.render();
	        }
	      }
	    },
	    up: {
	      value: function up() {
	        switch (this.mode) {
	          case "button":
	            this.turnOff();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.turnOff();
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	        }
	      }
	    },
	    click: {
	
	      /* overwritable interaction handlers */
	
	      value: function click() {
	        this.down();
	      }
	    },
	    move: {
	      value: function move() {
	        this.bend();
	      }
	    },
	    release: {
	      value: function release() {
	        this.up();
	      }
	    },
	    state: {
	      get: function () {
	        return this._state.state;
	      },
	      set: function (value) {
	        var newvalue = this._state.flip(value);
	        this.render();
	        return newvalue;
	      }
	    },
	    flip: {
	      value: function flip(value) {
	        this._state.flip(value);
	        this.render();
	      }
	    },
	    turnOn: {
	      value: function turnOn() {
	        this._state.on();
	        this.render();
	      }
	    },
	    turnOff: {
	      value: function turnOff() {
	        this._state.off();
	        this.render();
	      }
	    }
	  });
	
	  return ButtonTemplate;
	})(Interface);
	
	module.exports = ButtonTemplate;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var ButtonTemplate = __webpack_require__(22);
	
	var TextButton = (function (_ButtonTemplate) {
	  function TextButton() {
	    _classCallCheck(this, TextButton);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [150, 50],
	      target: false,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(TextButton.prototype), "constructor", this).call(this, arguments, options, defaults);
	    this.text = "Play";
	    this._alternateText = false;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(TextButton, _ButtonTemplate);
	
	  _createClass(TextButton, {
	    buildFrame: {
	      value: function buildFrame() {
	
	        this.element = document.createElement("div");
	
	        this.element.innerHTML = this.text;
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        this.sizeInterface();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.color = this.colors.dark;
	        this.render();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        var textsize = this.height / 3;
	        var textsize2 = this.width / (this.text.length + 2);
	        textsize = Math.min(textsize, textsize2);
	        if (this.alternateText) {
	          var textsize3 = this.width / (this.alternateText.length + 2);
	          textsize = Math.min(textsize, textsize3);
	        }
	        var styles = "width: " + this.width + "px;";
	        styles += "height: " + this.height + "px;";
	        styles += "background-color: #e7e7e7;";
	        styles += "color: #333;";
	        styles += "padding: " + (this.height - textsize) / 2 + "px 0px;";
	        styles += "box-sizing: border-box;";
	        styles += "text-align: center;";
	        styles += "font-family: arial;";
	        styles += "font-weight: 700;";
	        styles += "font-size:" + textsize + "px;";
	        this.element.style.cssText += styles;
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.element.style.backgroundColor = this.colors.fill;
	          if (this.alternateText) {
	            this.element.innerHTML = this.text;
	          }
	        } else {
	          this.element.style.backgroundColor = this.colors.accent;
	          if (this.alternateText) {
	            this.element.innerHTML = this.alternateText;
	          }
	        }
	      }
	    },
	    alternateText: {
	      get: function () {
	        return this._alternateText;
	      },
	      set: function (text) {
	        if (text) {
	          this.mode = "toggle";
	        } else {
	          this.mode = "button";
	        }
	        this._alternateText = text;
	      }
	    }
	  });
	
	  return TextButton;
	})(ButtonTemplate);
	
	module.exports = TextButton;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//let svg = require('../util/svg');
	var Interface = __webpack_require__(6);
	var Button = __webpack_require__(21);
	
	var RadioButton = (function (_Interface) {
	  function RadioButton() {
	    _classCallCheck(this, RadioButton);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [120, 25],
	      target: false,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(RadioButton.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.buttons = [];
	    this.numberOfButtons = 4;
	    this.active = -1;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(RadioButton, _Interface);
	
	  _createClass(RadioButton, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        for (var i = 0; i < this.numberOfButtons; i++) {
	          var container = document.createElement("span");
	
	          var button = new Button(container, {
	            mode: "toggle",
	            component: true }, this.update.bind(this, i));
	
	          this.buttons.push(button);
	          this.element.appendChild(container);
	        }
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var buttonWidth = this.width / this.numberOfButtons;
	        var buttonHeight = this.height;
	
	        for (var i = 0; i < this.numberOfButtons; i++) {
	          this.buttons[i].resize(buttonWidth, buttonHeight);
	        }
	      }
	    },
	    update: {
	      value: function update(index) {
	        this.active = index;
	        // need to use v (value) here make sure it only outputs on press
	        // and to allow to turn a button off if it is already on
	        //  if (v) {
	        for (var i = 0; i < this.buttons.length; i++) {
	          if (i === this.active) {
	            this.buttons[i].turnOn();
	          } else {
	            this.buttons[i].turnOff();
	          }
	        }
	        //  }
	        this.emit("change", this.active);
	      }
	    },
	    render: {
	      value: function render() {}
	    }
	  });
	
	  return RadioButton;
	})(Interface);
	
	module.exports = RadioButton;
	
	/*  if (!this.state) {
	    this.pad.setAttribute('fill', '#e7e7e7');
	    this.pad.setAttribute('stroke', '#ccc');
	  } else {
	    this.pad.setAttribute('fill', '#d18');
	    this.pad.setAttribute('stroke', '#d18');
	  } */

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	var math = __webpack_require__(5);
	
	var Number = (function (_Interface) {
	  function Number() {
	    _classCallCheck(this, Number);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [60, 30],
	      target: false,
	      value: 0,
	      min: 0,
	      max: 10,
	      step: 1
	    };
	
	    _get(Object.getPrototypeOf(Number.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
	    this.decimalPlaces = 2;
	    this.actual = 0;
	    this.max = this.settings.max;
	    this.min = this.settings.min;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Number, _Interface);
	
	  _createClass(Number, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("input");
	        this.element.type = "text";
	
	        this.element.addEventListener("blur", (function () {
	          this.element.style.backgroundColor = "#e7e7e7";
	          this.element.style.color = "#333";
	          if (this.element.value !== this.value.value) {
	            this.value.update(parseFloat(this.element.value));
	            this.render();
	          }
	        }).bind(this));
	
	        this.element.addEventListener("keydown", (function (e) {
	          if (e.which < 48 || e.which > 57) {
	            if (e.which !== 189 && e.which !== 190 && e.which !== 8) {
	              e.preventDefault();
	            }
	          }
	          if (e.which === 13) {
	            this.element.blur();
	            this.value.update(this.element.value);
	            this.emit("change", this.value.value);
	            this.render();
	          }
	        }).bind(this));
	
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        var styles = "width: " + this.width + "px;";
	        styles += "height: " + this.height + "px;";
	        styles += "background-color: #e7e7e7;";
	        styles += "color: #333;";
	        styles += "font-family: arial;";
	        styles += "font-weight: 500;";
	        styles += "font-size:" + this._minDimension / 2 + "px;";
	        styles += "highlight: #d18;";
	        styles += "border: none;";
	        styles += "outline: none;";
	        styles += "padding: " + this._minDimension / 4 + "px " + this._minDimension / 4 + "px;";
	        styles += "box-sizing: border-box;";
	        styles += "userSelect: transparent;";
	        styles += "mozUserSelect: transparent;";
	        styles += "webkitUserSelect: transparent;";
	        this.element.style.cssText += styles;
	        // to add eventually
	        // var css = '#'+this.elementID+'::selection{ background-color: transparent }';
	
	        this.element.value = this.value.value;
	      }
	    },
	    render: {
	      value: function render() {
	
	        this.element.value = math.prune(this.value.value, this.decimalPlaces);
	      }
	    },
	    click: {
	      value: function click() {
	        this.element.readOnly = true;
	        this.actual = this.value.value;
	        this.element.style.backgroundColor = "#d18";
	        this.element.style.color = "#fff";
	        this.initial = { y: this.mouse.y };
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	
	          var newvalue = this.actual - (this.mouse.y - this.initial.y) / 200 * (this.max - this.min);
	          this.value.update(newvalue);
	
	          this.render();
	          this.emit("change", this.value.value);
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        if (this.actual === this.value.value) {
	          this.element.readOnly = false;
	          this.element.focus();
	          this.element.setSelectionRange(0, this.element.value.length);
	          this.element.style.backgroundColor = "#d18";
	          this.element.style.color = "#fff";
	        } else {
	          document.body.focus();
	        }
	      }
	    },
	    link: {
	
	      /*
	      number - should adopt the min/max of the other element
	       number.link(slider)
	      */
	
	      value: function link(destination) {
	        var _this = this;
	
	        destination.on("change", function (v) {
	          _this.passiveUpdate(v);
	        });
	        this.on("change", function (v) {
	          destination.value = v;
	        });
	        /*  return {
	            listener1: listener1,
	            listener2: listener2,
	            destroy: () => {
	              listener1.remove() (or similar)
	              listener2.remove() (or similar)
	            }
	          } */
	      }
	    },
	    passiveUpdate: {
	      value: function passiveUpdate(v) {
	        this.value.update(v);
	        this.render();
	      }
	    }
	  });
	
	  return Number;
	})(Interface);
	
	module.exports = Number;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	var Dial = (function (_Interface) {
	  function Dial() {
	    _classCallCheck(this, Dial);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [75, 75],
	      interaction: "radial", // radial, vertical, horizontal
	      mode: "relative", // absolute, relative
	      scale: [0, 1],
	      step: 0,
	      value: 20
	    };
	
	    _get(Object.getPrototypeOf(Dial.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.interaction = this.settings.interaction;
	
	    this.mode = this.settings.mode;
	
	    // this.step should eventually be get/set
	    // updating it will update the _value step model
	    this.step = this.settings.step; // float
	
	    this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
	
	    this.position = new Interaction.Handle(this.mode, this.interaction, [0, this.width], [this.height, 0]);
	
	    this.init();
	
	    this.value = this._value.value;
	
	    this.position.value = this._value.normalized;
	
	    this.previousAngle = false;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Dial, _Interface);
	
	  _createClass(Dial, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.background = svg.create("circle");
	        this.screw = svg.create("circle");
	        this.handle = svg.create("path");
	        this.handle2 = svg.create("path");
	        this.handleFill = svg.create("path");
	        this.handle2Fill = svg.create("path");
	        this.handleLine = svg.create("path");
	
	        this.element.appendChild(this.background);
	        this.element.appendChild(this.handle);
	        this.element.appendChild(this.handle2);
	        this.element.appendChild(this.handleFill);
	        this.element.appendChild(this.handle2Fill);
	        this.element.appendChild(this.handleLine);
	        this.element.appendChild(this.screw);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.position.resize([0, this.width], [this.height, 0]);
	
	        var center = {
	          x: this.width / 2,
	          y: this.height / 2
	        };
	
	        var diameter = Math.min(this.width, this.height);
	
	        this.background.setAttribute("cx", center.x);
	        this.background.setAttribute("cy", center.y);
	        this.background.setAttribute("r", diameter / 2 - diameter / 40);
	
	        this.screw.setAttribute("cx", center.x);
	        this.screw.setAttribute("cy", center.y);
	        this.screw.setAttribute("r", diameter / 12);
	
	        var value = this.value;
	
	        var handlePoints = {
	          start: Math.PI * 1.5,
	          end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	        };
	        var handle2Points = {
	          start: Math.PI * 2.5,
	          end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	        };
	
	        var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
	        var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
	
	        this.handle.setAttribute("d", handlePath);
	        this.handle.setAttribute("stroke-width", diameter / 20);
	        this.handle.setAttribute("fill", "none");
	
	        this.handle2.setAttribute("d", handle2Path);
	        this.handle2.setAttribute("stroke-width", diameter / 20);
	        this.handle2.setAttribute("fill", "none");
	
	        handlePath += " L " + center.x + " " + center.y;
	
	        this.handleFill.setAttribute("d", handlePath);
	        this.handleFill.setAttribute("fill-opacity", "0.3");
	
	        handle2Path += " L " + center.x + " " + center.y;
	
	        this.handle2Fill.setAttribute("d", handle2Path);
	        this.handle2Fill.setAttribute("fill-opacity", "0.3");
	
	        var arcEndingA = undefined;
	        if (value < 0.5) {
	          arcEndingA = handlePoints.end;
	        } else {
	          arcEndingA = handle2Points.end;
	        }
	
	        var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
	        var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
	
	        this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
	        this.handleLine.setAttribute("stroke-width", diameter / 20);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.background.setAttribute("fill", this.colors.fill);
	        this.screw.setAttribute("fill", this.colors.accent);
	        this.handle.setAttribute("stroke", this.colors.accent);
	        this.handle2.setAttribute("stroke", this.colors.accent);
	        this.handleFill.setAttribute("fill", this.colors.accent);
	        this.handle2Fill.setAttribute("fill", this.colors.accent);
	        this.handleLine.setAttribute("stroke", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        var value = this._value.normalized;
	
	        var center = {
	          x: this.width / 2,
	          y: this.height / 2
	        };
	
	        var diameter = Math.min(this.width, this.height);
	
	        var handlePoints = {
	          start: Math.PI * 1.5,
	          end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	        };
	        var handle2Points = {
	          start: Math.PI * 2.5,
	          end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	        };
	
	        var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
	        var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
	
	        this.handle.setAttribute("d", handlePath);
	        this.handle2.setAttribute("d", handle2Path);
	
	        handlePath += " L " + center.x + " " + center.y;
	
	        this.handleFill.setAttribute("d", handlePath);
	
	        handle2Path += " L " + center.x + " " + center.y;
	
	        this.handle2Fill.setAttribute("d", handle2Path);
	
	        var arcEndingA = undefined;
	        if (value <= 0.5) {
	          arcEndingA = handlePoints.end;
	        } else {
	          arcEndingA = handle2Points.end;
	        }
	
	        var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
	        var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
	
	        this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
	      }
	    },
	    click: {
	      value: function click() {
	        if (this.mode === "relative") {
	          this.previousAngle = false;
	        }
	        this.position.anchor = this.mouse;
	        this.position.value = this._value.normalized;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	
	          this.position.update(this.mouse);
	
	          var angle = this.position.value * Math.PI * 2;
	
	          if (angle < 0) {
	            angle += Math.PI * 2;
	          }
	
	          if (this.mode === "relative") {
	            if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
	              if (this.previousAngle > 3) {
	                angle = Math.PI * 2;
	              } else {
	                angle = 0;
	              }
	            }
	          } else {
	            if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
	              if (this.previousAngle > 3) {
	                angle = Math.PI * 2;
	              } else {
	                angle = 0;
	              }
	            }
	          }
	          this.previousAngle = angle;
	          //    this.position.value %= Math.PI*2;
	
	          this.value = this._value.updateNormal(angle / (Math.PI * 2));
	          //if (this._value.changed) {
	          this.emit("change", this._value.value);
	          //}
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {}
	    },
	    value: {
	      get: function () {
	        return this._value.value;
	      },
	      set: function (value) {
	        var newval = this._value.update(value);
	        this.render();
	        return newval;
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    }
	  });
	
	  return Dial;
	})(Interface);
	
	module.exports = Dial;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	var ButtonTemplate = __webpack_require__(22);
	var touch = __webpack_require__(9);
	
	var PianoKey = (function (_ButtonTemplate) {
	  function PianoKey() {
	    _classCallCheck(this, PianoKey);
	
	    var options = ["value", "note", "color"];
	
	    var defaults = {
	      size: [80, 80],
	      target: false,
	      mode: "button",
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(PianoKey.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.note = this.settings.note;
	    this.color = this.settings.color;
	
	    this.colors = {
	      w: "#fff",
	      b: "#666" };
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(PianoKey, _ButtonTemplate);
	
	  _createClass(PianoKey, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.pad = svg.create("rect");
	        this.element.appendChild(this.pad);
	
	        /* events */
	
	        if (!touch.exists) {
	
	          this.click = function () {
	            _this.piano.interacting = true;
	            _this.piano.paintbrush = !_this.state;
	            _this.down(_this.piano.paintbrush);
	          };
	          this.pad.addEventListener("mouseover", function () {
	            if (_this.piano.interacting) {
	              _this.down(_this.piano.paintbrush);
	            }
	          });
	
	          this.move = function () {};
	          this.pad.addEventListener("mousemove", function (e) {
	            if (_this.piano.interacting) {
	              if (!_this.offset) {
	                _this.offset = dom.findPosition(_this.element);
	              }
	              _this.mouse = dom.locateMouse(e, _this.offset);
	              _this.bend();
	            }
	          });
	
	          this.release = function () {
	            _this.piano.interacting = false;
	          };
	          this.pad.addEventListener("mouseup", function () {
	            if (_this.piano.interacting) {
	              _this.up();
	            }
	          });
	          this.pad.addEventListener("mouseout", function () {
	            if (_this.piano.interacting) {
	              _this.up();
	            }
	          });
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        //let radius = Math.min(this.width,this.height) / 5;
	        var radius = 5;
	
	        this.pad.setAttribute("x", 1);
	        this.pad.setAttribute("y", 1);
	        if (this.width > 2) {
	          this.pad.setAttribute("width", this.width - 2);
	        } else {
	          this.pad.setAttribute("width", this.width);
	        }
	        if (this.height > 2) {
	          this.pad.setAttribute("height", this.height - 2);
	        } else {
	          this.pad.setAttribute("height", this.height);
	        }
	        this.pad.setAttribute("rx", radius);
	        this.pad.setAttribute("ry", radius);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors[this.color]);
	        } else {
	          this.pad.setAttribute("fill", "#d18");
	        }
	      }
	    }
	  });
	
	  return PianoKey;
	})(ButtonTemplate);
	
	var Piano = (function (_Interface) {
	  function Piano() {
	    _classCallCheck(this, Piano);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [500, 150],
	      target: false,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Piano.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.keyPattern = ["w", "b", "w", "b", "w", "w", "b", "w", "b", "w", "b", "w"];
	
	    this.paintbrush = false;
	
	    this.range = {
	      low: 24,
	      high: 60
	    };
	
	    this.range.size = this.range.high - this.range.low;
	
	    this.keys = [];
	    //  this.active = -1;
	
	    this.toggleTo = false;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Piano, _Interface);
	
	  _createClass(Piano, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.element.style.position = "relative";
	        this.element.style.display = "block";
	        this.element.style.width = "100%";
	        this.element.style.height = "100%";
	        this.element.style.backgroundColor = "#ddd";
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        for (var i = 0; i < this.range.high - this.range.low; i++) {
	
	          var container = document.createElement("span");
	          var scaleIndex = (i + this.range.low) % this.keyPattern.length;
	
	          var key = new PianoKey(container, {
	            component: true,
	            note: i + this.range.low,
	            color: this.keyPattern[scaleIndex]
	          }, this.keyChange.bind(this, i + this.range.low));
	
	          key.piano = this;
	          //  key.scaleIndex =
	
	          if (touch.exists) {
	            key.pad.index = i;
	            key.preClick = key.preMove = key.preRelease = function () {};
	            key.click = key.move = key.release = function () {};
	            key.preTouch = key.preTouchMove = key.preTouchRelease = function () {};
	            key.touch = key.touchMove = key.touchRelease = function () {};
	          }
	
	          this.keys.push(key);
	          this.element.appendChild(container);
	        }
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var keyX = 0;
	
	        var keyPositions = [];
	
	        for (var i = 0; i < this.range.high - this.range.low; i++) {
	
	          keyPositions.push(keyX);
	
	          var scaleIndex = (i + this.range.low) % this.keyPattern.length;
	          var nextScaleIndex = (i + 1 + this.range.low) % this.keyPattern.length;
	          if (this.keyPattern[scaleIndex] === "w" && this.keyPattern[nextScaleIndex] === "w") {
	            keyX += 1;
	          } else {
	            keyX += 0.5;
	          }
	        }
	        var keysWide = keyX;
	
	        var padding = this.width / 40;
	        var buttonWidth = (this.width - padding * 2) / keysWide;
	        var buttonHeight = (this.height - padding * 2) / 2;
	
	        for (var i = 0; i < this.keys.length; i++) {
	
	          var container = this.keys[i].parent;
	          //  let scaleIndex = this.keys[i].index;
	          container.style.position = "absolute";
	          container.style.left = keyPositions[i] * buttonWidth + padding + "px";
	          if (this.keys[i].color === "w") {
	            container.style.top = buttonHeight + padding + "px";
	          } else {
	            container.style.top = padding + "px";
	          }
	
	          this.keys[i].resize(buttonWidth, buttonHeight);
	        }
	      }
	    },
	    keyChange: {
	      value: function keyChange(i, v) {
	        // emit data for any key turning on/off
	        // i is the note index
	        // v is whether it is on or off
	        // console.log(this,i,v);
	        this.emit("change", i, v);
	        // rename to (note,on)
	      }
	    },
	    drag: {
	      value: function drag(note, on) {
	        this.emit("change", note, on);
	      }
	    },
	    render: {
	      value: function render() {}
	    },
	    addTouchListeners: {
	      value: function addTouchListeners() {
	        var _this = this;
	
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        this.currentElement = false;
	
	        this.element.addEventListener("touchstart", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var key = _this.keys[element.index];
	          _this.paintbrush = !key.state;
	          key.down(_this.paintbrush);
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchmove", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var key = _this.keys[element.index];
	          if (element.index !== _this.currentElement) {
	            if (_this.currentElement) {
	              var pastKey = _this.keys[_this.currentElement];
	              pastKey.up();
	            }
	            key.down(_this.paintbrush);
	          } else {
	            key.bend();
	          }
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchend", function (e) {
	          // no touches to calculate because none remaining
	          var key = _this.keys[_this.currentElement];
	          key.up();
	          _this.interacting = false;
	          _this.currentElement = false;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	      }
	    }
	  });
	
	  return Piano;
	})(Interface);
	
	module.exports = Piano;
	
	// loop through and render the keys?

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	var ButtonTemplate = __webpack_require__(22);
	var MatrixModel = __webpack_require__(29);
	var CounterModel = __webpack_require__(30);
	//let Time = require('../core/time');
	var touch = __webpack_require__(9);
	
	var MatrixCell = (function (_ButtonTemplate) {
	  function MatrixCell() {
	    _classCallCheck(this, MatrixCell);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [80, 80],
	      target: false,
	      mode: "toggle",
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(MatrixCell.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.index = this.settings.index;
	    this.row = this.settings.row;
	    this.column = this.settings.column;
	
	    this.interacting = false;
	    this.paintbrush = false;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(MatrixCell, _ButtonTemplate);
	
	  _createClass(MatrixCell, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.element.style.top = "0px";
	        this.element.style.left = "0px";
	        this.element.style.position = "absolute";
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.pad = svg.create("rect");
	        this.element.appendChild(this.pad);
	
	        this.sizeInterface();
	
	        /* events */
	
	        if (!touch.exists) {
	
	          this.click = function () {
	            _this.matrix.interacting = true;
	            _this.matrix.paintbrush = !_this.state;
	            _this.down(_this.matrix.paintbrush);
	          };
	          this.pad.addEventListener("mouseover", function () {
	            if (_this.matrix.interacting) {
	              _this.down(_this.matrix.paintbrush);
	            }
	          });
	
	          this.move = function () {};
	          this.pad.addEventListener("mousemove", function (e) {
	            if (_this.matrix.interacting) {
	              if (!_this.offset) {
	                _this.offset = dom.findPosition(_this.element);
	              }
	              _this.mouse = dom.locateMouse(e, _this.offset);
	              _this.bend();
	            }
	          });
	
	          this.release = function () {
	            _this.matrix.interacting = false;
	          };
	          this.pad.addEventListener("mouseup", function () {
	            if (_this.matrix.interacting) {
	              _this.up();
	            }
	          });
	          this.pad.addEventListener("mouseout", function () {
	            if (_this.matrix.interacting) {
	              _this.up();
	            }
	          });
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.pad.setAttribute("x", 1);
	        this.pad.setAttribute("y", 1);
	        if (this.width > 2) {
	          this.pad.setAttribute("width", this.width - 2);
	        } else {
	          this.pad.setAttribute("width", this.width);
	        }
	        if (this.height > 2) {
	          this.pad.setAttribute("height", this.height - 2);
	        } else {
	          this.pad.setAttribute("height", this.height);
	        }
	        //this.pad.setAttribute('height', this.height - 2);
	        this.pad.setAttribute("fill", "#e7e7e7");
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", "#e7e7e7");
	        } else {
	          this.pad.setAttribute("fill", "#d18");
	        }
	      }
	    }
	  });
	
	  return MatrixCell;
	})(ButtonTemplate);
	
	var Matrix = (function (_Interface) {
	  function Matrix() {
	    _classCallCheck(this, Matrix);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [400, 200],
	      target: false,
	      value: 0,
	      mode: "toggle"
	    };
	
	    _get(Object.getPrototypeOf(Matrix.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.columns = 10;
	    this.rows = 5;
	
	    this.cells = [];
	    this.active = -1;
	
	    this.mode = this.settings.mode;
	
	    this.model = new MatrixModel(this.rows, this.columns);
	    this.model.ui = this;
	
	    this.model.format();
	
	    //  this.sequence = { value: -1 };
	    this.sequence = new CounterModel(0, this.columns);
	    // this.pulse = new Time.Interval();
	
	    this.init();
	    //  this.render();
	  }
	
	  _inherits(Matrix, _Interface);
	
	  _createClass(Matrix, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.element.style.position = "relative";
	        this.element.style.display = "block";
	        this.element.style.width = "100%";
	        this.element.style.height = "100%";
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        for (var i = 0; i < this.model.length; i++) {
	
	          var _location = this.model.locate(i);
	          // returns {row,col}
	
	          var container = document.createElement("span");
	          container.style.position = "absolute";
	
	          var cell = new MatrixCell(container, {
	            component: true,
	            index: i,
	            row: _location.row,
	            column: _location.column,
	            mode: this.mode
	          }, this.keyChange.bind(this, i));
	
	          cell.matrix = this;
	          if (touch.exists) {
	            cell.pad.index = i;
	            cell.preClick = cell.preMove = cell.preRelease = function () {};
	            cell.click = cell.move = cell.release = function () {};
	            cell.preTouch = cell.preTouchMove = cell.preTouchRelease = function () {};
	            cell.touch = cell.touchMove = cell.touchRelease = function () {};
	          }
	
	          this.cells.push(cell);
	          this.element.appendChild(container);
	        }
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var cellWidth = this.width / this.columns;
	        var cellHeight = this.height / this.rows;
	
	        for (var i = 0; i < this.cells.length; i++) {
	          var container = this.cells[i].parent;
	          container.style.left = this.cells[i].column * cellWidth + "px";
	          container.style.top = this.cells[i].row * cellHeight + "px";
	          this.cells[i].resize(cellWidth, cellHeight);
	        }
	      }
	    },
	    update: {
	      value: function update() {
	        var _this = this;
	
	        this.model.iterate(function (r, c, i) {
	          if (_this.model.pattern[r][c] > 0) {
	            _this.cells[i].state = true;
	          } else {
	            _this.cells[i].state = false;
	          }
	        });
	      }
	    },
	    keyChange: {
	      value: function keyChange(i, v) {
	        // emit data for any key turning on/off
	        // i is the note index
	        // v is whether it is on or off
	        // console.log(this,i,v);
	        this.emit("change", i, v);
	        // rename to (note,on)
	      }
	    },
	    render: {
	      value: function render() {
	        var _this = this;
	
	        if (this.sequence.value >= 0) {
	          this.model.iterate(function (r, c, i) {
	            if (c === _this.sequence.value) {
	              _this.cells[i].pad.setAttribute("stroke", "#fff");
	              _this.cells[i].pad.setAttribute("stroke-width", "6");
	            } else {
	              _this.cells[i].pad.setAttribute("stroke", "none");
	            }
	          });
	        }
	      }
	    },
	    start: {
	      value: function start() {
	        if (!this.invertal) {
	          this.next();
	          this.interval = setInterval(this.next.bind(this), 200);
	        }
	      }
	    },
	    stop: {
	      value: function stop() {
	        clearInterval(this.interval);
	        this.interval = false;
	      }
	    },
	    next: {
	      value: function next() {
	        //this.sequence.next();
	        //  this.sequence.value = (this.sequence.value + 1) % this.columns;
	        this.sequence.next();
	        this.emit("change", this.model.column(this.sequence.value));
	        this.render();
	      }
	    },
	    addTouchListeners: {
	      // introduce counter model and timing
	
	      value: function addTouchListeners() {
	        var _this = this;
	
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        this.currentElement = false;
	
	        this.element.addEventListener("touchstart", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var cell = _this.cells[element.index];
	          _this.paintbrush = !cell.state;
	          cell.down(_this.paintbrush);
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchmove", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var cell = _this.cells[element.index];
	          if (element.index !== _this.currentElement) {
	            if (_this.currentElement >= 0) {
	              var pastCell = _this.cells[_this.currentElement];
	              pastCell.up();
	            }
	            cell.down(_this.paintbrush);
	          } else {
	            cell.bend();
	          }
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchend", function (e) {
	          // no touches to calculate because none remaining
	          var cell = _this.cells[_this.currentElement];
	          cell.up();
	          _this.interacting = false;
	          _this.currentElement = false;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	      }
	    }
	  });
	
	  return Matrix;
	})(Interface);
	
	module.exports = Matrix;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//import math from '../util/math';
	
	var Matrix = (function () {
	  function Matrix(rows, columns) {
	    var _this = this;
	
	    _classCallCheck(this, Matrix);
	
	    // should also have ability to create using an existing matrix (2d array)
	    this.rows = rows;
	    this.columns = columns;
	    this.pattern = [];
	    this.create(rows, columns);
	
	    this.toggle = {
	      cell: function (row, column) {
	        _this.pattern[row][column] = !_this.pattern[row][column]; // math.invert(this.pattern[row][column]);
	        _this.ui.update();
	        return _this.pattern[row][column];
	      },
	      all: function () {
	        _this.iterate(function (r, c) {
	          _this.toggle.cell(r, c);
	        });
	        _this.ui.update();
	      },
	      row: function (row) {
	        for (var i = 0; i < _this.columns; i++) {
	          _this.toggle.cell(row, i);
	        }
	        _this.ui.update();
	      },
	      column: function (column) {
	        for (var i = 0; i < _this.rows; i++) {
	          _this.toggle.cell(i, column);
	        }
	        _this.ui.update();
	      }
	    };
	
	    this.set = {
	      cell: function (row, column, value) {
	        _this.pattern[row][column] = value;
	        return _this.pattern[row][column];
	      } };
	
	    this.rotate = {
	      all: function (amount) {
	        for (var i = 0; i < _this.rows; i++) {
	          var cut = _this.pattern[i].splice(_this.pattern[i].length - amount, amount);
	          _this.pattern[i] = cut.concat(_this.pattern[i]);
	        }
	        _this.format();
	        _this.ui.update();
	      },
	      row: function (row, amount) {
	        var cut = _this.pattern[row].splice(_this.pattern[row].length - amount, amount);
	        _this.pattern[row] = cut.concat(_this.pattern[row]);
	        _this.format();
	        _this.ui.update();
	      } };
	
	    // the idea behind populate is to be able to set a whole row or colum to 0 or 1
	    // IF the value is a float, such as 0.7, then it would become a probability
	    // so populate(0.7) would give each cell a 70% chance of being 1
	    this.populate = {
	      all: function () {},
	      row: function () {},
	      column: function () {}
	    };
	
	    // essentiall populate(0) so i'm not sure if this is necessary but is nice
	    this.erase = {
	      all: function () {},
	      row: function () {},
	      column: function () {}
	    };
	
	    // end constructor
	  }
	
	  _createClass(Matrix, {
	    create: {
	      value: function create(rows, columns) {
	        var _this = this;
	
	        this.rows = rows;
	        this.columns = columns;
	        this.pattern = [];
	        for (var row = 0; row < this.rows; row++) {
	          this.pattern.push([]);
	        }
	        this.iterate(function (r, c) {
	          _this.pattern[r][c] = false;
	        });
	      }
	    },
	    iterate: {
	      value: function iterate(f, f2) {
	        var i = 0;
	        for (var row = 0; row < this.rows; row++) {
	          if (f2) {
	            f2(row);
	          }
	          for (var column = 0; column < this.columns; column++) {
	            f(row, column, i);
	            i++;
	          }
	        }
	      }
	    },
	    format: {
	      value: function format() {
	        var _this = this;
	
	        var patternString = "";
	        this.iterate(function (r, c) {
	          patternString += (_this.pattern[r][c] ? 1 : 0) + " ";
	        }, function () {
	          patternString += "\n";
	        });
	        return patternString;
	      }
	    },
	    update: {
	      value: function update(pattern) {
	        this.pattern = pattern || this.pattern;
	      }
	    },
	    length: {
	      get: function () {
	        return this.rows * this.columns;
	      }
	    },
	    locate: {
	      value: function locate(index) {
	        // returns row and column of cell by index
	        return {
	          row: ~ ~(index / this.columns),
	          column: index % this.columns
	        };
	      }
	    },
	    indexOf: {
	      value: function indexOf(row, column) {
	        return column + row * this.columns;
	        // returns index of cell by row and column
	      }
	    },
	    row: {
	      value: (function (_row) {
	        var _rowWrapper = function row(_x) {
	          return _row.apply(this, arguments);
	        };
	
	        _rowWrapper.toString = function () {
	          return _row.toString();
	        };
	
	        return _rowWrapper;
	      })(function (row) {
	        var data = [];
	        for (var i = 0; i < this.columns; i++) {
	          data.push(this.pattern[row] ? 1 : 0);
	        }
	        return data;
	      })
	    },
	    column: {
	      value: (function (_column) {
	        var _columnWrapper = function column(_x2) {
	          return _column.apply(this, arguments);
	        };
	
	        _columnWrapper.toString = function () {
	          return _column.toString();
	        };
	
	        return _columnWrapper;
	      })(function (column) {
	        var data = [];
	        for (var i = 0; i < this.rows; i++) {
	          data.push(this.pattern[i][column] ? 1 : 0);
	        }
	        return data;
	      }
	
	      /* brainstorm:
	         rotate single row or column
	         randomly fill row with some probability
	          populateRow([0.7,0.1]) will fill the first space 70% of time, second space 10% of time, third space 70%, etc...
	        invert row?
	        erase row or column
	        ** add/remove row or column <= there is no function for this yet.
	        toggle random cell ?
	          performance:
	        // these should probably be methods of the matrix interface in interfaces/matrix.js
	        // or should they be here?
	        start sequencing
	        stop sequencing
	        sequencing modes -- direction w/ step, drunk, random, pattern
	        sequence vertically too
	        loop portion
	        jump to column index
	       */
	
	      )
	    }
	  });
	
	  return Matrix;
	})();
	
	module.exports = Matrix;
	
	/*  all: () => {
	      // set the whole matrix using a 2d array as input
	    },
	    row: () => {
	      // set a row using an array as input
	    },
	    column: () => {
	      // set a row using an array as input
	    } */

	/*  column: () => {
	      // rotate the values in a column
	      // i.e. 1 2 3 4   becomes 4 1 2 3
	    } */

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = _interopRequire(__webpack_require__(31));
	
	var Counter = (function () {
	    function Counter(min, max, mode, value) {
	        _classCallCheck(this, Counter);
	
	        this.min = min || 0;
	        this.max = max || 10;
	        this.value = value || this.min;
	        this.mode = mode || "up";
	    }
	
	    _createClass(Counter, {
	        mode: {
	            set: function (mode) {
	                this._mode = mode;
	                this.next = this[mode];
	            },
	            get: function () {
	                return this._mode;
	            }
	        },
	        up: {
	            value: function up() {
	                this.value++;
	                if (this.value >= this.max) {
	                    this.value = this.min;
	                }
	                return this.value;
	            }
	        },
	        down: {
	            value: function down() {
	                this.value--;
	                if (this.value < this.min) {
	                    this.value = this.max;
	                }
	                return this.value;
	            }
	        },
	        random: {
	            value: function random() {
	                this.value = math.ri(this.min, this.max);
	                return this.value;
	            }
	        },
	        drunk: {
	            value: function drunk() {
	                var drnk = new Drunk(this.min, this.max, this.value, 1, true);
	                this.value = drnk.step();
	                return this.value;
	            }
	        }
	    });
	
	    return Counter;
	})();
	
	module.exports = Counter;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = (function () {
	    function Drunk(min, max, value, increment, loop) {
	        _classCallCheck(this, Drunk);
	
	        this.min = min || 0;
	        this.max = max || 9;
	        this.value = value || 0;
	        this.increment = increment || 1;
	        this.loop = loop;
	    }
	
	    _createClass(Drunk, {
	        step: {
	            value: function step() {
	                this.value += math.pick(-1 * this.increment, this.increment);
	                if (this.value > this.max) {
	                    if (this.loop) {
	                        this.value = this.min;
	                    } else {
	                        this.value -= this.increment;
	                    }
	                }
	
	                if (this.value < this.min) {
	                    if (this.loop) {
	                        this.value = this.max;
	                    } else {
	                        this.value += this.increment;
	                    }
	                }
	                return this.value;
	            }
	        }
	    });
	
	    return Drunk;
	})();
	
	module.exports = Drunk;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	var Pan3D = (function (_Interface) {
	  function Pan3D() {
	    _classCallCheck(this, Pan3D);
	
	    var options = ["range"];
	
	    var defaults = {
	      size: [200, 200],
	      range: 0.5,
	      mode: "absolute"
	    };
	
	    _get(Object.getPrototypeOf(Pan3D.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._value = {
	      x: new Step(0, 1, 0, 0.5),
	      y: new Step(0, 1, 0, 0.5)
	    };
	
	    this.mode = this.settings.mode;
	
	    this.position = {
	      x: new Interaction.Handle(this.mode, "horizontal", [0, this.width], [this.height, 0]),
	      y: new Interaction.Handle(this.mode, "vertical", [0, this.width], [this.height, 0])
	    };
	    this.position.x.value = this._value.x.normalized;
	    this.position.y.value = this._value.y.normalized;
	
	    this.speakers = [[0.5, 0.2], [0.75, 0.25], [0.8, 0.5], [0.75, 0.75], [0.5, 0.8], [0.25, 0.75], [0.2, 0.5], [0.25, 0.25]];
	
	    this.range = this.settings.range;
	
	    this.levels = [];
	
	    this.init();
	
	    this.calculateLevels();
	    this.render();
	  }
	
	  _inherits(Pan3D, _Interface);
	
	  _createClass(Pan3D, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.element.style.backgroundColor = "#e7e7e7";
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.knob);
	
	        // add speakers
	        this.speakerElements = [];
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = svg.create("circle");
	
	          this.element.appendChild(speakerElement);
	
	          this.speakerElements.push(speakerElement);
	        }
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        this.knobRadius = {
	          off: ~ ~(this._minDimension / 100) * 3 + 5 };
	        this.knobRadius.on = this.knobRadius.off * 2;
	
	        this.knob.setAttribute("cx", this.width / 2);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobRadius.off);
	        this.knob.setAttribute("fill", "#ccc");
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = this.speakerElements[i];
	          var speaker = this.speakers[i];
	          speakerElement.setAttribute("cx", speaker[0] * this.width);
	          speakerElement.setAttribute("cy", speaker[1] * this.height);
	          speakerElement.setAttribute("r", this._minDimension / 20 + 5);
	          speakerElement.setAttribute("fill", "#d18");
	          speakerElement.setAttribute("fill-opacity", "0");
	          speakerElement.setAttribute("stroke", "#d18");
	        }
	
	        this.position.x.resize([0, this.width], [this.height, 0]);
	        this.position.y.resize([0, this.width], [this.height, 0]);
	
	        // next, need to
	        // resize positions
	        // calculate speaker distances
	        this.calculateLevels();
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        this.knobCoordinates = {
	          x: this._value.x.normalized * this.width,
	          y: this.height - this._value.y.normalized * this.height
	        };
	
	        this.knob.setAttribute("cx", this.knobCoordinates.x);
	        this.knob.setAttribute("cy", this.knobCoordinates.y);
	      }
	    },
	    click: {
	      value: function click() {
	        this.position.x.anchor = this.mouse;
	        this.position.y.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.x.update(this.mouse);
	          this.position.y.update(this.mouse);
	          // position.x and position.y are normalized
	          // so are the levels
	          // likely don't need this.value at all -- only used for drawing
	          // not going to be a 'step' or 'min' and 'max' in this one.
	          this.calculateLevels();
	          this.emit("change", this.levels);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    value: {
	      get: function () {
	        return {
	          x: this._value.x.value,
	          y: this._value.y.value
	        };
	      },
	      set: function (value) {
	        return {
	          x: this._value.x.update(value.x),
	          y: this._value.y.update(value.y)
	        };
	      }
	    },
	    normalized: {
	      get: function () {
	        return {
	          x: this._value.x.normalized,
	          y: this._value.y.normalized
	        };
	      }
	    },
	    calculateLevels: {
	      value: function calculateLevels() {
	        var _this = this;
	
	        this.value = {
	          x: this._value.x.updateNormal(this.position.x.value),
	          y: this._value.y.updateNormal(this.position.y.value)
	        };
	        this.levels = [];
	        this.speakers.forEach(function (s, i) {
	          var distance = math.distance(s[0] * _this.width, s[1] * _this.height, _this.position.x.value * _this.width, (1 - _this.position.y.value) * _this.height);
	          var level = math.clip(1 - distance / (_this.range * _this.width), 0, 1);
	          _this.levels.push(level);
	          _this.speakerElements[i].setAttribute("fill-opacity", level);
	        });
	      }
	    }
	  });
	
	  return Pan3D;
	})(Interface);
	
	module.exports = Pan3D;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var SliderTemplate = __webpack_require__(34);
	
	var TiltSlider = (function (_SliderTemplate) {
	  function TiltSlider() {
	    _classCallCheck(this, TiltSlider);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      orientation: "horizontal",
	      mode: "relative",
	      scale: [0, 1],
	      step: 0,
	      value: 0,
	      hasKnob: true
	    };
	
	    _get(Object.getPrototypeOf(TiltSlider.prototype), "constructor", this).call(this, arguments, options, defaults);
	  }
	
	  _inherits(TiltSlider, _SliderTemplate);
	
	  return TiltSlider;
	})(SliderTemplate);
	
	var Tilt = (function (_Interface) {
	  function Tilt() {
	    _classCallCheck(this, Tilt);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [80, 80],
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Tilt.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.sliders = [];
	
	    this.active = false;
	
	    this.init();
	
	    // add event listener for device orientation
	
	    this.boundUpdate = this.update.bind(this);
	    //	this.boundMozTilt = this.mozTilt.bind(this)
	
	    if (window.DeviceOrientationEvent) {
	      window.addEventListener("deviceorientation", this.boundUpdate, false);
	    } /*else if (window.OrientationEvent) {
	      //	  	window.addEventListener('MozOrientation', this.boundMozTilt, false);
	      } else {
	      	console.log('Not supported on your device or browser.');
	      } */
	  }
	
	  _inherits(Tilt, _Interface);
	
	  _createClass(Tilt, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        var sliderWidth = this.width - 20;
	        var sliderHeight = (this.height - 20) / 3;
	
	        for (var i = 0; i < 3; i++) {
	          var container = document.createElement("span");
	          container.style.margin = "10px";
	          container.style.position = "relative";
	
	          var slider = new TiltSlider(container, {
	            size: [sliderWidth, sliderHeight],
	            scale: [0, 1],
	            step: 0,
	            mode: "relative",
	            hasKnob: false,
	            component: true });
	          slider.click = slider.preClick = function () {};
	          slider.move = slider.preMove = function () {};
	          slider.release = slider.preRelease = function () {};
	          this.sliders.push(slider);
	          this.element.appendChild(container);
	        }
	      }
	    },
	    update: {
	      value: function update(v) {
	        if (this.active) {
	
	          var x = v.beta;
	          var y = v.gamma;
	
	          // take the original -90 to 90 scale and normalize it 0-1
	          x = math.scale(x, -90, 90, 0, 1);
	          y = math.scale(y, -90, 90, 0, 1);
	
	          this.sliders[0].value = x;
	          this.sliders[1].value = y;
	
	          this.emit("change", {
	            x: x,
	            y: y
	          });
	        }
	
	        // eventually would be great to have a Step here so that someone could map it to 0-1000 by 100
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active;
	        // should also dim the interface if inactive
	      }
	    }
	  });
	
	  return Tilt;
	})(Interface);
	
	module.exports = Tilt;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	var SliderTemplate = (function (_Interface) {
	  function SliderTemplate(args, options, defaults) {
	    _classCallCheck(this, SliderTemplate);
	
	    _get(Object.getPrototypeOf(SliderTemplate.prototype), "constructor", this).call(this, args, options, defaults);
	
	    this.orientation = this.settings.orientation;
	
	    this.mode = this.settings.mode;
	
	    this.hasKnob = this.settings.hasKnob;
	
	    // this.step should eventually be get/set
	    // updating it will update the _value step model
	    this.step = this.settings.step; // float
	
	    this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
	
	    this.init();
	
	    this.position = new Interaction.Handle(this.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.value = this._value.value;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(SliderTemplate, _Interface);
	
	  _createClass(SliderTemplate, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.fillbar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.fillbar);
	        this.element.appendChild(this.knob);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (!this.settings.orientation) {
	          if (this.width < this.height) {
	            this.orientation = "vertical";
	          } else {
	            this.orientation = "horizontal";
	          }
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.normalized * h;
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * w;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	        this.bar.setAttribute("fill", "#e7e7e7");
	
	        if (this.orientation === "vertical") {
	          this.fillbar.setAttribute("x", x);
	          this.fillbar.setAttribute("y", this.knobData.level);
	          this.fillbar.setAttribute("width", w);
	          this.fillbar.setAttribute("height", h - this.knobData.level);
	        } else {
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("y", y);
	          this.fillbar.setAttribute("width", this.knobData.level);
	          this.fillbar.setAttribute("height", h);
	        }
	        this.fillbar.setAttribute("transform", barOffset);
	        this.fillbar.setAttribute("rx", cornerRadius);
	        this.fillbar.setAttribute("ry", cornerRadius);
	        this.fillbar.setAttribute("fill", "#d18");
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	        this.knob.setAttribute("fill", "#d18");
	
	        if (!this.hasKnob) {
	          this.knob.setAttribute("fill", "none");
	        }
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this._value.normalized * this.height;
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	          this.fillbar.setAttribute("y", this.height - this.knobData.level);
	          this.fillbar.setAttribute("height", this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * this.width;
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("width", this.knobData.level);
	        }
	      }
	    },
	    down: {
	      value: function down() {
	        this.clicked = true;
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.slide();
	      }
	    },
	    slide: {
	      value: function slide() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	          this.value = this._value.updateNormal(this.position.value);
	          this.emit("change", this.value);
	        }
	      }
	    },
	    up: {
	      value: function up() {
	        this.clicked = false;
	        this.render();
	      }
	    },
	    value: {
	      get: function () {
	        return this._value.value;
	      },
	      set: function (value) {
	        this._value.update(value);
	        this.position.value = this._value.normalized;
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    }
	  });
	
	  return SliderTemplate;
	})(Interface);
	
	module.exports = SliderTemplate;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	var SliderTemplate = __webpack_require__(34);
	var touch = __webpack_require__(9);
	
	var SingleSlider = (function (_SliderTemplate) {
	  function SingleSlider() {
	    var _this = this;
	
	    _classCallCheck(this, SingleSlider);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      orientation: "vertical",
	      mode: "absolute",
	      scale: [0, 1],
	      step: 0,
	      value: 0,
	      hasKnob: true
	    };
	
	    _get(Object.getPrototypeOf(SingleSlider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    /* events */
	
	    if (!touch.exists) {
	
	      this.click = function () {
	        _this.multislider.interacting = true;
	        _this.down();
	      };
	      this.element.addEventListener("mouseover", function (e) {
	        if (_this.multislider.interacting) {
	          if (!_this.offset) {
	            _this.offset = dom.findPosition(_this.element);
	          }
	          _this.mouse = dom.locateMouse(e, _this.offset);
	          _this.down();
	        }
	      });
	
	      this.move = function () {};
	      this.element.addEventListener("mousemove", function (e) {
	        if (_this.multislider.interacting) {
	          if (!_this.offset) {
	            _this.offset = dom.findPosition(_this.element);
	          }
	          _this.mouse = dom.locateMouse(e, _this.offset);
	          _this.slide();
	        }
	      });
	
	      this.release = function () {
	        _this.multislider.interacting = false;
	      };
	      this.element.addEventListener("mouseup", function () {
	        if (_this.multislider.interacting) {
	          _this.up();
	        }
	      });
	      this.element.addEventListener("mouseout", function () {
	        if (_this.multislider.interacting) {
	          _this.up();
	        }
	      });
	    }
	
	    this.customStyle();
	  }
	
	  _inherits(SingleSlider, _SliderTemplate);
	
	  _createClass(SingleSlider, {
	    customStyle: {
	      value: function customStyle() {
	
	        /* style changes */
	
	        this.bar.setAttribute("x", 0);
	        this.bar.setAttribute("transform", "translate(0,0)");
	        this.bar.setAttribute("rx", 0); // corner radius
	        this.bar.setAttribute("ry", 0);
	        this.bar.setAttribute("width", this.width);
	        this.bar.setAttribute("height", this.height);
	
	        this.fillbar.setAttribute("x", 0);
	        this.fillbar.setAttribute("transform", "translate(0,0)");
	        this.fillbar.setAttribute("rx", 0); // corner radius
	        this.fillbar.setAttribute("ry", 0);
	        this.fillbar.setAttribute("width", this.width);
	        this.fillbar.setAttribute("height", this.height);
	      }
	    }
	  });
	
	  return SingleSlider;
	})(SliderTemplate);
	
	var Multislider = (function (_Interface) {
	  function Multislider() {
	    _classCallCheck(this, Multislider);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [200, 100],
	      numberOfSliders: 5,
	      scale: [0, 100],
	      step: 1,
	      value: [70, 60, 50, 40, 30]
	    };
	
	    _get(Object.getPrototypeOf(Multislider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.min = this.settings.scale[0];
	    this.max = this.settings.scale[1];
	    this.step = this.settings.step;
	    this.numberOfSliders = this.settings.numberOfSliders;
	    this.value = this.settings.value;
	
	    this.sliders = [];
	
	    this.interacting = false;
	
	    this.init();
	  }
	
	  _inherits(Multislider, _Interface);
	
	  _createClass(Multislider, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        for (var i = 0; i < this.numberOfSliders; i++) {
	          var container = document.createElement("span");
	
	          var slider = new SingleSlider(container, {
	            scale: [this.min, this.max],
	            step: this.step,
	            mode: "absolute",
	            orientation: "vertical",
	            value: this.value[i],
	            hasKnob: false,
	            component: true }, this.update.bind(this, i));
	          slider.multislider = this;
	
	          if (touch.exists) {
	            slider.bar.index = i;
	            slider.fillbar.index = i;
	            slider.preClick = slider.preMove = slider.preRelease = function () {};
	            slider.click = slider.move = slider.release = function () {};
	            slider.preTouch = slider.preTouchMove = slider.preTouchRelease = function () {};
	            slider.touch = slider.touchMove = slider.touchRelease = function () {};
	          }
	
	          this.sliders.push(slider);
	          this.element.appendChild(container);
	        }
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var sliderWidth = this.width / this.numberOfSliders;
	        var sliderHeight = this.height;
	
	        for (var i = 0; i < this.sliders.length; i++) {
	          this.sliders[i].resize(sliderWidth, sliderHeight);
	          this.sliders[i].customStyle();
	        }
	      }
	    },
	    update: {
	      value: function update(index, value) {
	        this.emit("change", {
	          index: index,
	          value: value
	        });
	      }
	    },
	    addTouchListeners: {
	      value: function addTouchListeners() {
	        var _this = this;
	
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        this.currentElement = false;
	
	        this.element.addEventListener("touchstart", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var slider = _this.sliders[element.index];
	          if (!slider.offset) {
	            slider.offset = dom.findPosition(slider.element);
	          }
	          slider.mouse = dom.locateMouse(e, slider.offset);
	          slider.down();
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchmove", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var slider = _this.sliders[element.index];
	          if (!slider.offset) {
	            slider.offset = dom.findPosition(slider.element);
	          }
	          slider.mouse = dom.locateMouse(e, slider.offset);
	          if (element.index !== _this.currentElement) {
	            if (_this.currentElement >= 0) {
	              var pastslider = _this.sliders[_this.currentElement];
	              pastslider.up();
	            }
	            slider.down();
	          } else {
	            slider.slide();
	          }
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchend", function (e) {
	          // no touches to calculate because none remaining
	          var slider = _this.sliders[_this.currentElement];
	          slider.up();
	          _this.interacting = false;
	          _this.currentElement = false;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	      }
	    }
	  });
	
	  return Multislider;
	})(Interface);
	
	module.exports = Multislider;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	Pan interface
	*/
	
	var Pan = (function (_Interface) {
	  function Pan() {
	    _classCallCheck(this, Pan);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      orientation: "horizontal",
	      mode: "relative",
	      scale: [-1, 1],
	      step: 0,
	      value: 0,
	      hasKnob: true
	    };
	
	    _get(Object.getPrototypeOf(Pan.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.orientation = this.settings.orientation;
	
	    this.mode = this.settings.mode;
	
	    this.hasKnob = this.settings.hasKnob;
	
	    // this.step should eventually be get/set
	    // updating it will update the _value step model
	    this.step = this.settings.step; // float
	
	    this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
	
	    this.init();
	
	    this.position = new Interaction.Handle(this.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.value = this._value.value;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Pan, _Interface);
	
	  _createClass(Pan, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.fillbar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.fillbar);
	        this.element.appendChild(this.knob);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	
	        if (this.width < this.height) {
	          this.orientation = "vertical";
	        } else {
	          this.orientation = "horizontal";
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	        this.bar.setAttribute("fill", "#e7e7e7");
	
	        if (this.orientation === "vertical") {
	          this.fillbar.setAttribute("x", x);
	          this.fillbar.setAttribute("y", this.knobData.level);
	          this.fillbar.setAttribute("width", w);
	          this.fillbar.setAttribute("height", h - this.knobData.level);
	        } else {
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("y", y);
	          this.fillbar.setAttribute("width", this.knobData.level);
	          this.fillbar.setAttribute("height", h);
	        }
	        this.fillbar.setAttribute("transform", barOffset);
	        this.fillbar.setAttribute("rx", cornerRadius);
	        this.fillbar.setAttribute("ry", cornerRadius);
	        this.fillbar.setAttribute("fill", "none");
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	        this.knob.setAttribute("fill", "#d18");
	
	        if (!this.hasKnob) {
	          this.knob.setAttribute("fill", "transparent");
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	          this.fillbar.setAttribute("y", this.height - this.knobData.level);
	          this.fillbar.setAttribute("height", this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("width", this.knobData.level);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	
	          this.value = this._value.updateNormal(this.position.value);
	
	          this.emit("change", {
	            value: this.value,
	            L: Math.pow(math.scale(this.value, -1, 1, 1, 0), 2),
	            R: Math.pow(math.scale(this.value, -1, 1, 0, 1), 2)
	          });
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    value: {
	      get: function () {
	        return this._value.value;
	      },
	      set: function (value) {
	        this._value.update(value);
	        this.position.value = this._value.normalized;
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    }
	  });
	
	  return Pan;
	})(Interface);
	
	module.exports = Pan;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	var svg = __webpack_require__(4);
	//let dom = require('../util/dom');
	var Interface = __webpack_require__(6);
	
	var Point = function Point(point, envelope) {
	
	  this.x = point.x;
	  this.y = point.y;
	  this.envelope = envelope;
	
	  this.element = svg.create("circle");
	  this.element.setAttribute("fill", "#d18");
	
	  this.envelope.element.appendChild(this.element);
	
	  this.resize = function () {
	    var r = ~ ~(Math.min(this.envelope.width, this.envelope.height) / 50) + 2;
	    this.element.setAttribute("r", r);
	  };
	
	  this.move = function (x, y) {
	    // scale / clip the location here
	    this.x = x >= 0 ? x : this.x;
	    this.y = y >= 0 ? y : this.y;
	    this.location = this.getCoordinates();
	    this.element.setAttribute("cx", this.location.x);
	    this.element.setAttribute("cy", this.location.y);
	  };
	
	  this.getCoordinates = function () {
	    return {
	      x: this.x * this.envelope.width,
	      y: (1 - this.y) * this.envelope.height
	    };
	  };
	
	  this.move(this.x, this.y);
	  this.resize();
	
	  this.destroy = function () {
	    this.envelope.element.removeChild(this.element);
	  };
	};
	
	var Envelope = (function (_Interface) {
	  function Envelope() {
	    _classCallCheck(this, Envelope);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [300, 150]
	    };
	
	    _get(Object.getPrototypeOf(Envelope.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.points = [{
	      x: 0.1,
	      y: 0.4
	    }, {
	      x: 0.35,
	      y: 0.6
	    }, {
	      x: 0.65,
	      y: 0.2
	    }, {
	      x: 0.9,
	      y: 0.4
	    }];
	
	    this.nodes = [];
	
	    this.selected = false;
	
	    this.init();
	  }
	
	  _inherits(Envelope, _Interface);
	
	  _createClass(Envelope, {
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.element.style.backgroundColor = "#e7e7e7";
	
	        this.points.forEach(function (point) {
	          var node = new Point(point, _this);
	          _this.nodes.push(node);
	        });
	
	        this.line = svg.create("polyline");
	        this.line.setAttribute("stroke", "#d18");
	        this.line.setAttribute("stroke-width", 2);
	        this.line.setAttribute("fill", "none");
	
	        this.element.appendChild(this.line);
	
	        this.fill = svg.create("polyline");
	        this.fill.setAttribute("fill", "#d18");
	        this.fill.setAttribute("fill-opacity", "0.2");
	
	        this.element.appendChild(this.fill);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        for (var i = 0; i < this.nodes.length; i++) {
	          this.nodes[i].resize();
	          this.nodes[i].move();
	        }
	
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        //  this.nodes[this.selected].move( this.points )
	        this.calculatePath();
	      }
	    },
	    calculatePoints: {
	      value: function calculatePoints() {
	        var _this = this;
	
	        this.points = [];
	        this.nodes.forEach(function (node) {
	          _this.points.push({ x: node.x, y: node.y });
	        });
	      }
	    },
	    calculatePath: {
	      value: function calculatePath() {
	
	        // should re-order points here ?
	
	        //stroke data
	        var data = "0 " + this.nodes[0].location.y + ", ";
	
	        // data should be re-ordered based on x location.
	        // whatever function adds a node should add it at the right index
	
	        this.nodes.forEach(function (node) {
	          //  let location = node.getCoordinates();
	          data += node.location.x + " " + node.location.y + ", ";
	        });
	
	        //  data += point.x*this.width+' '+ point.y*this.height+', ';
	        data += this.width + " " + this.nodes[this.nodes.length - 1].location.y;
	
	        this.line.setAttribute("points", data);
	
	        // fill data
	        // add bottom corners
	
	        data += ", " + this.width + " " + this.height + ", ";
	        data += "0 " + this.height;
	
	        this.fill.setAttribute("points", data);
	      }
	    },
	    click: {
	      value: function click() {
	        // find nearest node and set this.selected (index)
	        this.hasMoved = false;
	        this.selected = this.findNearestNode();
	
	        this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
	        this.scaleNode(this.selected);
	
	        // must do this b/c new node may have been created
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.mouse.x = math.clip(this.mouse.x, 0, this.width);
	          console.log(this.mouse.x);
	          this.hasMoved = true;
	
	          this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
	          this.scaleNode(this.selected);
	
	          this.calculatePoints();
	          this.emit("change", this.points);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	
	        if (!this.hasMoved) {
	          this.nodes[this.selected].destroy();
	          this.nodes.splice(this.selected, 1);
	        }
	
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	
	        // reset this.selected
	        this.selected = null;
	      }
	    },
	    findNearestNode: {
	      value: function findNearestNode() {
	        var nearestIndex = null;
	        var nearestDist = 1000;
	        var before = false;
	        var x = this.mouse.x / this.width;
	        var y = 1 - this.mouse.y / this.height;
	        var nodes = this.nodes;
	        for (var i = 0; i < nodes.length; i++) {
	          var distance = Math.sqrt(Math.pow(nodes[i].x - x, 2), Math.pow(nodes[i].y - -y, 2));
	
	          if (distance < nearestDist) {
	            nearestDist = distance;
	            nearestIndex = i;
	            before = x > nodes[i].x;
	          }
	        }
	
	        if (nearestDist > 0.05) {
	          if (before) {
	            nearestIndex++;
	          }
	          this.nodes.splice(nearestIndex, 0, new Point({
	            x: this.mouse.x / this.width,
	            y: 1 - this.mouse.y / this.height
	          }, this));
	          this.hasMoved = true;
	        }
	
	        return nearestIndex;
	      }
	    },
	    scaleNode: {
	      value: function scaleNode(nodeIndex) {
	        var i = nodeIndex;
	        var prevX = 0;
	        var nextX = this.width;
	
	        var actualX = this.nodes[i].x;
	        var actualY = this.nodes[i].y;
	        var clippedX = math.clip(actualX, 0, 1);
	        var clippedY = math.clip(actualY, 0, 1);
	
	        console.log(clippedX);
	
	        this.nodes[i].move(clippedX, clippedY);
	
	        // find x value of nodes to the right and left
	        if (i > 0) {
	          prevX = this.nodes[i - 1].x;
	        }
	        if (this.nodes.length > i + 1) {
	          nextX = this.nodes[i + 1].x;
	        }
	
	        if (this.nodes[i].x < prevX) {
	          this.nodes.splice(i - 1, 0, this.nodes.splice(i, 1)[0]);
	          i = i - 1;
	          this.selected = i;
	        }
	
	        if (this.nodes[i].x > nextX) {
	          this.nodes.splice(i + 1, 0, this.nodes.splice(i, 1)[0]);
	          i = i + 1;
	          this.selected = i;
	        }
	      }
	    }
	  });
	
	  return Envelope;
	})(Interface);
	
	module.exports = Envelope;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	//let math = require('../util/math');
	var Interface = __webpack_require__(6);
	
	var Spectrogram = (function (_Interface) {
	  function Spectrogram() {
	    _classCallCheck(this, Spectrogram);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [300, 150]
	    };
	
	    _get(Object.getPrototypeOf(Spectrogram.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.context = mt.context;
	
	    this.analyser = this.context.createAnalyser();
	    this.analyser.fftSize = 2048;
	    this.bufferLength = this.analyser.frequencyBinCount;
	    this.dataArray = new Uint8Array(this.bufferLength);
	
	    this.active = true;
	
	    this.init();
	  }
	
	  _inherits(Spectrogram, _Interface);
	
	  _createClass(Spectrogram, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        this.analyser.getByteFrequencyData(this.dataArray);
	
	        this.canvas.context.fillStyle = "rgb(240, 240, 240)";
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        var barWidth = this.canvas.element.width / this.bufferLength;
	        var barHeight = undefined;
	        var x = 0;
	
	        var definition = this.canvas.element.width / 50;
	
	        for (var i = 0; i < this.bufferLength; i = i + definition) {
	          //  console.log(i);
	          //  barHeight = mt.average(dataArray.slice(i,i+definition));
	          barHeight = Math.max.apply(null, this.dataArray.slice(i, i + definition));
	          barHeight /= 255;
	          barHeight *= this.canvas.element.height;
	
	          this.canvas.context.fillStyle = "#d18";
	          this.canvas.context.fillRect(x, this.canvas.element.height - barHeight, barWidth * definition, barHeight);
	
	          x += barWidth * definition;
	        }
	      }
	    },
	    watch: {
	      value: function watch(node) {
	        node.connect(this.analyser);
	        this.render();
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active;
	        this.render();
	      }
	    }
	  });
	
	  return Spectrogram;
	})(Interface);
	
	module.exports = Spectrogram;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	
	var Meter = (function (_Interface) {
	  function Meter() {
	    _classCallCheck(this, Meter);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [30, 100]
	    };
	
	    _get(Object.getPrototypeOf(Meter.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.context = mt.context;
	
	    this.channels = 2;
	    this.analysers = [];
	
	    /*
	        // add linear gradient
	        var grd = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
	        // light blue
	        grd.addColorStop(0, '#000');
	        grd.addColorStop(0.2, '#bbb');
	        grd.addColorStop(0.4, '#d18');
	        // dark blue
	        grd.addColorStop(1, '#d18');
	        canvasCtx.fillStyle = grd; */
	
	    this.active = true;
	
	    this.init();
	  }
	
	  _inherits(Meter, _Interface);
	
	  _createClass(Meter, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        this.canvas.context.fillStyle = "rgb(240,240,240)";
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        for (var i = 0; i < this.analysers.length; i++) {
	
	          this.analysers[i].getFloatTimeDomainData(this.dataArray);
	
	          var rms = 0;
	
	          for (var _i = 0; _i < this.dataArray.length; _i++) {
	            rms += this.dataArray[_i] * this.dataArray[_i];
	          }
	
	          rms = Math.sqrt(rms / this.dataArray.length);
	
	          var db = 20 * Math.log10(rms);
	
	          if (db > -70) {
	
	            var linear = math.normalize(db, -70, 5);
	            var exp = linear * linear;
	            var y = math.scale(exp, 0, 1, this.element.height, 0);
	
	            this.canvas.context.fillStyle = this.colors.accent;
	            this.canvas.context.fillRect(this.meterWidth * i, y, this.meterWidth, this.canvas.element.height - y);
	          }
	        }
	      }
	    },
	    watch: {
	      value: function watch(node) {
	        var channels = arguments[1] === undefined ? 1 : arguments[1];
	
	        // erase past analysers and splitter
	        // create splitter of right # of channels
	        // create new analysers array
	        this.channels = channels;
	        this.meterWidth = this.canvas.element.width / this.channels;
	
	        this.splitter = this.context.createChannelSplitter(this.channels);
	        node.connect(this.splitter);
	
	        for (var i = 0; i < this.channels; i++) {
	          var analyser = this.context.createAnalyser();
	          this.splitter.connect(analyser, i);
	          analyser.fftSize = 1024;
	          analyser.smoothingTimeConstant = 1;
	          this.analysers.push(analyser);
	        }
	        this.bufferLength = this.analysers[0].frequencyBinCount;
	        this.dataArray = new Float32Array(this.bufferLength);
	
	        this.render();
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active;
	        this.render();
	      }
	    }
	  });
	
	  return Meter;
	})(Interface);
	
	module.exports = Meter;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	//let math = require('../util/math');
	var Interface = __webpack_require__(6);
	
	var Oscilloscope = (function (_Interface) {
	  function Oscilloscope() {
	    _classCallCheck(this, Oscilloscope);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [300, 150]
	    };
	
	    _get(Object.getPrototypeOf(Oscilloscope.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.context = mt.context;
	
	    this.analyser = this.context.createAnalyser();
	    this.analyser.fftSize = 2048;
	    this.bufferLength = this.analyser.frequencyBinCount;
	    this.dataArray = new Uint8Array(this.bufferLength);
	    this.analyser.getByteTimeDomainData(this.dataArray);
	
	    this.active = true;
	
	    this.init();
	  }
	
	  _inherits(Oscilloscope, _Interface);
	
	  _createClass(Oscilloscope, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        this.analyser.getByteTimeDomainData(this.dataArray);
	
	        this.canvas.context.fillStyle = "rgb(240, 240, 240)";
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        this.canvas.context.lineWidth = ~ ~(this.height / 100 + 2);
	        this.canvas.context.strokeStyle = "#d18";
	
	        this.canvas.context.beginPath();
	
	        var sliceWidth = this.canvas.element.width * 1 / this.bufferLength;
	        var x = 0;
	
	        for (var i = 0; i < this.bufferLength; i++) {
	
	          var v = this.dataArray[i] / 128;
	          var y = v * this.canvas.element.height / 2;
	
	          if (i === 0) {
	            this.canvas.context.moveTo(x, y);
	          } else {
	            this.canvas.context.lineTo(x, y);
	          }
	
	          x += sliceWidth;
	        }
	
	        this.canvas.context.stroke();
	      }
	    },
	    watch: {
	      value: function watch(node) {
	        node.connect(this.analyser);
	        this.render();
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active;
	        this.render();
	      }
	    }
	  });
	
	  return Oscilloscope;
	})(Interface);
	
	module.exports = Oscilloscope;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	/*
	What does the API look like?
	
	1) Main concept:
	synth = mt.rack('#container');
	
	Transform all elements inside a div
	synth.ui.slider1 will hold the first slider interface
	
	
	2) What about writing a rack that is re-usable?
	Could also take JSON
	
	mt.rack('#container',{
	  pre: () => {
	    create some divs here, or some audio code
	  },
	  interface: {
	    slider1: mt.create.slider({
	      top:10,
	      left:10,
	      width:50,
	      height:100,
	      min: 0,
	      max: 100,
	      step: 1
	    }),
	    wave1: mt.create.waveform({
	      file: './path/to/file.mp3',
	      width:500,
	      height:100,
	      mode: 'range'
	    })
	  },
	  init: () => {
	    // some audio init code goes here...
	  }
	});
	
	*/
	
	var transform = _interopRequireWildcard(__webpack_require__(42));
	
	var Rack = (function () {
	  function Rack(target, name, open) {
	    _classCallCheck(this, Rack);
	
	    this.target = target;
	    this.parent = document.getElementById(target); // should be a generic function for parsing a "target" argument that checks for string/DOM/jQUERY
	    this.title = name;
	    this.open = open;
	    this.buildInterface();
	  }
	
	  _createClass(Rack, {
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.parent.style.border = "solid 1px #ddd";
	        this.parent.style.padding = "0px";
	        this.parent.style.userSelect = "none";
	        this.parent.style.mozUserSelect = "none";
	        this.parent.style.webkitUserSelect = "none";
	
	        this.contents = document.createElement("div");
	
	        while (this.parent.childNodes.length > 0) {
	          this.contents.appendChild(this.parent.childNodes[0]);
	        }
	
	        this.contents.style.padding = "10px";
	
	        this.titleBar = document.createElement("div");
	        this.titleBar.innerHTML = this.title;
	        this.titleBar.style.fontFamily = "arial";
	        this.titleBar.style.position = "relative";
	        this.titleBar.style.color = "#888";
	        this.titleBar.style.padding = "7px";
	        this.titleBar.style.backgroundColor = "#f7f7f7";
	        this.titleBar.style.fontSize = "12px";
	
	        this.button = document.createElement("div");
	        this.button.style.position = "absolute";
	        this.button.style.top = "5px";
	        this.button.style.right = "5px";
	        this.button.innerHTML = "-";
	        this.button.style.border = "solid 1px #ddd";
	        this.button.style.padding = "0px 5px 2px";
	        this.button.style.lineHeight = "12px";
	        this.button.style.fontSize = "15px";
	        this.button.style.backgroundColor = "#fff";
	
	        this.button.style.cursor = "pointer";
	
	        this.button.addEventListener("mouseover", function () {
	          _this.button.style.backgroundColor = "#f7f7f7";
	        });
	        this.button.addEventListener("mouseleave", function () {
	          _this.button.style.backgroundColor = "#fff";
	        });
	        this.button.addEventListener("click", function () {
	          if (_this.open) {
	            _this.hide();
	          } else {
	            _this.show();
	          }
	        });
	
	        this.titleBar.appendChild(this.button);
	
	        this.parent.appendChild(this.titleBar);
	        this.parent.appendChild(this.contents);
	
	        var width = this.parent.style.width = getComputedStyle(this.parent).getPropertyValue("width");
	        this.parent.style.width = width;
	
	        this.ui = transform.section(this.target);
	      }
	    },
	    show: {
	      value: function show() {
	        this.contents.style.display = "block";
	        this.open = true;
	      }
	    },
	    hide: {
	      value: function hide() {
	        this.contents.style.display = "none";
	        this.open = false;
	      }
	    }
	  });
	
	  return Rack;
	})();
	
	module.exports = Rack;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";
	
	var dom = _interopRequire(__webpack_require__(7));
	
	var Interfaces = _interopRequire(__webpack_require__(2));
	
	var element = function (element, type) {
	  var options = {};
	  for (var i = 0; i < element.attributes.length; i++) {
	    var att = element.attributes[i];
	    //  try {
	    //    options[att.nodeName] = eval(att.nodeValue);
	    //  } catch(e) {
	    options[att.nodeName] = att.nodeValue;
	    //  }
	  }
	  type = type[0].toUpperCase() + type.slice(1);
	  var widget = new Interfaces[type](element, options);
	  widget.id = element.id;
	  return widget;
	};
	
	var section = function (parent) {
	
	  var container = dom.parseElement(parent);
	
	  var ui = {};
	
	  var htmlElements = container.getElementsByTagName("*");
	  var elements = [];
	  for (var i = 0; i < htmlElements.length; i++) {
	    elements.push(htmlElements[i]);
	  }
	  for (var i = 0; i < elements.length; i++) {
	    var type = elements[i].getAttribute("mt");
	    if (type) {
	      var widget = element(elements[i], type);
	      ui[widget.id] = widget;
	    }
	  }
	
	  return ui;
	};
	
	exports.section = section;
	exports.element = element;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var WAAClock = _interopRequire(__webpack_require__(44));
	
	var Interval = _interopRequire(__webpack_require__(47));
	
	var Time = (function () {
	  function Time(context) {
	    _classCallCheck(this, Time);
	
	    this.createClock(context);
	  }
	
	  _createClass(Time, {
	    createClock: {
	      value: function createClock(context) {
	        this.clock = new WAAClock(context);
	        this.clock.start();
	      }
	    },
	    interval: {
	      value: function interval(rate, func, on) {
	        return new Interval(rate, func, on, this.clock);
	      }
	    }
	  });
	
	  return Time;
	})();
	
	module.exports = Time;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var WAAClock = __webpack_require__(45)
	
	module.exports = WAAClock
	if (typeof window !== 'undefined') window.WAAClock = WAAClock


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var isBrowser = (typeof window !== 'undefined')
	
	var CLOCK_DEFAULTS = {
	  toleranceLate: 0.10,
	  toleranceEarly: 0.001
	}
	
	// ==================== Event ==================== //
	var Event = function(clock, deadline, func) {
	  this.clock = clock
	  this.func = func
	  this._cleared = false // Flag used to clear an event inside callback
	
	  this.toleranceLate = clock.toleranceLate
	  this.toleranceEarly = clock.toleranceEarly
	  this._latestTime = null
	  this._earliestTime = null
	  this.deadline = null
	  this.repeatTime = null
	
	  this.schedule(deadline)
	}
	
	// Unschedules the event
	Event.prototype.clear = function() {
	  this.clock._removeEvent(this)
	  this._cleared = true
	  return this
	}
	
	// Sets the event to repeat every `time` seconds.
	Event.prototype.repeat = function(time) {
	  if (time === 0)
	    throw new Error('delay cannot be 0')
	  this.repeatTime = time
	  if (!this.clock._hasEvent(this))
	    this.schedule(this.deadline + this.repeatTime)
	  return this
	}
	
	// Sets the time tolerance of the event.
	// The event will be executed in the interval `[deadline - early, deadline + late]`
	// If the clock fails to execute the event in time, the event will be dropped.
	Event.prototype.tolerance = function(values) {
	  if (typeof values.late === 'number')
	    this.toleranceLate = values.late
	  if (typeof values.early === 'number')
	    this.toleranceEarly = values.early
	  this._refreshEarlyLateDates()
	  if (this.clock._hasEvent(this)) {
	    this.clock._removeEvent(this)
	    this.clock._insertEvent(this)
	  }
	  return this
	}
	
	// Returns true if the event is repeated, false otherwise
	Event.prototype.isRepeated = function() { return this.repeatTime !== null }
	
	// Schedules the event to be ran before `deadline`.
	// If the time is within the event tolerance, we handle the event immediately.
	// If the event was already scheduled at a different time, it is rescheduled.
	Event.prototype.schedule = function(deadline) {
	  this._cleared = false
	  this.deadline = deadline
	  this._refreshEarlyLateDates()
	
	  if (this.clock.context.currentTime >= this._earliestTime) {
	    this._execute()
	  
	  } else if (this.clock._hasEvent(this)) {
	    this.clock._removeEvent(this)
	    this.clock._insertEvent(this)
	  
	  } else this.clock._insertEvent(this)
	}
	
	Event.prototype.timeStretch = function(tRef, ratio) {
	  if (this.isRepeated())
	    this.repeatTime = this.repeatTime * ratio
	
	  var deadline = tRef + ratio * (this.deadline - tRef)
	  // If the deadline is too close or past, and the event has a repeat,
	  // we calculate the next repeat possible in the stretched space.
	  if (this.isRepeated()) {
	    while (this.clock.context.currentTime >= deadline - this.toleranceEarly)
	      deadline += this.repeatTime
	  }
	  this.schedule(deadline)
	}
	
	// Executes the event
	Event.prototype._execute = function() {
	  if (this.clock._started === false) return
	  this.clock._removeEvent(this)
	
	  if (this.clock.context.currentTime < this._latestTime)
	    this.func(this)
	  else {
	    if (this.onexpired) this.onexpired(this)
	    console.warn('event expired')
	  }
	  // In the case `schedule` is called inside `func`, we need to avoid
	  // overrwriting with yet another `schedule`.
	  if (!this.clock._hasEvent(this) && this.isRepeated() && !this._cleared)
	    this.schedule(this.deadline + this.repeatTime) 
	}
	
	// Updates cached times
	Event.prototype._refreshEarlyLateDates = function() {
	  this._latestTime = this.deadline + this.toleranceLate
	  this._earliestTime = this.deadline - this.toleranceEarly
	}
	
	// ==================== WAAClock ==================== //
	var WAAClock = module.exports = function(context, opts) {
	  var self = this
	  opts = opts || {}
	  this.tickMethod = opts.tickMethod || 'ScriptProcessorNode'
	  this.toleranceEarly = opts.toleranceEarly || CLOCK_DEFAULTS.toleranceEarly
	  this.toleranceLate = opts.toleranceLate || CLOCK_DEFAULTS.toleranceLate
	  this.context = context
	  this._events = []
	  this._started = false
	}
	
	// ---------- Public API ---------- //
	// Schedules `func` to run after `delay` seconds.
	WAAClock.prototype.setTimeout = function(func, delay) {
	  return this._createEvent(func, this._absTime(delay))
	}
	
	// Schedules `func` to run before `deadline`.
	WAAClock.prototype.callbackAtTime = function(func, deadline) {
	  return this._createEvent(func, deadline)
	}
	
	// Stretches `deadline` and `repeat` of all scheduled `events` by `ratio`, keeping
	// their relative distance to `tRef`. In fact this is equivalent to changing the tempo.
	WAAClock.prototype.timeStretch = function(tRef, events, ratio) {
	  events.forEach(function(event) { event.timeStretch(tRef, ratio) })
	  return events
	}
	
	// Removes all scheduled events and starts the clock 
	WAAClock.prototype.start = function() {
	  if (this._started === false) {
	    var self = this
	    this._started = true
	    this._events = []
	
	    if (this.tickMethod === 'ScriptProcessorNode') {
	      var bufferSize = 256
	      // We have to keep a reference to the node to avoid garbage collection
	      this._clockNode = this.context.createScriptProcessor(bufferSize, 1, 1)
	      this._clockNode.connect(this.context.destination)
	      this._clockNode.onaudioprocess = function () {
	        process.nextTick(function() { self._tick() })
	      }
	    } else if (this.tickMethod === 'manual') null // _tick is called manually
	
	    else throw new Error('invalid tickMethod ' + this.tickMethod)
	  }
	}
	
	// Stops the clock
	WAAClock.prototype.stop = function() {
	  if (this._started === true) {
	    this._started = false
	    this._clockNode.disconnect()
	  }  
	}
	
	// ---------- Private ---------- //
	
	// This function is ran periodically, and at each tick it executes
	// events for which `currentTime` is included in their tolerance interval.
	WAAClock.prototype._tick = function() {
	  var event = this._events.shift()
	
	  while(event && event._earliestTime <= this.context.currentTime) {
	    event._execute()
	    event = this._events.shift()
	  }
	
	  // Put back the last event
	  if(event) this._events.unshift(event)
	}
	
	// Creates an event and insert it to the list
	WAAClock.prototype._createEvent = function(func, deadline) {
	  return new Event(this, deadline, func)
	}
	
	// Inserts an event to the list
	WAAClock.prototype._insertEvent = function(event) {
	  this._events.splice(this._indexByTime(event._earliestTime), 0, event)
	}
	
	// Removes an event from the list
	WAAClock.prototype._removeEvent = function(event) {
	  var ind = this._events.indexOf(event)
	  if (ind !== -1) this._events.splice(ind, 1)
	}
	
	// Returns true if `event` is in queue, false otherwise
	WAAClock.prototype._hasEvent = function(event) {
	 return this._events.indexOf(event) !== -1
	}
	
	// Returns the index of the first event whose deadline is >= to `deadline`
	WAAClock.prototype._indexByTime = function(deadline) {
	  // performs a binary search
	  var low = 0
	    , high = this._events.length
	    , mid
	  while (low < high) {
	    mid = Math.floor((low + high) / 2)
	    if (this._events[mid]._earliestTime < deadline)
	      low = mid + 1
	    else high = mid
	  }
	  return low
	}
	
	// Converts from relative time to absolute time
	WAAClock.prototype._absTime = function(relTime) {
	  return relTime + this.context.currentTime
	}
	
	// Converts from absolute time to relative time 
	WAAClock.prototype._relTime = function(absTime) {
	  return absTime - this.context.currentTime
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ },
/* 46 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interval = (function () {
	  function Interval(rate, func, on, clock) {
	    _classCallCheck(this, Interval);
	
	    this.rate = rate;
	    this.on = on;
	    this.clock = clock;
	
	    this.pattern = [1];
	    this.index = 0;
	
	    this.event = func ? func : function () {};
	
	    if (this.on) {
	      this.start();
	    }
	  }
	
	  _createClass(Interval, {
	    _event: {
	      value: function _event() {
	        if (this.pattern[this.index % this.pattern.length]) {
	          this.event();
	        }
	        this.index++;
	      }
	    },
	    stop: {
	      value: function stop() {
	        this.on = false;
	        this.interval.clear();
	      }
	    },
	    start: {
	      value: function start() {
	        this.on = true;
	        this.interval = this.clock.callbackAtTime(this._event.bind(this), this.clock.context.currentTime).repeat(this.rate / 1000);
	      }
	    },
	    ms: {
	      value: function ms(newrate) {
	        if (this.on) {
	          var ratio = newrate / this.rate;
	          this.rate = newrate;
	          this.clock.timeStretch(this.clock.context.currentTime, [this.interval], ratio);
	        } else {
	          this.rate = newrate;
	        }
	      }
	    }
	  });
	
	  return Interval;
	})();
	
	module.exports = Interval;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var scales = _interopRequire(__webpack_require__(49));
	
	var Tune = (function () {
	  function Tune() {
	    _classCallCheck(this, Tune);
	
	    // the scale as ratios
	    this.scale = [];
	
	    // i/o modes
	    this.mode = {
	      output: "frequency",
	      input: "step"
	    };
	
	    // ET major, for reference
	    this.etmajor = [261.62558, 293.664764, 329.627563, 349.228241, 391.995422, 440, 493.883301, 523.25116];
	
	    // Root frequency.
	    this.tonic = 440; // * Math.pow(2,(60-69)/12);
	
	    this.scales = scales;
	
	    this.loadScale("ji_diatonic");
	  }
	
	  _createClass(Tune, {
	    tonicize: {
	
	      /* Set the tonic frequency */
	
	      value: function tonicize(newTonic) {
	        this.tonic = newTonic;
	      }
	    },
	    note: {
	
	      /* Return data in the mode you are in (freq, ratio, or midi) */
	
	      value: function note(input, octave) {
	
	        var newvalue = undefined;
	
	        if (this.mode.output === "frequency") {
	          newvalue = this.frequency(input, octave);
	        } else if (this.mode.output === "ratio") {
	          newvalue = this.ratio(input, octave);
	        } else if (this.mode.output === "MIDI") {
	          newvalue = this.MIDI(input, octave);
	        } else {
	          newvalue = this.frequency(input, octave);
	        }
	
	        return newvalue;
	      }
	    },
	    frequency: {
	
	      /* Return freq data */
	
	      value: function frequency(stepIn, octaveIn) {
	
	        if (this.mode.input === "midi" || this.mode.input === "MIDI") {
	          this.stepIn += 60;
	        }
	
	        // what octave is our input
	        var octave = Math.floor(stepIn / this.scale.length);
	
	        if (octaveIn) {
	          octave += octaveIn;
	        }
	
	        // which scale degree (0 - scale length) is our input
	        var scaleDegree = stepIn % this.scale.length;
	
	        while (scaleDegree < 0) {
	          scaleDegree += this.scale.length;
	        }
	
	        var freq = this.tonic * this.scale[scaleDegree];
	
	        freq = freq * Math.pow(2, octave);
	
	        // truncate irrational numbers
	        freq = Math.floor(freq * 100000000000) / 100000000000;
	
	        return freq;
	      }
	    },
	    ratio: {
	
	      /* Force return ratio data */
	
	      value: function ratio(stepIn, octaveIn) {
	
	        if (this.mode.input === "midi" || this.mode.input === "MIDI") {
	          this.stepIn += 60;
	        }
	
	        // what octave is our input
	        var octave = Math.floor(stepIn / this.scale.length);
	
	        if (octaveIn) {
	          octave += octaveIn;
	        }
	
	        // which scale degree (0 - scale length) is our input
	        var scaleDegree = stepIn % this.scale.length;
	
	        // what ratio is our input to our key
	        var ratio = Math.pow(2, octave) * this.scale[scaleDegree];
	
	        ratio = Math.floor(ratio * 100000000000) / 100000000000;
	
	        return ratio;
	      }
	    },
	    MIDI: {
	
	      /* Force return adjusted MIDI data */
	
	      value: function MIDI(stepIn, octaveIn) {
	
	        var newvalue = this.frequency(stepIn, octaveIn);
	
	        var n = 69 + 12 * Math.log(newvalue / 440) / Math.log(2);
	
	        n = Math.floor(n * 1000000000) / 1000000000;
	
	        return n;
	      }
	    },
	    loadScale: {
	
	      /* Load a new scale */
	
	      value: function loadScale(name) {
	
	        /* load the scale */
	        var freqs = this.scales[name].frequencies;
	        this.scale = [];
	        for (var i = 0; i < freqs.length - 1; i++) {
	          this.scale.push(freqs[i] / freqs[0]);
	        }
	
	        /* visualize in console */
	        console.log(" ");
	        console.log("LOADED " + name);
	        console.log(this.scales[name].description);
	        console.log(this.scale);
	        var vis = [];
	        for (var i = 0; i < 100; i++) {
	          vis[i] = " ";
	        }
	        for (var i = 0; i < this.scale.length; i++) {
	          var spot = Math.round(this.scale[i] * 100 - 100);
	          if (i < 10) {
	            vis.splice(spot, 1, i + 1);
	          } else {
	            vis.splice(spot, 5, i + 1);
	          }
	        }
	        var textvis = "";
	        for (var i = 0; i < vis.length; i++) {
	          textvis += vis[i];
	        }
	        console.log(name);
	        console.log(textvis);
	        // ET scale vis
	        vis = [];
	        for (var i = 0; i < 100; i++) {
	          vis[i] = " ";
	        }
	        for (var i = 0; i < this.etmajor.length; i++) {
	          var spot = Math.round(this.etmajor[i] / this.etmajor[0] * 100 - 100);
	          if (i < 10) {
	            vis.splice(spot, 1, i + 1);
	          } else {
	            vis.splice(spot, 5, i + 1);
	          }
	        }
	        textvis = "";
	        for (var i = 0; i < vis.length; i++) {
	          textvis += vis[i];
	        }
	        console.log(textvis);
	        console.log("equal-tempered major (reference)");
	      }
	    },
	    search: {
	
	      /* Search the names of tunings
	      	 Returns an array of names of tunings */
	
	      value: function search(letters) {
	        var possible = [];
	        for (var key in this.scales) {
	          if (key.toLowerCase().indexOf(letters.toLowerCase()) !== -1) {
	            possible.push(key);
	          }
	        }
	        return possible;
	      }
	    },
	    chord: {
	
	      /* Return a collection of notes as an array */
	
	      value: function chord(midis) {
	        var output = [];
	        for (var i = 0; i < midis.length; i++) {
	          output.push(this.note(midis[i]));
	        }
	        return output;
	      }
	    },
	    root: {
	
	      /* Change the tonic frequency? */
	
	      value: function root(newmidi, newfreq) {
	        this.rootFreq = newfreq;
	        // not working now ... needs much work.
	        // setKey is not transposing now, either.
	      }
	    }
	  });
	
	  return Tune;
	})();
	
	module.exports = Tune;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  ji_12: {
	    frequencies: [261.6255653006, 279.06726965397, 294.32876096318, 313.95067836072, 327.03195662575, 348.83408706747, 366.27579142084, 392.4383479509, 418.60090448096, 436.04260883433, 470.92601754108, 490.54793493862, 523.2511306012],
	    description: "Basic JI with 7-limit tritone"
	  },
	  ji_12a: {
	    frequencies: [261.6255653006, 279.06726965397, 294.32876096318, 305.22982618403, 327.03195662575, 348.83408706747, 366.27579142084, 392.4383479509, 418.60090448096, 448.50096908674, 457.84473927605, 490.54793493862, 523.2511306012],
	    description: "7-limit 12-tone scale"
	  },
	  ji_12b: {
	    frequencies: [261.6255653006, 272.52663052146, 290.69507255622, 305.22982618403, 327.03195662575, 343.38355445704, 366.27579142084, 392.4383479509, 418.60090448096, 448.50096908674, 457.84473927605, 490.54793493862, 523.2511306012],
	    description: "alternate 7-limit 12-tone scale"
	  },
	  ji_12c: {
	    frequencies: [261.6255653006, 272.52663052146, 294.32876096318, 313.95067836072, 327.03195662575, 348.83408706747, 367.91095120397, 392.4383479509, 418.60090448096, 436.04260883433, 457.84473927605, 490.54793493862, 523.2511306012],
	    description: "Kurzweil 'Just with natural b7th', is Sauveur Just with 7/4"
	  },
	  et: {
	    frequencies: [261.62558, 293.664764, 329.627563, 349.228241, 391.995422, 440, 493.883301, 523.25116],
	    description: "Et Major"
	  },
	  ji_diatonic: {
	    frequencies: [261.6255653006, 294.32876096318, 327.03195662575, 348.83408706747, 392.4383479509, 436.04260883433, 490.54793493862],
	    description: "Basic JI with 7-limit tritone"
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//Disable jshint warning concerning trailing regular params
	/*jshint -W138 */
	
	var Radio = (function () {
	    //if non-existent buttons are switched, they are ignored
	
	    function Radio() {
	        for (var _len = arguments.length, onVals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            onVals[_key - 1] = arguments[_key];
	        }
	
	        var length = arguments[0] === undefined ? 3 : arguments[0];
	
	        _classCallCheck(this, Radio);
	
	        //each optional 'onVals' argument switches on that value in the Radio if it exists
	        //In the example below, a 3-button radio is created, index 0 is switched on, index 1 is switched on then then attempted again producing an warning, and the final argument produces a warning because the index value does not exist.
	        //Example:
	        //`  radio = new Radio(3, 0, 1, 1, 3);
	        //…  [1,1,0]
	
	        if (length < 0) {
	            length = 1;
	        }
	
	        this.length = length;
	        this.onVals = onVals;
	        this.array = new Array(length).fill(0);
	
	        if (onVals.length > 0) {
	            this.on.apply(this, onVals);
	        }
	    }
	
	    _createClass(Radio, {
	        select: {
	            value: function select(value) {
	                this.array.fill(0);
	                this.array[value] = 1;
	                return this.array;
	            }
	        },
	        flip: {
	            value: function flip() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //flips the specified values. if no value is specified, flips all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        if (v > a.length - 1) {
	                            console.warn("Warning: AnonRadio[" + v + "] does not exist");
	                        } else {
	                            a[v] = a[v] ? 0 : 1;
	                        }
	                    });
	                } else {
	                    a.forEach(function (v, i, arr) {
	                        arr[i] = v ? 0 : 1;
	                    });
	                }
	                return a;
	            }
	        },
	        on: {
	            value: function on() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //switch on the specified values. if no value specified, flips on all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        if (v > a.length - 1) {
	                            console.warn("Warning: AnonRadio[" + v + "] exceeds size of object");
	                        } else {
	                            if (a[v] === 1) {
	                                console.warn("Warning: AnonRadio[" + v + "] was already on.");
	                            }
	                            a[v] = 1;
	                        }
	                    });
	                } else {
	                    a.fill(1);
	                }
	                return a;
	            }
	        },
	        off: {
	            value: function off() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //switch off the specified values. if no value specified, flips off all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        a[v] = 0;
	                    });
	                } else {
	                    a.fill(0);
	                }
	                return a;
	            }
	        }
	    });
	
	    return Radio;
	})();
	
	module.exports = Radio;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = _interopRequire(__webpack_require__(31));
	
	var Sequence = (function () {
	    function Sequence(sequence, mode, position, cacheSize) {
	        _classCallCheck(this, Sequence);
	
	        this.seq = sequence || [1, 2, 3, 4];
	        this.mode = mode || "up";
	        this.pos = position || 0;
	        this.value = this.seq[this.pos];
	
	        //TODO: implement a cache for stepping back through previous values. There should also be an accompanying 'mode' for stepping forward/redoing the previous set of values
	        this.cacheSize = cacheSize || 256;
	    }
	
	    _createClass(Sequence, {
	        setMode: {
	            value: function setMode(mode) {
	                mode = mode.toLowerCase();
	                //TODO: allow user defined modes to be set
	                if (!(mode === "up" || mode === "down" || mode === "random" || mode === "drunk")) {
	                    console.error("The only modes currently allowed are: up, down, random, drunk");
	                    return "mode: " + this.mode;
	                }
	                this.mode = mode;
	                return "mode: " + mode;
	            }
	        },
	        next: {
	            value: function next() {
	                return this[this.mode]();
	            }
	        },
	        up: {
	            value: function up() {
	                if (this.pos === this.seq.length - 1) {
	                    this.pos = 0;
	                } else {
	                    this.pos++;
	                }
	
	                this.value = this.seq[this.pos];
	                return this.value;
	            }
	        },
	        down: {
	            value: function down() {
	                if (this.pos === 0) {
	                    this.pos = this.seq.length - 1;
	                } else {
	                    this.pos--;
	                }
	
	                this.value = this.seq[this.pos];
	                return this.value;
	            }
	        },
	        random: {
	            value: function random() {
	                this.pos = math.ri(0, this.seq.length);
	                this.value = this.seq[this.pos];
	                return this.value;
	            }
	        },
	        drunk: {
	            value: function drunk() {
	                var drnk = new Drunk(0, this.seq.length - 1, this.pos, 1, true);
	                this.pos = drnk.step();
	                this.value = this.seq[this.pos];
	                return this.value;
	            }
	
	            /* TODO: This whole function, if desired, needs to be implemented with async.
	                output(start = 0, stop = this.seq.length - 1) {
	                    //stop values below start will loop back around and output values up to stop value
	                    if (stop > this.seq.length - 1) {
	                        stop = this.seq.length - 1;
	                        console.warn('Sequence stop request exceeds length of sequence. Outputting to end of sequence');
	                    }
	                      if (start < 0 || stop < 0) {
	                        console.error('Sequence start and stop values must be positive.');
	                        return;
	                    }
	                      if (stop < start) {
	                        for (let i = start; i < this.seq.length; i++) {
	                            return this.seq[i];
	                        }
	                        for (let i = 0; i < start; i++) {
	                            return this.seq[i];
	                        }
	                    } else {
	                        for (let i = start; i <= stop; i++) {
	                            return this.seq[i];
	                        }
	                    }
	                }
	            */
	
	        }
	    });
	
	    return Sequence;
	})();
	
	module.exports = Sequence;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=mt.map