import React from 'react'
import * as typeToComponent from './kits/ios'
import Wrapper from './Wrapper'
import Box from './components/Box'

function renderContentList(content) {
	return content.map(({ type, ...props }, index) => {
		const Component = typeToComponent[type]
		if (!Component) {
			return `Unknown type ${type}`
		}
		return <Component key={ index } { ...props} />
	})
}

export default function RoyalPiping({
	content = [],
	layered = false,
	deviceInfo = {}
}) {
	return (
		<div style={{ position: 'relative' }}>{
			layered ? (
				content.map((content, index) => (
					<Wrapper key={ index }
						{ ...deviceInfo }
						zIndex={ index }
						border={ false }
						absolute={{ top: 0, bottom: 0, left: 0, right: 0 }}
						children={ renderContentList(content) }
					/>
				))
			) : (
				<Wrapper
					{ ...deviceInfo }
					children={ renderContentList(content) }
				/>
			)
		}</div>
	)
}