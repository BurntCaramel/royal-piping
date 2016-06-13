'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Scrollable;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function Scrollable(_ref) {
	var children = _ref.children;

	return _react2['default'].createElement(
		'div',
		{ style: { overflow: 'auto', flexGrow: 1 } },
		children
	);
}

module.exports = exports['default'];