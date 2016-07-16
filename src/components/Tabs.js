import React from 'react'
import Box from './Box'
import Text from './Text'

const height = 49

export default function Tab({ items, showIcons = true }) {
	return (
		<Box row outline shrink={ 0 }>
			{
				items.map((item, index) => (
					<TabItem key={ index } { ...item } showIcon={ showIcons } />
				))
			}
		</Box>
	)
}

const iconInset = 5

const Icon = ({ selected }) => (
	<Box margin={ iconInset } width={ 34 - (iconInset * 2) } height={ 34 - (iconInset * 2) } outline={ !selected } backgroundColor={ selected ? '#555' : null } cornerRadius='50%' />
)

const selectedIcon = Icon({ selected: true })
const nonselectedIcon = Icon({ selected: false })

function TabItem({ title, url, selected, showIcon }) {
	return (
		<Box url={ url } column alignItems='center' grow={ 1 } height={ height }>
			{ showIcon &&
				(selected ? selectedIcon : nonselectedIcon)
			}
			<Text align='center' size={ 10 }>
				{ title }
			</Text>
		</Box>
	)
}
