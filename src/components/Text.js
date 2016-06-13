import React from 'react'
import sow from 'react-sow'
import flexStyler from '../stylers/flex'
import marginStyler from '../stylers/margin'
import paddingStyler from '../stylers/padding'

const textStyler = sow(({ textAlign, fontSize }) => Object.assign({},
	textAlign ? { textAlign } : {},
	fontSize ? { fontSize } : {}
))

const styler = sow.combine([
	textStyler,
	flexStyler,
	marginStyler,
	paddingStyler
])

export default function Text({ children, align, size, ...stylerProps }) {
	return (
		<div { ...styler({ ...stylerProps, textAlign: align, fontSize: size }) }>
			{ children }
		</div>
	)
}