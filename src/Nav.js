import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Nav({ items }) {
	return (
		<Box row>
			{
				items.map((item) => (
					<NavItem { ...item } />
				))
			}
		</Box>
	)
}

function NavItem({ title, url }) {
	return (
		<Box url={ url } column alignItems='center' grow={ 1 } height={ 49 }>
			<Box backgroundColor='#111' width={ 30 } height={ 30 } />
			<Text align='center' size={ 13 }>
				{ title }
			</Text>
		</Box>
	)
}
