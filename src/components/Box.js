import React from 'react'
import sow from 'react-sow'

import * as stylers from '../stylers'

const outlineStyler = sow(({ outline = false, outlineWidth = 1 }) => Object.assign({},
	outline ? { boxShadow: `inset 0 0 ${outlineWidth}px #111` } : {}
))

const backgroundStyler = sow(({ backgroundColor }) => Object.assign({},
	backgroundColor ? { backgroundColor } : {}
))

const styler = sow.combine([
	stylers.boxSizing,
	stylers.flex,
	stylers.position,
	stylers.margin,
	stylers.padding,
	stylers.corner,
	stylers.transition,
	outlineStyler,
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