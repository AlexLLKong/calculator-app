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
			onClick={e => {
				e.preventDefault()
				props.value.handlers.operatorClick(props.value.op)
			}}
		>
			{opDictionary[props.value.op]}
		</button>
	)
}
