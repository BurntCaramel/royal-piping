import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Button({ title, enabled = true, align = 'center', size, fontWeight, border = true, big = false, ...boxProps }) {
	const extraProps = {}
	if (big) {
		extraProps.padding = 20
	}

	return (
		<Box border={ border } { ...extraProps } { ...boxProps }>
			<Text enabled={ enabled } align={ align } size={ size } fontWeight={ fontWeight }>
				{ title }
			</Text>
		</Box>
	)
}