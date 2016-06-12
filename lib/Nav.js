'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Nav;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function Nav(_ref) {
	var items = _ref.items;

	return _react2['default'].createElement(
		_Box2['default'],
		{ row: true },
		items.map(function (item) {
			return _react2['default'].createElement(NavItem, item);
		})
	);
}

function NavItem(_ref2) {
	var title = _ref2.title;
	var url = _ref2.url;

	return _react2['default'].createElement(
		_Box2['default'],
		{ url: url, column: true, alignItems: 'center', grow: 1, height: 49 },
		_react2['default'].createElement(_Box2['default'], { backgroundColor: '#111', width: 30, height: 30 }),
		_react2['default'].createElement(
			_Text2['default'],
			{ align: 'center', size: 13 },
			title
		)
	);
}
module.exports = exports['default'];