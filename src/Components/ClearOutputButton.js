import React from 'react'

export default function ClearOutputButton(props) {
	return (
		<button
			className="btn"
			onClick={e => {
				e.preventDefault()
				props.value.handlers.clearOutput(
					props.value.params.setOutput,
					props.value.params.setExpression
				)
			}}
		>
			Clr
		</button>
	)
}
