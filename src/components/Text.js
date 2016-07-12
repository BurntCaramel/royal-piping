import React from 'react'
import sow from 'react-sow'
import flexStyler from '../stylers/flex'
import marginStyler from '../stylers/margin'
import paddingStyler from '../stylers/padding'
import visibilityStyler from '../stylers/visibility'

const textStyler = sow(({
	textAlign,
	fontSize,
	lineHeight,
	fontWeight,
	enabled = true
}) => ({
	textAlign,
	fontSize,
	lineHeight,
	fontWeight,
	opacity: enabled ? 1.0 : 0.5
}))

const styler = sow.combine([
	textStyler,
	flexStyler,
	marginStyler,
	paddingStyler,
	visibilityStyler
])

export default function Text({ children, align, size, ...stylerProps }) {
	return (
		<div { ...styler({ ...stylerProps, textAlign: align, fontSize: size }) }>
			{ children }
		</div>
	)
}