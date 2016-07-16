import React from 'react'
import rgba from 'react-sow/rgba'
import Box from './Box'
import Text from './Text'
import Button from './Button'

export default function Alert({ title, message, textFields, actions }) {
	const actionCount = actions.length
	const buttonFlexBasis = (actionCount <= 2) ? `${ 1.0 / actionCount }%` : 'auto'
	const buttonElements = actions.map(({
		title,
		enabled = true,
		preferred = false
	}, index) => (
		<Button key={ index }
			title={ title }
			enabled={ enabled }
			fontWeight={ preferred ? 'bold' : 'normal' }
			grow={ 1 }
			basis={ buttonFlexBasis }
			align='center'
			padding={ 8 }
		/>
	))

	const buttonsBox = (actionCount <= 2) ? (
		<Box row shrink={ 0 } children={ buttonElements } />
	) : (
		<Box column shrink={ 0 } children={ buttonElements } />
	)

	let textFieldsBox;
	if (textFields && textFields.length > 0) {
		const textFieldElements = textFields.map(({
			title
		}, index) => (
			<Box key={ index }
				outline
				padding={ 6 }
			>
				<Text size={ 13 }>
					{ title }
				</Text>
			</Box>
		))
		textFieldsBox = <Box column shrink={ 0 } margin={{ top: 16 }} children={ textFieldElements } />
	}

	return (
		<Box row grow={ 1 } alignItems='center'>
			<Box column outline grow={ 1 } margin={ 20 } overflow='hidden' backgroundColor={ rgba.whiteValue(255, 0.94) } cornerRadius={ 12 }>
				<Box column grow={ 1 } padding={ 20 }>
					<Text align='center' fontWeight='bold' lineHeight={ 1.4 }>
						{ title }
					</Text>
					<Text align='center' size={ 13 } lineHeight={ 1.3 }>
						{ message }
					</Text>
					{ textFieldsBox }
				</Box>
				{ buttonsBox }
			</Box>
		</Box>
	)
}