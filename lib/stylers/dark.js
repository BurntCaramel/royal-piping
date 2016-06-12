'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactSow = require('react-sow');

var _reactSow2 = _interopRequireDefault(_reactSow);

var spacing = 10;
var backgroundColor = '#111';
var color = '#ee';

var box = (0, _reactSow2['default'])(function (_ref) {
	var _ref$border = _ref.border;
	var border = _ref$border === undefined ? true : _ref$border;
	return {
		padding: spacing,
		backgroundColor: backgroundColor,
		borderColor: color,
		borderWidth: 1,
		borderStyle: 'solid'
	};
});

exports.box = box;
var text = (0, _reactSow2['default'])({});

exports.text = text;
var wrapper = box;
exports.wrapper = wrapper;