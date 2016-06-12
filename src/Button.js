import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Button({ title }) {
	return (
		<Box>
			<Text>
				{ title }
			</Text>
		</Box>
	)
}