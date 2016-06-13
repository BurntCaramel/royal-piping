'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = Collection;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Scrollable = require('./Scrollable');

var _Scrollable2 = _interopRequireDefault(_Scrollable);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var gutter = 2.0;

function Collection(_ref) {
	var groups = _ref.groups;

	return _react2['default'].createElement(
		_Box2['default'],
		{ column: true, grow: 1 },
		_react2['default'].createElement(
			_Scrollable2['default'],
			null,
			groups.map(function (group) {
				return _react2['default'].createElement(CollectionGroup, group);
			})
		)
	);
}

function CollectionGroup(_ref2) {
	var items = _ref2.items;
	var _ref2$itemsPerRow = _ref2.itemsPerRow;
	var itemsPerRow = _ref2$itemsPerRow === undefined ? 4 : _ref2$itemsPerRow;
	var title = _ref2.title;

	return _react2['default'].createElement(
		_Box2['default'],
		{ column: true, margin: { top: 24 }, border: false },
		title && _react2['default'].createElement(
			_Text2['default'],
			{ margin: { left: 12, bottom: 12 } },
			title
		),
		_react2['default'].createElement(
			_Box2['default'],
			{ row: true, wrap: true, alignItems: 'flex-start', margin: -gutter, border: false },
			items.map(function (item) {
				return _react2['default'].createElement(CollectionCell, _extends({}, item, { span: 1.0 / itemsPerRow }));
			})
		)
	);
}

function CollectionCell(_ref3) {
	var span = _ref3.span;

	return _react2['default'].createElement(
		_Box2['default'],
		{ width: span * 100 + '%', padding: gutter, border: false },
		_react2['default'].createElement(_Box2['default'], { padding: { bottom: '100%' }, border: false, backgroundColor: '#555' })
	);
}
module.exports = exports['default'];