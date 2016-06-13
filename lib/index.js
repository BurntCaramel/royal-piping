'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = RoyalPiping;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _kitsIos = require('./kits/ios');

var typeToComponent = _interopRequireWildcard(_kitsIos);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function RoyalPiping(_ref) {
	var _ref$content = _ref.content;
	var content = _ref$content === undefined ? [] : _ref$content;
	var _ref$deviceInfo = _ref.deviceInfo;
	var deviceInfo = _ref$deviceInfo === undefined ? {} : _ref$deviceInfo;

	return _react2['default'].createElement(
		_Wrapper2['default'],
		deviceInfo,
		[].concat(content).map(function (_ref2) {
			var type = _ref2.type;

			var props = _objectWithoutProperties(_ref2, ['type']);

			var Component = typeToComponent[type];
			return _react2['default'].createElement(Component, props);
		})
	);
}

module.exports = exports['default'];