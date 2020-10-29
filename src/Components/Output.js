import React from 'react'

export default function Output(props) {
	return (
		<div>
			<h2 id="calculatorOutput" className="calculator-output">
				{props.value.outputString}
			</h2>
		</div>
	)
}
