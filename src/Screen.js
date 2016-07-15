import React from 'react'
import ScreenLayer from './ScreenLayer'
import renderContentList from './renderContentList'
import Box from './components/Box'

export default function Screen({
	content = [],
	layered = false,
	deviceInfo = {},
	kit
}) {
	return (
		<div style={{ position: 'relative' }}>{
			layered ? (
				content.map((content, index) => (
					<ScreenLayer key={ index }
						{ ...deviceInfo }
						zIndex={ index }
						border={ false }
						absolute={{ top: 0, bottom: 0, left: 0, right: 0 }}
						children={ renderContentList(kit, content) }
					/>
				))
			) : (
				<ScreenLayer
					{ ...deviceInfo }
					children={ renderContentList(kit, content) }
				/>
			)
		}</div>
	)
}