'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default Nav;

import React from 'react';
import Box from './Box';
import Text from './Text';

var height = 49;
function Nav(_ref) {
	var items = _ref.items;
	var _ref$showIcons = _ref.showIcons;
	var showIcons = _ref$showIcons === undefined ? true : _ref$showIcons;

	return React.createElement(
		Box,
		{ row: true, shrink: 0 },
		items.map(function (item) {
			return React.createElement(NavItem, _extends({}, item, { showIcon: showIcons }));
		})
	);
}

var selectedIcon = React.createElement(Box, { width: 30, height: 30, backgroundColor: '#555', border: false });

var nonselectedIcon = React.createElement(Box, { width: 30, height: 30 });

function NavItem(_ref2) {
	var title = _ref2.title;
	var url = _ref2.url;
	var selected = _ref2.selected;
	var showIcon = _ref2.showIcon;

	return React.createElement(
		Box,
		{ url: url, column: true, alignItems: 'center', grow: 1, height: height },
		showIcon && (selected ? selectedIcon : nonselectedIcon),
		React.createElement(
			Text,
			{ align: 'center', size: 13 },
			title
		)
	);
}