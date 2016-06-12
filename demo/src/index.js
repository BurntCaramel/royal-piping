import React from 'react'
import {render} from 'react-dom'
import sow from 'react-sow'

import Component from '../../src'

const content1 = [
	{
		type: 'table',
		items: [
			{
				title: 'The Hobbit'
			},
			{
				title: 'The Jungle Book'
			},
			{
				title: 'Mindset'
			},
			{
				title: 'Sprint'
			},
			{
				title: 'Creativity, Inc'
			}
		]
	},
	{
		type: 'nav',
		items: [
			{
				title: 'My Books'
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
      <Component content={ content1 } deviceInfo={ deviceInfo } />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
