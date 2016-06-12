'use strict';

export default Text;
import React from 'react';
import sow from 'react-sow';
import flexStyler from './stylers/flex';

var textStyler = sow(function (_ref) {
	var textAlign = _ref.textAlign;
	var fontSize = _ref.fontSize;
	return Object.assign({}, textAlign ? { textAlign: textAlign } : {}, fontSize ? { fontSize: fontSize } : {});
});

var styler = sow.combine([textStyler, flexStyler]);
function Text(_ref2) {
	var children = _ref2.children;
	var align = _ref2.align;
	var size = _ref2.size;
	var _ref2$grow = _ref2.grow;
	var grow = _ref2$grow === undefined ? 1 : _ref2$grow;
	var shrink = _ref2.shrink;

	return React.createElement(
		'div',
		styler({ grow: grow, shrink: shrink, textAlign: align, fontSize: size }),
		children
	);
}