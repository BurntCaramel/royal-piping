import React from 'react'
import Box from './Box'
import Text from './Text'

const height = 49

export default function Nav({ items }) {
	return (
		<Box row shrink={ 0 }>
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
		<Box url={ url } column alignItems='center' grow={ 1 } height={ height }>
			<Box backgroundColor='#111' width={ 30 } height={ 30 } />
			<Text align='center' size={ 13 }>
				{ title }
			</Text>
		</Box>
	)
}
