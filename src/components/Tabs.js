import React from 'react'
import Box from './Box'
import Text from './Text'

const height = 49

export default function Tab({ items, showIcons = true }) {
	return (
		<Box row shrink={ 0 }>
			{
				items.map((item, index) => (
					<TabItem key={ index } { ...item } showIcon={ showIcons } />
				))
			}
		</Box>
	)
}

const iconInset = 4

const Icon = ({ selected }) => (
	<Box margin={ iconInset } width={ 30 - (iconInset * 2) } height={ 30 - (iconInset * 2) } border={ !selected } backgroundColor={ selected ? '#555' : null } />
)

const selectedIcon = Icon({ selected: true })
const nonselectedIcon = Icon({ selected: false })

function TabItem({ title, url, selected, showIcon }) {
	return (
		<Box border url={ url } column alignItems='center' grow={ 1 } height={ height }>
			{ showIcon &&
				(selected ? selectedIcon : nonselectedIcon)
			}
			<Text align='center' size={ 13 }>
				{ title }
			</Text>
		</Box>
	)
}
