import sow from 'react-sow'

const spacing = 10
const backgroundColor = '#111'
const color = '#ee'

export const box = sow(({ border = true }) => ({
	padding: spacing,
	backgroundColor,
	borderColor: color,
	borderWidth: 1,
	borderStyle: 'solid'
}))

export const text = sow({
})

export const wrapper = box
