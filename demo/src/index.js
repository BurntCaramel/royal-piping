import React from 'react'
import { render } from 'react-dom'
import sow from 'react-sow'

import Screen from '../../src/Screen'
import ActionList from '../../src/ActionList'
import * as kit from '../../src/kits/ios'
import { makeMap as makeDevicesMap } from '../../src/devices/apple'

const content1 = [
	{
		type: 'table',
		items: [
			{
				text: 'The Hobbit',
				detailText: 'Lorem ipsum'
			},
			{
				text: 'The Jungle Book'
			},
			{
				text: 'Mindset',
				detailText: 'Lorem ipsum'
			},
			{
				text: 'Sprint'
			},
			{
				text: 'Creativity, Inc'
			},
			{
				text: 'The Hobbit'
			},
			{
				text: 'The Jungle Book'
			},
			{
				text: 'Mindset'
			},
			{
				text: 'Sprint'
			},
			{
				text: 'Creativity, Inc'
			},
			{
				text: 'The Hobbit'
			},
			{
				text: 'The Jungle Book'
			},
			{
				text: 'Mindset'
			},
			{
				text: 'Sprint'
			},
			{
				text: 'Creativity, Inc'
			}
		]
	},
	{
		type: 'tabs',
		items: [
			{
				title: 'My Books',
				selected: true
			},
			{
				title: 'Featured'
			},
			{
				title: 'Top Charts'
			},
			{
				title: 'Search'
			},
			{
				title: 'Purchased'
			}
		]
	}
]

const content2 = [
	{
		type: 'collection',
		groups: [
			{
				title: 'Yesterday',
				items: [
					{}, {}, {}, {}, {}
				]
			},
			{
				title: 'Today',
				items: [
					{}, {}, {}
				]
			},
			{
				title: 'Tomorrow',
				items: [
					{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
				]
			}
		]
	},
	{
		type: 'tabs',
		items: [
			{
				title: 'My Books'
			},
			{
				title: 'Featured',
				selected: true
			},
			{
				title: 'Top Charts'
			},
			{
				title: 'Search'
			},
			{
				title: 'Purchased'
			}
		]
	}
]

const content3 = [
	content2,
	[
		{
			type: 'alert',
			title: 'Ask a question?',
			message: 'Would you like to do this or that?',
			actions: [
				{
					title: 'Cancel',
					preferred: true
				},
				{
					title: 'This'
				}
			]
		}
	]
]

const story1 = [
	{
		type: 'alert',
		title: 'Ask a question?',
		message: 'Would you like to do this or that?',
		actions: [
			{
				title: 'Cancel',
				preferred: true
			},
			{
				title: 'This'
			}
		]
	},
	{
		type: 'alert',
		title: 'Four choices?',
		actions: [
			{
				title: 'One'
			},
			{
				title: 'Two'
			},
			{
				title: 'Three'
			},
			{
				title: 'Four'
			}
		]
	},
	{
		type: 'button',
		title: 'Sign Up',
		big: true
	},
	{
		type: 'alert',
		title: 'Enter account details',
		textFields: [
			{
				title: 'User name'
			},
			{
				title: 'Password'
			}
		],
		actions: [
			{
				title: 'Sign in'
			},
			{
				title: 'Cancel',
				preferred: true
			}
		]
	},
	{
		type: 'tableCell',
		text: 'The Hobbit',
		detailText: 'Lorem ipsum',
		showIcon: true
	}
]

const baseStyler = sow({
	fontFamily: 'sans-serif',
	maxWidth: '100vw'
})

const devices = makeDevicesMap()

const Demo = React.createClass({
	getInitialState: () => ({
		device: 'iphone6',
	}),

	onChangeDevice(device) {
		this.setState({ device })
	},

  render() {
		const { device: currentDevice } = this.state
		const deviceInfo = devices.get(currentDevice)

    return <div { ...baseStyler() }>
      <h1>royal-piping Demo</h1>
			<ul key='devices' style={{ listStyle: 'none' }}>
				{ Array.from(devices.entries()).map(([device, { title }]) => (
					<li
						onClick={ this.onChangeDevice.bind(this, device) }
						style={{
							cursor: 'pointer',
							color: device == currentDevice ? 'orange' : 'gray'
						}}
					>{
						title
					}</li>
				)) }
			</ul>
			<div key='content1' style={{ float: 'left', margin: 10 }}>
				<Screen content={ content1 } deviceInfo={ deviceInfo } kit={ kit } />
			</div>
			<div key='content2' style={{ float: 'left', margin: 10 }}>
				<Screen content={ content2 } deviceInfo={ deviceInfo } kit={ kit } />
			</div>
			<div key='content3' style={{ float: 'left', margin: 10 }}>
				<Screen layered content={ content3 } deviceInfo={ deviceInfo } kit={ kit } />
			</div>
			<div key='story1' style={{ float: 'left', margin: 10 }}>
				<ActionList content={ story1 } deviceInfo={ deviceInfo } kit={ kit } />
			</div>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))

document.querySelector('h1').remove()
