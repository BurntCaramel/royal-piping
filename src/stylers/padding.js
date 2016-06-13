import sow from 'react-sow'

export default sow(({ padding }) => (
	(padding == null) ? (
		{}
	) :
	(typeof padding === 'number') ? (
		{ padding }
	) : (
		Object.assign({}, 
			padding.top != null && { paddingTop: padding.top },
			padding.left != null && { paddingLeft: padding.left },
			padding.right != null && { paddingRight: padding.right },
			padding.bottom != null && { paddingBottom: padding.bottom }
		)
	)
))
