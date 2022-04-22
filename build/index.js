"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "drawCircle", {
  enumerable: true,
  get: function get() {
    return _draw.drawCircle;
  }
});
Object.defineProperty(exports, "drawEllipse", {
  enumerable: true,
  get: function get() {
    return _draw.drawEllipse;
  }
});
Object.defineProperty(exports, "drawLine", {
  enumerable: true,
  get: function get() {
    return _draw.drawLine;
  }
});
Object.defineProperty(exports, "drawPixel", {
  enumerable: true,
  get: function get() {
    return _draw.drawPixel;
  }
});
Object.defineProperty(exports, "drawPolygon", {
  enumerable: true,
  get: function get() {
    return _draw.drawPolygon;
  }
});
Object.defineProperty(exports, "drawRectangle", {
  enumerable: true,
  get: function get() {
    return _draw.drawRectangle;
  }
});
Object.defineProperty(exports, "drawString", {
  enumerable: true,
  get: function get() {
    return _draw.drawString;
  }
});
Object.defineProperty(exports, "fillCircle", {
  enumerable: true,
  get: function get() {
    return _draw.fillCircle;
  }
});
Object.defineProperty(exports, "fillEllipse", {
  enumerable: true,
  get: function get() {
    return _draw.fillEllipse;
  }
});
Object.defineProperty(exports, "fillPolygon", {
  enumerable: true,
  get: function get() {
    return _draw.fillPolygon;
  }
});
Object.defineProperty(exports, "fillRectangle", {
  enumerable: true,
  get: function get() {
    return _draw.fillRectangle;
  }
});
Object.defineProperty(exports, "getScreenSize", {
  enumerable: true,
  get: function get() {
    return _misc.getScreenSize;
  }
});
Object.defineProperty(exports, "getWindowHeight", {
  enumerable: true,
  get: function get() {
    return _misc.getWindowHeight;
  }
});
Object.defineProperty(exports, "getWindowWidth", {
  enumerable: true,
  get: function get() {
    return _misc.getWindowWidth;
  }
});
Object.defineProperty(exports, "isKeyPressed", {
  enumerable: true,
  get: function get() {
    return _keyboard.isKeyPressed;
  }
});
exports.makeGraphicsWindow = makeGraphicsWindow;
exports.runGraphics = runGraphics;

var _keyboard = _interopRequireWildcard(require("./mixins/keyboard"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

var _draw = require("./mixins/draw");

var _misc = require("./mixins/misc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window._graphics = null;

var Base = /*#__PURE__*/_createClass(function Base() {
  _classCallCheck(this, Base);
});

var SimpleWebGraphics = /*#__PURE__*/function (_KeyboardMixin) {
  _inherits(SimpleWebGraphics, _KeyboardMixin);

  var _super = _createSuper(SimpleWebGraphics);

  function SimpleWebGraphics(canvasElement) {
    var _this;

    _classCallCheck(this, SimpleWebGraphics);

    _this = _super.call(this, canvasElement);
    _this.canvas = canvasElement;
    _this.ctx = canvasElement.getContext('2d');
    return _this;
  }

  _createClass(SimpleWebGraphics, [{
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return SimpleWebGraphics;
}((0, _keyboard["default"])((0, _mouse["default"])(Base)));

function makeGraphicsWindow(canvasElement) {
  window._graphics = new SimpleWebGraphics(canvasElement);
}

function runGraphics(startWorld, updateWorld, drawWorld) {
  var world = {};

  var iterateGraphics = function iterateGraphics() {
    updateWorld(world);

    window._graphics.clearCanvas();

    drawWorld(world);
    window.requestAnimationFrame(iterateGraphics);
  };

  world = startWorld(world);
  iterateGraphics();
}