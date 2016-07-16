import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Button({ title, enabled = true, align = 'center', size, fontWeight, outline = true, big = false, ...boxProps }) {
	const extraProps = {}
	if (big) {
		extraProps.padding = 20
		extraProps.cornerRadius = 12.5
		size = 20
	}

	return (
		<Box outline={ outline } { ...extraProps } { ...boxProps }>
			<Text enabled={ enabled } align={ align } size={ size } fontWeight={ fontWeight }>
				{ title }
			</Text>
		</Box>
	)
}