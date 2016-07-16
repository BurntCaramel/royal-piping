export const iphone5 = {
	title: 'iPhone 5',
	width: 320,
	height: 568
}

export const iphone6 = {
	title: 'iPhone 6',
	width: 375,
	height: 667
}

export const iphone6plus = {
	title: 'iPhone 6 Plus',
	width: 414,
	height: 736
}

export function makeMap() {
	return new Map([
		["iphone5", iphone5],
		["iphone6", iphone6],
		["iphone6plus", iphone6plus]
	])
}