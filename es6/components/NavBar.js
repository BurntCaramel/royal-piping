'use strict';

export default NavBar;
import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';
function NavBar(_ref) {
	var title = _ref.title;
	var _ref$stackLevel = _ref.stackLevel;
	var stackLevel = _ref$stackLevel === undefined ? 0 : _ref$stackLevel;

	return React.createElement(
		Box,
		{ row: true },
		stackLevel > 0 && React.createElement(
			Button,
			null,
			'Back'
		),
		React.createElement(
			Text,
			null,
			title
		),
		React.createElement(
			Box,
			null,
			React.createElement(
				Button,
				null,
				'Edit'
			)
		)
	);
}