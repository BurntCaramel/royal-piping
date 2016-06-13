import React from 'react'
import Box from './Box'
import Text from './Text'

const height = 49

export default function Nav({ items, showIcons = true }) {
	return (
		<Box row shrink={ 0 }>
			{
				items.map((item) => (
					<NavItem { ...item } showIcon={ showIcons } />
				))
			}
		</Box>
	)
}

const selectedIcon = (
	<Box width={ 30 } height={ 30 } backgroundColor='#555' border={ false } />
)

const nonselectedIcon = (
	<Box width={ 30 } height={ 30 } />
)

function NavItem({ title, url, selected, showIcon }) {
	return (
		<Box url={ url } column alignItems='center' grow={ 1 } height={ height }>
			{ showIcon &&
				(selected ? selectedIcon : nonselectedIcon)
			}
			<Text align='center' size={ 13 }>
				{ title }
			</Text>
		</Box>
	)
}