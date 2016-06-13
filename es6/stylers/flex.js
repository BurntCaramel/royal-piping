'use strict';

import sow from 'react-sow';

export default sow(function (_ref) {
	var _ref$row = _ref.row;
	var row = _ref$row === undefined ? false : _ref$row;
	var _ref$column = _ref.column;
	var column = _ref$column === undefined ? false : _ref$column;
	var _ref$wrap = _ref.wrap;
	var wrap = _ref$wrap === undefined ? false : _ref$wrap;
	var alignItems = _ref.alignItems;
	var basis = _ref.basis;
	var grow = _ref.grow;
	var shrink = _ref.shrink;
	var width = _ref.width;
	var height = _ref.height;
	return Object.assign({}, (row || column) && { display: 'flex', flexDirection: column ? 'column' : 'row' }, { flexWrap: wrap ? 'wrap' : 'nowrap' }, alignItems && { alignItems: alignItems }, basis != null && { flexBasis: basis }, grow != null && { flexGrow: grow }, shrink != null && { flexShrink: shrink }, width != null && { width: width }, height != null && { height: height });
});

/*export default sow(({ flex = false, basis, grow, shrink }) => [
	flex && { display: 'flex' },
	basis && { flexBasis: basis },
	grow && { flexGrow: grow },
	shrink && { flexShrink: shrink }
])*/