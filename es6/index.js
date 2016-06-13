'use strict';

export default RoyalPiping;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import * as typeToComponent from './kits/ios';
import Wrapper from './Wrapper';
function RoyalPiping(_ref) {
	var _ref$content = _ref.content;
	var content = _ref$content === undefined ? [] : _ref$content;
	var deviceInfo = _ref.deviceInfo;

	return React.createElement(
		Wrapper,
		deviceInfo,
		content.map(function (_ref2) {
			var type = _ref2.type;

			var props = _objectWithoutProperties(_ref2, ['type']);

			var Component = typeToComponent[type];
			return React.createElement(Component, props);
		})
	);
}