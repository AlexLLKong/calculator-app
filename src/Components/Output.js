import React from 'react'

export default function Output(props) {
	return (
		<div className="output">
			<h2 id="calculatorOutput">{props.value.outputString}</h2>
		</div>
	)
}
