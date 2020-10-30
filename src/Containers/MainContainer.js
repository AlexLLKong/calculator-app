import React, { useState, useEffect } from 'react'
import CalculatorContainer from './CalculatorContainer'
import Display from '../Components/Display'
import CalculatorSelectMenu from '../Components/CalculatorSelectMenu'
import EventHandlers from '../Util/EventHandlers'
const math = require('mathjs')

const { HandleScientificCalculatorSelect } = EventHandlers()

export default function MainContainer() {
	let [output, setOutput] = useState('0')
	let [expression, setExpression] = useState('0')
	let [isScientificOn, setIsScientificOn] = useState(false)
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
		<div className="main-container">
			<h1 className="app-title">Calculator App</h1>
			<CalculatorSelectMenu
				value={{
					handlers: {
						selectScientific: HandleScientificCalculatorSelect,
					},
					params: {
						isScientificOn: isScientificOn,
						setIsScientificOn: setIsScientificOn,
					},
				}}
			/>
			<div>
				<Display
					value={{
						expression: expression,
						outputString: output,
					}}
				/>
				<CalculatorContainer
					value={{
						expression: expression,
						outputString: output,
						setOutput: setOutput,
						setExpression: setExpression,
					}}
				/>
			</div>
		</div>
	)
}
