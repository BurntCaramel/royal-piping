import React from 'react'
import sow from 'react-sow'

import flexStyler from './stylers/flex'

const borderStyler = sow(({ border = true, borderWidth = 1 }) => Object.assign({},
	//border ? { borderWidth, borderStyle: 'solid', borderColor: '#111', margin: -borderWidth } : {}
	border ? { boxShadow: `0 0 ${borderWidth}px #111` } : {}
))

const backgroundStyler = sow(({ backgroundColor }) => Object.assign({},
	backgroundColor ? { backgroundColor } : {}
))

const styler = sow.combine([
	flexStyler,
	borderStyler,
	backgroundStyler
])

export default function Box({ children, url, ...stylerProps }) {
	let element = (
		<div { ...styler(stylerProps) } >
			{ children }
		</div>
	)

	if (url) {
		element = (
			<a href={ url }>
				{ element }
			</a>
		)
	}

	return element
}