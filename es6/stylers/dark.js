'use strict';

import sow from 'react-sow';

var spacing = 10;
var backgroundColor = '#111';
var color = '#ee';

var box = sow(function (_ref) {
	var _ref$border = _ref.border;
	var border = _ref$border === undefined ? true : _ref$border;
	return {
		padding: spacing,
		backgroundColor: backgroundColor,
		borderColor: color,
		borderWidth: 1,
		borderStyle: 'solid'
	};
});

export { box };
var text = sow({});

export { text };
var wrapper = box;
export { wrapper };