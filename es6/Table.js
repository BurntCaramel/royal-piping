'use strict';

export default Table;

import React from 'react';
import Box from './Box';
import Scrollable from './Scrollable';
import Text from './Text';
function Table(_ref) {
	var items = _ref.items;

	return React.createElement(
		Box,
		{ column: true, grow: 1 },
		React.createElement(
			Scrollable,
			null,
			items.map(function (item) {
				return React.createElement(TableCell, item);
			})
		)
	);
}

function TableCell(_ref2) {
	var title = _ref2.title;

	return React.createElement(
		Box,
		{ row: true, height: 49, alignItems: 'center' },
		React.createElement(
			Text,
			{ size: 16 },
			title
		)
	);
}