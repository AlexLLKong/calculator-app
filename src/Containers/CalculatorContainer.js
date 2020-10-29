import React, { useState, useEffect } from 'react'
import Numpad from '../Components/Numpad'
import Operators from '../Components/Operators'
import Display from '../Components/Display'
import EventHandlers from '../Util/EventHandlers'
const math = require('mathjs')
const {
	HandleNumpadButtonClick,
	HandleDecimalClick,
	HandleOperatorClick,
	HandleClearButtonClick,
	HandleBackspaceClick,
} = EventHandlers()
export default function CalculatorContainer() {
	let [output, setOutput] = useState('0')
	let [expression, setExpression] = useState('0')

	useEffect(() => {
		try {
			let result = math.evaluate(expression)
			if (result === undefined) result = '0'
			setOutput(output => {
				return math.format(result, { precision: 12 })
			})
		} catch (err) {}
	}, [expression])
	return (
		<div className="calculator-container">
			<Display
				value={{
					expression: expression,
					outputString: output,
				}}
			/>
			<Operators
				value={{
					handlers: {
						operatorClick: HandleOperatorClick,
					},
					params: {
						expression: expression,
						setExpression: setExpression,
					},
				}}
			/>
			<Numpad
				value={{
					handlers: {
						numpadClick: HandleNumpadButtonClick,
						clearOutput: HandleClearButtonClick,
						decimalClick: HandleDecimalClick,
						backspaceClick: HandleBackspaceClick,
					},
					params: {
						expression: expression,
						setExpression: setExpression,
						output: output,
						setOutput: setOutput,
					},
				}}
			/>
		</div>
	)
}
