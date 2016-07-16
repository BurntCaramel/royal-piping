import React from 'react'
import rgba from 'react-sow/rgba'
import Box from './Box'
import Text from './Text'
import Button from './Button'

function TextBlock({ title, message, trailingElement }) {
	return (
		<Box column grow={ 1 } padding={ 20 }>
			<Text align='center' size={ 17 } fontWeight={ 500 } lineHeight={ 1.4 }>
				{ title }
			</Text>
			<Text align='center' size={ 13 } lineHeight={ 1.3 }>
				{ message }
			</Text>
			{ trailingElement }
		</Box>
	);
}

function ButtonsList({ actions, reverse, big = false, allowColumn = false }) {
	const actionCount = actions.length
	const buttonFlexBasis = (allowColumn && actionCount <= 2) ? `${ 1.0 / actionCount }%` : 'auto'

	const buttonElements = actions.map(({
		title,
		enabled = true,
		preferred = false
	}, index) => (
		<Button key={ index }
			title={ title }
			enabled={ enabled }
			big={ big }
			cornerRadius={ 0 }
			fontWeight={ preferred ? 500 : 400 }
			grow={ 1 }
			basis={ buttonFlexBasis }
			align='center'
			padding={{ top: 13, bottom: 13, left: 8, right: 8 }}
		/>
	))

	return (allowColumn && actionCount <= 2) ? (
		<Box row shrink={ 0 } reverse={ reverse } children={ buttonElements } />
	) : (
		<Box column shrink={ 0 } reverse={ reverse } children={ buttonElements } />
	)
}

function ActionSheetBlock({ title, message, actions, reverseActions = false }) {
	return (
		<Box column outline grow={ 1 } margin={ 5 } overflow='hidden' backgroundColor={ rgba.whiteValue(255, 0.94) } cornerRadius={ 12 }>
			{ (title || message) &&
				<TextBlock title={ title } message={ message } />
			}
			<ButtonsList big actions={ actions } reverse={ reverseActions } />
		</Box>
	)
}

function ActionSheetBody({ title, message, actions }) {
	if (actions.length === 0) {
		return <noscript />
	}

	const [ firstAction, ...otherActions ] = actions
	if (firstAction.preferred) {
		// Preferred action is separated
		return (
			<Box column reverse grow={ 1 }>
				<ActionSheetBlock actions={ [ firstAction ] } />
				<ActionSheetBlock title={ title } message={ message } actions={ otherActions } />
			</Box>
		)
	}
	else {
		return (
			<ActionSheetBlock title={ title } message={ message } actions={ actions } />
		)
	}
}

function AlertBody({ title, message, textFields, actions }) {
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
		<Box column outline grow={ 1 } margin={ 20 } overflow='hidden' backgroundColor={ rgba.whiteValue(255, 0.94) } cornerRadius={ 12 }>
			<TextBlock title={ title } message={ message } trailingElement={ textFieldsBox } />
			<ButtonsList actions={ actions } allowColumn />
		</Box>
	);
}

export default function Alert({ title, message, textFields, actions, actionSheet = false }) {
	return (
		<Box row grow={ 1 } alignItems='center'>
			{
				actionSheet ? (
					<ActionSheetBody title={ title } message={ message } actions={ actions } />
				) : (
					<AlertBody title={ title } message={ message } textFields={ textFields } actions={ actions } />
				)
			}
		</Box>
	)
}