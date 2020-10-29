import React, { useState, useEffect } from 'react'
import Numpad from '../Components/Numpad'
import Operators from '../Components/Operators'
import Display from '../Components/Display'
const math = require('mathjs')
export default function CalculatorContainer() {
	// Event Handlers
	function HandleNumpadButtonClick(value) {
		setExpression(
			(expression =
				expression === '_'
					? `${value}`
					: (expression = `${expression}${value}`))
		)
	}
	function HandleOperatorClick(op) {
		const ops = ['*', '/', '+', '-']
		if (expression === '_') return
		else if (expression.length > 0)
			if (!ops.includes(expression[expression.length - 1]))
				setExpression((expression = `${expression}${op}`))
	}
	function HandleClearButtonClick() {
		setOutput('0')
		setExpression('_')
	}

	let [output, setOutput] = useState('0')
	let [expression, setExpression] = useState('_')

	useEffect(() => {
		try {
			let result = math.evaluate(expression)
			if (result === undefined) result = '0'
			setOutput(output => {
				return result
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
