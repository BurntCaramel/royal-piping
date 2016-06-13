'use strict';

export default Scrollable;
import React from 'react';
import Box from './Box';
import Text from './Text';
function Scrollable(_ref) {
	var children = _ref.children;

	return React.createElement(
		'div',
		{ style: { overflow: 'auto', flexGrow: 1 } },
		children
	);
}