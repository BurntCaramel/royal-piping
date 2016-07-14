import React from 'react'
import rgba from 'react-sow/rgba'
import Box from './Box'
import Text from './Text'
import Button from './Button'

export default function Alert({ title, message, actions }) {
	const buttonElements = actions.map(({
		title,
		enabled = true,
		preferred = false
	}, index) => (
		<Button key={ index }
			title={ title } enabled={ enabled } fontWeight={ preferred ? 'bold' : 'normal' } grow={ 1 } align='center' padding={ 8 }
		/>
	))

	return (
		<Box row grow={ 1 } alignItems='center'>
			<Box column border grow={ 1 } margin={ 20 } backgroundColor={ rgba.whiteValue(255, 0.94) }>
				<Box column grow={ 1 } padding={ 20 } border={ false }>
					<Text align='center' fontWeight='bold' lineHeight={ 1.4 }>
						{ title }
					</Text>
					<Text align='center' size={ 13 } lineHeight={ 1.3 }>
						{ message }
					</Text>
				</Box>
				<Box row shrink={ 0 } children={ buttonElements } />
			</Box>
		</Box>
	)
}