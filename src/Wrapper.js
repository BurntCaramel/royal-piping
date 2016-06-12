import React from 'react'
import Box from './Box'

export default function Wrapper({ children, width = 375, height = 667 }) {
	return (
		<Box column width={ width } height={ height }>
			{ children }
		</Box>
	)
}