import React from 'react'

export default function renderContentList(typeToComponent, content) {
	return content.map(({ type, ...props }, index) => {
		const Component = typeToComponent[type]
		if (!Component) {
			return `Unknown type ${type}`
		}
		return <Component key={ index } { ...props} />
	})
}