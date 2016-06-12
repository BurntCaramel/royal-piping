import React from 'react'
import sow from 'react-sow'
import flexStyler from './stylers/flex'

const textStyler = sow(({ textAlign, fontSize }) => Object.assign({},
	textAlign ? { textAlign } : {},
	fontSize ? { fontSize } : {}
))

const styler = sow.combine([
	textStyler,
	flexStyler
])

export default function Text({ children, align, size, grow = 1, shrink }) {
	return (
		<div { ...styler({ grow, shrink, textAlign: align, fontSize: size }) }>
			{ children }
		</div>
	)
}