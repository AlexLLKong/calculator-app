import React, { useState, useEffect } from 'react'
import CalculatorContainer from './CalculatorContainer'
import Display from '../Components/Display'
import CalculatorSelectMenu from '../Components/CalculatorSelectMenu'
import EventHandlers from '../Util/EventHandlers'
import Helpers from '../Util/Helpers'
import ScientificCalculator from './ScientificCalculator'
import SinglePurposeButton from '../Components/SinglePurposeButton'
const math = require('mathjs')
const { addCommas } = Helpers()
const {
	HandleScientificCalculatorSelect,
	HandleCopyToClipboardClick,
} = EventHandlers()

export default function MainContainer() {
	let [output, setOutput] = useState('0')
	let [expression, setExpression] = useState(['0'])
	let [isScientificOn, setIsScientificOn] = useState(false)
	useEffect(() => {
		try {
			let result = math.evaluate(expression.join(''))
			if (result === undefined) result = '0'
			setOutput(output => {
				return addCommas(
					math.format(result, {
						precision: 12,
						lowerExp: -12,
						upperExp: 12,
					})
				)
			})
		} catch (err) {}
	}, [expression])

	return (
		<div className="main-container">
			<h1 className="app-title">Calculator App</h1>
			<div className="util-button-container">
				<SinglePurposeButton
					key="ctrl-c"
					id="ctrl-c"
					value={{
						function: HandleCopyToClipboardClick,
						params: {
							output: output,
						},
						name: <i className="fas fa-clipboard"></i>,
						classes: ['btn'],
					}}
				/>

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
			</div>
			<div>
				<Display
					value={{
						expression: expression,
						output: output,
					}}
				/>
				{isScientificOn && (
					<ScientificCalculator
						value={{
							expression: expression,
							output: output,
							setOutput: setOutput,
							setExpression: setExpression,
						}}
					/>
				)}
				<CalculatorContainer
					value={{
						expression: expression,
						output: output,
						setOutput: setOutput,
						setExpression: setExpression,
					}}
				/>
			</div>
		</div>
	)
}
