'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = Nav;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var height = 49;

function Nav(_ref) {
	var items = _ref.items;
	var _ref$showIcons = _ref.showIcons;
	var showIcons = _ref$showIcons === undefined ? true : _ref$showIcons;

	return _react2['default'].createElement(
		_Box2['default'],
		{ row: true, shrink: 0 },
		items.map(function (item) {
			return _react2['default'].createElement(NavItem, _extends({}, item, { showIcon: showIcons }));
		})
	);
}

var selectedIcon = _react2['default'].createElement(_Box2['default'], { width: 30, height: 30, backgroundColor: '#555', border: false });

var nonselectedIcon = _react2['default'].createElement(_Box2['default'], { width: 30, height: 30 });

function NavItem(_ref2) {
	var title = _ref2.title;
	var url = _ref2.url;
	var selected = _ref2.selected;
	var showIcon = _ref2.showIcon;

	return _react2['default'].createElement(
		_Box2['default'],
		{ url: url, column: true, alignItems: 'center', grow: 1, height: height },
		showIcon && (selected ? selectedIcon : nonselectedIcon),
		_react2['default'].createElement(
			_Text2['default'],
			{ align: 'center', size: 13 },
			title
		)
	);
}
module.exports = exports['default'];