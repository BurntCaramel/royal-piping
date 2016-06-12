'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Text;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSow = require('react-sow');

var _reactSow2 = _interopRequireDefault(_reactSow);

var _stylersFlex = require('./stylers/flex');

var _stylersFlex2 = _interopRequireDefault(_stylersFlex);

var textStyler = (0, _reactSow2['default'])(function (_ref) {
	var textAlign = _ref.textAlign;
	var fontSize = _ref.fontSize;
	return Object.assign({}, textAlign ? { textAlign: textAlign } : {}, fontSize ? { fontSize: fontSize } : {});
});

var styler = _reactSow2['default'].combine([textStyler, _stylersFlex2['default']]);

function Text(_ref2) {
	var children = _ref2.children;
	var align = _ref2.align;
	var size = _ref2.size;
	var _ref2$grow = _ref2.grow;
	var grow = _ref2$grow === undefined ? 1 : _ref2$grow;
	var shrink = _ref2.shrink;

	return _react2['default'].createElement(
		'div',
		styler({ grow: grow, shrink: shrink, textAlign: align, fontSize: size }),
		children
	);
}

module.exports = exports['default'];