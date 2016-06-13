'use strict';

export default Box;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import sow from 'react-sow';

import * as stylers from '../stylers';

var borderStyler = sow(function (_ref) {
	var _ref$border = _ref.border;
	var border = _ref$border === undefined ? true : _ref$border;
	var _ref$borderWidth = _ref.borderWidth;
	var borderWidth = _ref$borderWidth === undefined ? 1 : _ref$borderWidth;
	return Object.assign({},
	//border ? { borderWidth, borderStyle: 'solid', borderColor: '#111', margin: -borderWidth } : {}
	border ? { boxShadow: '0 0 ' + borderWidth + 'px #111' } : {});
});

var backgroundStyler = sow(function (_ref2) {
	var backgroundColor = _ref2.backgroundColor;
	return Object.assign({}, backgroundColor ? { backgroundColor: backgroundColor } : {});
});

var styler = sow.combine([stylers.boxSizing, stylers.flex, stylers.margin, stylers.padding, stylers.transition, borderStyler, backgroundStyler]);
function Box(_ref3) {
	var children = _ref3.children;
	var url = _ref3.url;

	var stylerProps = _objectWithoutProperties(_ref3, ['children', 'url']);

	var element = React.createElement(
		'div',
		styler(stylerProps),
		children
	);

	if (url) {
		element = React.createElement(
			'a',
			{ href: url },
			element
		);
	}

	return element;
}