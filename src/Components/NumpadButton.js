import React from 'react'

export default function NumpadButton(props) {
	return (
		<button
			className="btn"
			onClick={e => {
				e.preventDefault()
				props.value.handlers.numpadClick(
					props.value.num,
					props.value.params.expression,
					props.value.params.setExpression
				)
			}}
		>
			{props.value.num}
		</button>
	)
}
