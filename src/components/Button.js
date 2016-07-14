import React from 'react'
import Box from './Box'
import Text from './Text'

export default function Button({ title, enabled = true, align, size, fontWeight, border = true, ...boxProps }) {
	return (
		<Box border={ border } { ...boxProps }>
			<Text enabled={ enabled } align={ align } size={ size } fontWeight={ fontWeight }>
				{ title }
			</Text>
		</Box>
	)
}