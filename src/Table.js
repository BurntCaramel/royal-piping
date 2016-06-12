import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Table({ items }) {
	return (
		<Box column grow={ 1 }>
			{
				items.map((item) => (
					<TableCell { ...item } />
				))
			}
		</Box>
	)
}

function TableCell({ title }) {
	return (
		<Box row height={ 49 } alignItems='center'>
			<Text size={ 16 }>
				{ title }
			</Text>
		</Box>
	)
}
