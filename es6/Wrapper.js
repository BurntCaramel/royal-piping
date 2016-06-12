'use strict';

export default Wrapper;
import React from 'react';
import Box from './Box';
function Wrapper(_ref) {
	var children = _ref.children;
	var _ref$width = _ref.width;
	var width = _ref$width === undefined ? 375 : _ref$width;
	var _ref$height = _ref.height;
	var height = _ref$height === undefined ? 667 : _ref$height;

	return React.createElement(
		Box,
		{ column: true, width: width, height: height },
		children
	);
}