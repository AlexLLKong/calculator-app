import React from 'react'

export default function BackspaceButton(props) {
	return (
		<button
			className="btn"
			onClick={e => {
				e.preventDefault()
				props.value.handlers.backspaceClick(
					props.value.params.expression,
					props.value.params.setExpression,
					props.value.params.setOutput
				)
			}}
		>
			<i className="fas fa-backspace"></i>
		</button>
	)
}
