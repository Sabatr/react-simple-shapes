"use strict";

var _Rectangle = _interopRequireDefault(require("./Shapes/Rectangle/Rectangle"));

var _Circle = _interopRequireDefault(require("./Shapes/Circle/Circle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exporting all of the necessary components
 */
module.exports = {
  Rectangle: _Rectangle.default,
  Circle: _Circle.default
};