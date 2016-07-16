import React from 'react'
import ScreenLayer from './ScreenLayer'
import renderContentList from './renderContentList'
import Box from './components/Box'
import * as stylers from './stylers'

export default function ActionList({
	content = [],
	deviceInfo = {},
	kit
}) {
	return (
		<Box>
			<ol>{
				renderContentList(kit, content).map((element, index) => (
					<li key={ index }
						children={ element }
						style={{ width: deviceInfo.width }}
						{ ...stylers.transition({ transitionAll: true }) }
					/>
				))
			}</ol>
		</Box>
	)
}
