import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Button({ title, ...boxProps }) {
	return (
		<Box { ...boxProps }>
			<Text>
				{ title }
			</Text>
		</Box>
	)
}