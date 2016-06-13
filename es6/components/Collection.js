'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default Collection;

import React from 'react';
import Box from './Box';
import Scrollable from './Scrollable';
import Text from './Text';

var gutter = 2.0;
function Collection(_ref) {
	var groups = _ref.groups;

	return React.createElement(
		Box,
		{ column: true, grow: 1 },
		React.createElement(
			Scrollable,
			null,
			groups.map(function (group) {
				return React.createElement(CollectionGroup, group);
			})
		)
	);
}

function CollectionGroup(_ref2) {
	var items = _ref2.items;
	var _ref2$itemsPerRow = _ref2.itemsPerRow;
	var itemsPerRow = _ref2$itemsPerRow === undefined ? 4 : _ref2$itemsPerRow;
	var title = _ref2.title;

	return React.createElement(
		Box,
		{ column: true, margin: { top: 24 }, border: false },
		title && React.createElement(
			Text,
			{ margin: { left: 12, bottom: 12 } },
			title
		),
		React.createElement(
			Box,
			{ row: true, wrap: true, alignItems: 'flex-start', margin: -gutter, border: false },
			items.map(function (item) {
				return React.createElement(CollectionCell, _extends({}, item, { span: 1.0 / itemsPerRow }));
			})
		)
	);
}

function CollectionCell(_ref3) {
	var span = _ref3.span;

	return React.createElement(
		Box,
		{ width: span * 100 + '%', padding: gutter, border: false },
		React.createElement(Box, { padding: { bottom: '100%' }, border: false, backgroundColor: '#555' })
	);
}