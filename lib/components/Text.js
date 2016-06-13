'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = Text;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSow = require('react-sow');

var _reactSow2 = _interopRequireDefault(_reactSow);

var _stylersFlex = require('../stylers/flex');

var _stylersFlex2 = _interopRequireDefault(_stylersFlex);

var _stylersMargin = require('../stylers/margin');

var _stylersMargin2 = _interopRequireDefault(_stylersMargin);

var _stylersPadding = require('../stylers/padding');

var _stylersPadding2 = _interopRequireDefault(_stylersPadding);

var textStyler = (0, _reactSow2['default'])(function (_ref) {
	var textAlign = _ref.textAlign;
	var fontSize = _ref.fontSize;
	return Object.assign({}, textAlign ? { textAlign: textAlign } : {}, fontSize ? { fontSize: fontSize } : {});
});

var styler = _reactSow2['default'].combine([textStyler, _stylersFlex2['default'], _stylersMargin2['default'], _stylersPadding2['default']]);

function Text(_ref2) {
	var children = _ref2.children;
	var align = _ref2.align;
	var size = _ref2.size;

	var stylerProps = _objectWithoutProperties(_ref2, ['children', 'align', 'size']);

	return _react2['default'].createElement(
		'div',
		styler(_extends({}, stylerProps, { textAlign: align, fontSize: size })),
		children
	);
}

module.exports = exports['default'];