import React from 'react'
import Box from './components/Box'

export default function ScreenLayer({ children, relative, absolute, zIndex, width = 375, height = 667 }) {
	return (
		<Box column outline relative={ relative } absolute={ absolute } zIndex={ zIndex } width={ width } height={ height } transitionAll>
			{ children }
		</Box>
	)
}