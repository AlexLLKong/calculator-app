import React from 'react'

const opDictionary = {
	'*': '\u00D7',
	'/': '\u00F7',
	'+': '+',
	'-': '\u2212',
}
export default function OperatorButton(props) {
	return (
		<button
			className="btn"
			onClick={e => {
				e.preventDefault()
				props.value.handlers.operatorClick(
					props.value.op,
					props.value.params.expression,
					props.value.params.setExpression
				)
			}}
		>
			<strong>{opDictionary[props.value.op]}</strong>
		</button>
	)
}
