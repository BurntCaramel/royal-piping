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
		<Box column margin={{ top: 24 }} border={ false }>
			{ title &&
				<Text margin={{ left: 12, bottom: 12 }}>{ title }</Text>
			}
			<Box row wrap alignItems='flex-start' margin={ -gutter } border={ false }>{
				items.map((item) => (
					<CollectionCell { ...item } span={ 1.0 / itemsPerRow} />
				))
			}</Box>
		</Box>
	)
}

function CollectionCell({ span }) {
	return (
		<Box width={`${span * 100}%`} padding={ gutter } border={ false }>
			<Box padding={{ bottom: '100%' }} border={ false } backgroundColor='#555' />
		</Box>
	)
}
