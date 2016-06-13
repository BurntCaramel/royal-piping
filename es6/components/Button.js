'use strict';

export default Button;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Box from './Box';
import Text from './Text';
function Button(_ref) {
	var title = _ref.title;

	var boxProps = _objectWithoutProperties(_ref, ['title']);

	return React.createElement(
		Box,
		boxProps,
		React.createElement(
			Text,
			null,
			title
		)
	);
}