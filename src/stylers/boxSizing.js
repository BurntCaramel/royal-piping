import sow from 'react-sow'

export default sow(({
	boxSizing = 'border-box',
	overflow,
	width,
	height,
	minWidth,
	minHeight
}) => Object.assign(
	{
		boxSizing,
		overflow,
		width,
		height,
		minWidth,
		minHeight
	}
))

