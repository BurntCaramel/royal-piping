import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Scrollable({ children }) {
	return (
		<div style={{ overflow: 'auto', flexGrow: 1 }}>
			{ children }
		</div>
	)
}