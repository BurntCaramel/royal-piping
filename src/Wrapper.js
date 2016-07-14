import React from 'react'
import Box from './components/Box'

export default function Wrapper({ children, relative, absolute, zIndex, width = 375, height = 667 }) {
	return (
		<Box column border relative={ relative } absolute={ absolute } zIndex={ zIndex } width={ width } height={ height } transitionAll>
			{ children }
		</Box>
	)
}