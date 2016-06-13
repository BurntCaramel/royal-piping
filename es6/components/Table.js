'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default Table;

import React from 'react';
import Box from './Box';
import Scrollable from './Scrollable';
import Text from './Text';
function Table(_ref) {
	var items = _ref.items;
	var _ref$showIcons = _ref.showIcons;
	var showIcons = _ref$showIcons === undefined ? true : _ref$showIcons;

	return React.createElement(
		Box,
		{ column: true, grow: 1 },
		React.createElement(
			Scrollable,
			null,
			items.map(function (item) {
				return React.createElement(TableCell, _extends({}, item, { showIcon: showIcons }));
			})
		)
	);
}

function TableCell(_ref2) {
	var text = _ref2.text;
	var detailText = _ref2.detailText;
	var showIcon = _ref2.showIcon;

	return React.createElement(
		Box,
		{ row: true, height: 49, alignItems: 'center' },
		showIcon && React.createElement(Box, { width: 30, height: 30, margin: { left: 24, right: 24 }, backgroundColor: '#555', border: false }),
		React.createElement(
			Box,
			{ column: true, border: false },
			React.createElement(
				Text,
				{ size: 16 },
				text
			),
			detailText && React.createElement(
				Text,
				{ size: 12 },
				detailText
			)
		)
	);
}