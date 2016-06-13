'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Box;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSow = require('react-sow');

var _reactSow2 = _interopRequireDefault(_reactSow);

var _stylers = require('../stylers');

var stylers = _interopRequireWildcard(_stylers);

var borderStyler = (0, _reactSow2['default'])(function (_ref) {
	var _ref$border = _ref.border;
	var border = _ref$border === undefined ? true : _ref$border;
	var _ref$borderWidth = _ref.borderWidth;
	var borderWidth = _ref$borderWidth === undefined ? 1 : _ref$borderWidth;
	return Object.assign({},
	//border ? { borderWidth, borderStyle: 'solid', borderColor: '#111', margin: -borderWidth } : {}
	border ? { boxShadow: '0 0 ' + borderWidth + 'px #111' } : {});
});

var backgroundStyler = (0, _reactSow2['default'])(function (_ref2) {
	var backgroundColor = _ref2.backgroundColor;
	return Object.assign({}, backgroundColor ? { backgroundColor: backgroundColor } : {});
});

var styler = _reactSow2['default'].combine([stylers.boxSizing, stylers.flex, stylers.margin, stylers.padding, stylers.transition, borderStyler, backgroundStyler]);

function Box(_ref3) {
	var children = _ref3.children;
	var url = _ref3.url;

	var stylerProps = _objectWithoutProperties(_ref3, ['children', 'url']);

	var element = _react2['default'].createElement(
		'div',
		styler(stylerProps),
		children
	);

	if (url) {
		element = _react2['default'].createElement(
			'a',
			{ href: url },
			element
		);
	}

	return element;
}

module.exports = exports['default'];