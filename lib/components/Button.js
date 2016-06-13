'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Button;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function Button(_ref) {
	var title = _ref.title;

	var boxProps = _objectWithoutProperties(_ref, ['title']);

	return _react2['default'].createElement(
		_Box2['default'],
		boxProps,
		_react2['default'].createElement(
			_Text2['default'],
			null,
			title
		)
	);
}

module.exports = exports['default'];