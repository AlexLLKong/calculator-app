import React from 'react'

export default function DecimalButton(props) {
	return (
		<button
			className="btn"
			onClick={e => {
				e.preventDefault()
				props.value.handlers.decimalClick(
					props.value.params.expression,
					props.value.params.setExpression
				)
			}}
		>
			.
		</button>
	)
}
