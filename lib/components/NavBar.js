'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = NavBar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function NavBar(_ref) {
	var title = _ref.title;
	var _ref$stackLevel = _ref.stackLevel;
	var stackLevel = _ref$stackLevel === undefined ? 0 : _ref$stackLevel;

	return _react2['default'].createElement(
		_Box2['default'],
		{ row: true },
		stackLevel > 0 && _react2['default'].createElement(
			_Button2['default'],
			null,
			'Back'
		),
		_react2['default'].createElement(
			_Text2['default'],
			null,
			title
		),
		_react2['default'].createElement(
			_Box2['default'],
			null,
			_react2['default'].createElement(
				_Button2['default'],
				null,
				'Edit'
			)
		)
	);
}

module.exports = exports['default'];