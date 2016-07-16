import React from 'react'
import Box from './Box'
import Scrollable from './Scrollable'
import Text from './Text'

export default function Table({ items, showIcons = true }) {
	return (
		<Box column grow={ 1 }>
			<Scrollable>{
				items.map((item, index) => (
					<TableCell key={ index } { ...item } showIcon={ showIcons } />
				))
			}</Scrollable>
		</Box>
	)
}

export function TableCell({ text, detailText, showIcon }) {
	return (
		<Box row height={ 49 } alignItems='center'>
			{ showIcon && <Box width={ 30 } height={ 30 } margin={{ left: 24, right: 24 }} backgroundColor='#555' /> }
			<Box column>
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
