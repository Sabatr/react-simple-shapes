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

/**
 * React component for rectangles
 */
var Rectangle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rectangle, _React$Component);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).apply(this, arguments));
  }

  _createClass(Rectangle, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 45 45",
        height: this.props.height,
        width: this.props.width,
        x: "100px",
        y: "100px",
        preserveAspectRatio: "none"
      }, _react.default.createElement("rect", {
        x: "0",
        y: "0",
        className: "rectangle",
        width: "45",
        height: "45",
        fill: this.props.backgroundColor,
        stroke: this.props.stroke
      }), this.props.children);
    }
  }]);

  return Rectangle;
}(_react.default.Component);

Rectangle.defaultProps = {
  height: 300,
  width: 300,
  backgroundColor: "rgb(0,255,255)",
  stroke: "none"
};
Rectangle.propTypes = {
  height: _propTypes.default.number,
  width: _propTypes.default.number,
  backgroundColor: _propTypes.default.string,
  stroke: _propTypes.default.string
};
var _default = Rectangle;
exports.default = _default;