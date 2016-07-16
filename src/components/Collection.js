import React from 'react'
import Box from './Box'
import Scrollable from './Scrollable'
import Text from './Text'

const gutter = 2.0

export default function Collection({ groups }) {
	return (
		<Box column grow={ 1 }>
			<Scrollable>{
				groups.map((group, index) => (
					<CollectionGroup key={ index } { ...group } />
				))
			}</Scrollable>
		</Box>
	)
}

function CollectionGroup({ items, itemsPerRow = 4, title }) {
	return (
		<Box column margin={{ top: 24, bottom: gutter * 2 }}>
			{ title &&
				<Text margin={{ left: 12, bottom: 12 }}>{ title }</Text>
			}
			<Box row wrap alignItems='flex-start' margin={ -gutter }>{
				items.map((item, index) => (
					<CollectionCell key={ index }
						{ ...item }
						span={ 1.0 / itemsPerRow}
					/>
				))
			}</Box>
		</Box>
	)
}

function CollectionCell({ span, backgroundColor = '#555' }) {
	return (
		<Box width={`${span * 100}%`} padding={ gutter }>
			<Box padding={{ bottom: '100%' }} backgroundColor={ backgroundColor } />
		</Box>
	)
}
