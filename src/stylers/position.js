import sow from 'react-sow'

function positionElements({ top, bottom, left, right }) {
	return { top, bottom, left, right }
}

export default sow(({
	absolute = false,
	relative = false,
	zIndex
}) => Object.assign(
	{
		zIndex
	},
	!!absolute ? Object.assign(
		{ position: 'absolute' },
		positionElements(absolute)
	) :
	!!relative ? Object.assign(
		{ position: 'relative' },
		positionElements(relative)
	) :
	null
))
