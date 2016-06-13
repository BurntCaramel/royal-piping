import React from 'react'
import * as typeToComponent from './kits/ios'
import Wrapper from './Wrapper'

export default function RoyalPiping({ content = [], deviceInfo }) {
	return (
		<Wrapper { ...deviceInfo }>{
			content.map(({ type, ...props }) => {
				const Component = typeToComponent[type]
				return <Component { ...props} />
			})
		}</Wrapper>
	)
}