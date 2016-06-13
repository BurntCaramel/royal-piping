import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Scrollable({ children }) {
	return (
		<div style={{ overflow: 'auto' }}>
			{ children }
		</div>
	)
}