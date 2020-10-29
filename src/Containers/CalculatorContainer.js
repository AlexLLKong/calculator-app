import React, { useState } from 'react'
import Output from '../Components/Output'
import Numpad from '../Components/Numpad'

export default function CalculatorContainer() {
	// Event Handlers
	function HandleNumpadButtonClick(value) {
		if (output.length < 10)
			setOutput(
				(output =
					`${output}` === '0' ? `${value}` : `${output}${value}`)
			)
	}
	function HandleClearButtonClick() {
		setOutput('0')
	}

	let [output, setOutput] = useState('0')

	return (
		<div className="calculator-container">
			<Output
				value={{
					outputString: output,
				}}
			/>
			<Numpad
				value={{
					handlers: {
						numpadClick: HandleNumpadButtonClick,
						clearOutput: HandleClearButtonClick,
					},
				}}
			/>
		</div>
	)
}
