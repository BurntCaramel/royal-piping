'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = Table;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Scrollable = require('./Scrollable');

var _Scrollable2 = _interopRequireDefault(_Scrollable);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function Table(_ref) {
	var items = _ref.items;
	var _ref$showIcons = _ref.showIcons;
	var showIcons = _ref$showIcons === undefined ? true : _ref$showIcons;

	return _react2['default'].createElement(
		_Box2['default'],
		{ column: true, grow: 1 },
		_react2['default'].createElement(
			_Scrollable2['default'],
			null,
			items.map(function (item) {
				return _react2['default'].createElement(TableCell, _extends({}, item, { showIcon: showIcons }));
			})
		)
	);
}

function TableCell(_ref2) {
	var text = _ref2.text;
	var detailText = _ref2.detailText;
	var showIcon = _ref2.showIcon;

	return _react2['default'].createElement(
		_Box2['default'],
		{ row: true, height: 49, alignItems: 'center' },
		showIcon && _react2['default'].createElement(_Box2['default'], { width: 30, height: 30, margin: { left: 24, right: 24 }, backgroundColor: '#555', border: false }),
		_react2['default'].createElement(
			_Box2['default'],
			{ column: true, border: false },
			_react2['default'].createElement(
				_Text2['default'],
				{ size: 16 },
				text
			),
			detailText && _react2['default'].createElement(
				_Text2['default'],
				{ size: 12 },
				detailText
			)
		)
	);
}
module.exports = exports['default'];