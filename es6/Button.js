'use strict';

export default Button;
import React from 'react';
import Box from './Box';
import Text from './Text';
function Button(_ref) {
	var title = _ref.title;

	return React.createElement(
		Box,
		null,
		React.createElement(
			Text,
			null,
			title
		)
	);
}