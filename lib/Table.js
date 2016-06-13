'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
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

	return _react2['default'].createElement(
		_Box2['default'],
		{ column: true, grow: 1 },
		_react2['default'].createElement(
			_Scrollable2['default'],
			null,
			items.map(function (item) {
				return _react2['default'].createElement(TableCell, item);
			})
		)
	);
}

function TableCell(_ref2) {
	var title = _ref2.title;

	return _react2['default'].createElement(
		_Box2['default'],
		{ row: true, height: 49, alignItems: 'center' },
		_react2['default'].createElement(
			_Text2['default'],
			{ size: 16 },
			title
		)
	);
}
module.exports = exports['default'];