'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactSow = require('react-sow');

var _reactSow2 = _interopRequireDefault(_reactSow);

exports['default'] = (0, _reactSow2['default'])(function (_ref) {
	var margin = _ref.margin;
	return margin == null ? {} : typeof margin === 'number' ? { margin: margin } : Object.assign({}, margin.top != null && { marginTop: margin.top }, margin.left != null && { marginLeft: margin.left }, margin.right != null && { marginRight: margin.right }, margin.bottom != null && { marginBottom: margin.bottom });
});
module.exports = exports['default'];