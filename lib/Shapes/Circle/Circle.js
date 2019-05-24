"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Circle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Circle, _React$Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 45 45",
        height: this.props.height,
        width: this.props.width,
        preserveAspectRatio: "none",
        transform: "translate(".concat(this.props.x, " ").concat(this.props.y, ") \n            rotate(").concat(this.props.rotate, ") \n            scale(").concat(this.props.scaleX, " ").concat(this.props.scaleY, ") \n            skewX(").concat(this.props.skewX, ")\n            skewY(").concat(this.props.skewY, ")")
      }, _react.default.createElement("circle", {
        cx: "22.25",
        cy: "22.25",
        r: this.props.radius,
        className: this.props.className,
        width: "45",
        height: "45",
        fill: this.props.backgroundColor,
        stroke: this.props.stroke
      }), this.props.children);
    }
  }]);

  return Circle;
}(_react.default.Component);

Circle.defaultProps = {
  className: "circle",
  height: 300,
  width: 300,
  backgroundColor: "rgb(0,255,255)",
  stroke: "none",
  x: 0,
  y: 0,
  rotate: 0,
  scaleX: 1,
  scaleY: 1,
  skewX: 0,
  skewY: 0,
  radius: 22.25
};
Circle.propTypes = {
  className: _propTypes.default.string,
  height: _propTypes.default.number,
  width: _propTypes.default.number,
  backgroundColor: _propTypes.default.string,
  stroke: _propTypes.default.string,
  x: _propTypes.default.number,
  y: _propTypes.default.number,
  rotate: _propTypes.default.number,
  scaleX: _propTypes.default.number,
  scaleY: _propTypes.default.number,
  skewX: _propTypes.default.number,
  skewY: _propTypes.default.number,
  radius: _propTypes.default.number
};
var _default = Circle;
exports.default = _default;