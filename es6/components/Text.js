'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default Text;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import sow from 'react-sow';
import flexStyler from '../stylers/flex';
import marginStyler from '../stylers/margin';
import paddingStyler from '../stylers/padding';

var textStyler = sow(function (_ref) {
	var textAlign = _ref.textAlign;
	var fontSize = _ref.fontSize;
	return Object.assign({}, textAlign ? { textAlign: textAlign } : {}, fontSize ? { fontSize: fontSize } : {});
});

var styler = sow.combine([textStyler, flexStyler, marginStyler, paddingStyler]);
function Text(_ref2) {
	var children = _ref2.children;
	var align = _ref2.align;
	var size = _ref2.size;

	var stylerProps = _objectWithoutProperties(_ref2, ['children', 'align', 'size']);

	return React.createElement(
		'div',
		styler(_extends({}, stylerProps, { textAlign: align, fontSize: size })),
		children
	);
}