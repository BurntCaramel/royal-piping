'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Wrapper;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsBox = require('./components/Box');

var _componentsBox2 = _interopRequireDefault(_componentsBox);

function Wrapper(_ref) {
	var children = _ref.children;
	var _ref$width = _ref.width;
	var width = _ref$width === undefined ? 375 : _ref$width;
	var _ref$height = _ref.height;
	var height = _ref$height === undefined ? 667 : _ref$height;

	return _react2['default'].createElement(
		_componentsBox2['default'],
		{ column: true, width: width, height: height, transitionAll: true },
		children
	);
}

module.exports = exports['default'];