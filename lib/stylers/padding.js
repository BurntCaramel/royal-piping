'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactSow = require('react-sow');

var _reactSow2 = _interopRequireDefault(_reactSow);

exports['default'] = (0, _reactSow2['default'])(function (_ref) {
	var padding = _ref.padding;
	return padding == null ? {} : typeof padding === 'number' ? { padding: padding } : Object.assign({}, padding.top != null && { paddingTop: padding.top }, padding.left != null && { paddingLeft: padding.left }, padding.right != null && { paddingRight: padding.right }, padding.bottom != null && { paddingBottom: padding.bottom });
});
module.exports = exports['default'];