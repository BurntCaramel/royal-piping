import React from 'react'
import { render } from 'react-dom'
import sow from 'react-sow'

import Screen from '../../src/Screen'
import * as kit from '../../src/kits/ios'

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
		type: 'button',
		title: 'Next'
	},
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
	}
]

const baseStyler = sow({
	fontFamily: 'sans-serif'
})

const devices = new Map([
	["iphone5", { title: 'iPhone 5', width: 320, height: 568 }],
	["iphone6", { title: 'iPhone 6', width: 375, height: 667 }],
	["iphone6plus", { title: 'iPhone 6 Plus', width: 414, height: 736 }]
])

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
			<ul style={{ listStyle: 'none' }}>
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
			<div style={{ float: 'left', marginLeft: 10, marginRight: 10 }}>
				<Screen content={ content1 } deviceInfo={ deviceInfo } kit={ kit } />
			</div>
			<div style={{ float: 'left', marginLeft: 10, marginRight: 10 }}>
				<Screen content={ content2 } deviceInfo={ deviceInfo } kit={ kit } />
			</div>
			<div style={{ float: 'left', marginLeft: 10, marginRight: 10 }}>
				<Screen layered content={ content3 } deviceInfo={ deviceInfo } kit={ kit } />
			</div>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))

document.querySelector('h1').remove()
