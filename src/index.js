import React from 'react'
import * as typeToComponent from './kits/ios'
import Wrapper from './Wrapper'

export default function RoyalPiping({ content = [], deviceInfo = {} }) {
	return (
		<Wrapper { ...deviceInfo }>{
			[].concat(content).map(({ type, ...props }, index) => {
				const Component = typeToComponent[type]
				return <Component key={ index } { ...props} />
			})
		}</Wrapper>
	)
}