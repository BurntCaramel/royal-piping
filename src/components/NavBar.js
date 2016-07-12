import React from 'react'
import Box from './Box'
import Text from './Text'
import Button from './Button'

export default function NavBar({ title, stackLevel = 0 }) {
	return (
		<Box row>
			{ stackLevel > 0 && <Button title='Back' /> }
			<Text>
				{ title }
			</Text>
			<Box>
				<Button title='Edit' />
			</Box>
		</Box>
	)
}