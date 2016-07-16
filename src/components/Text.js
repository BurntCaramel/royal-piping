import React from 'react'
import sow from 'react-sow'
import * as stylers from '../stylers'

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
	stylers.boxSizing,
	stylers.flex,
	stylers.margin,
	stylers.padding,
	stylers.visibility
])

export default function Text({ children, align, size, ...stylerProps }) {
	return (
		<div { ...styler({ ...stylerProps, textAlign: align, fontSize: size }) }>
			{ children }
		</div>
	)
}