import React from 'react'
import sow from 'react-sow'
import * as stylers from '../stylers'

const textStyler = sow(({
	textAlign,
	fontFamily,
	fontSize,
	lineHeight,
	fontWeight,
	enabled = true
}) => ({
	textAlign,
	fontFamily,
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

const appleFontFamily = `SF UI Display, sans-serif`;

export default function Text({ children, align, size, fontFamily = appleFontFamily, ...stylerProps }) {
	return (
		<div { ...styler({ ...stylerProps, textAlign: align, fontSize: size, fontFamily }) }>
			{ children }
		</div>
	)
}