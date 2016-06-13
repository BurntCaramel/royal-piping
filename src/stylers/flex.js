import sow from 'react-sow'

export default sow(({
	row = false, column = false, wrap = false, alignItems, basis, grow, shrink, width, height
}) => Object.assign({},
	(row || column) && { display: 'flex', flexDirection : column ? 'column' : 'row' },
	{ flexWrap: wrap ? 'wrap' : 'nowrap' },
	alignItems && { alignItems },
	basis != null && { flexBasis: basis },
	grow != null && { flexGrow: grow },
	shrink != null && { flexShrink: shrink },
	width != null && { width },
	height != null && { height }
))

/*export default sow(({ flex = false, basis, grow, shrink }) => [
	flex && { display: 'flex' },
	basis && { flexBasis: basis },
	grow && { flexGrow: grow },
	shrink && { flexShrink: shrink }
])*/
