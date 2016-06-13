import sow from 'react-sow'

const defaultTransitionAll = 'all 0.3s ease-in-out' 

export default sow(({ transitionAll = false }) => Object.assign({}, 
	transitionAll && { transition: defaultTransitionAll, WebkitTransition: defaultTransitionAll, msTransition: defaultTransitionAll }
))
