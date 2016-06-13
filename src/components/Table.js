import React from 'react'
import Box from './Box'
import Scrollable from './Scrollable'
import Text from './Text'

export default function Table({ items, showIcons = true }) {
	return (
		<Box column grow={ 1 }>
			<Scrollable>{
				items.map((item) => (
					<TableCell { ...item } showIcon={ showIcons } />
				))
			}</Scrollable>
		</Box>
	)
}

function TableCell({ text, detailText, showIcon }) {
	return (
		<Box row height={ 49 } alignItems='center'>
			{ showIcon && <Box width={ 30 } height={ 30 } margin={{ left: 24, right: 24 }} backgroundColor='#555' border={ false } /> }
			<Box column border={ false }>
				<Text size={ 16 }>
					{ text }
				</Text>
				{ detailText &&
					<Text size={ 12 }>
						{ detailText }
					</Text>
				}
			</Box>
		</Box>
	)
}
