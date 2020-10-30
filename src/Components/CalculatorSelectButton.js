import React from 'react'

export default function CalculatorButton(props) {
	return (
		<button
			className="btn-select-calculator"
			onClick={e => {
				e.preventDefault()
				props.value.handler({ ...props.value.params })
			}}
		>
			{props.value.name}
		</button>
	)
}
