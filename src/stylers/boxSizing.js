import sow from 'react-sow'

export default sow(({
	boxSizing = 'border-box',
	width,
	height,
	minWidth,
	minHeight
}) => Object.assign(
	{
		boxSizing,
		width,
		height,
		minWidth,
		minHeight
	}
))

