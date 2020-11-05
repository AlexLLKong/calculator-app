import React from 'react'

export default function CalculatorButton(props) {
	return (
		<button
			className={`btn-select-calculator ${
				props.value.params.isCalculatorOn
					? 'btn-select-calculator-toggled'
					: ''
			}`}
			onClick={e => {
				e.preventDefault()
				props.value.handler({ ...props.value.params })
			}}
		>
			{props.value.name}
		</button>
	)
}
