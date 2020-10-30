import React from 'react'
import Numpad from '../Components/Numpad'
import Operators from '../Components/Operators'
import EventHandlers from '../Util/EventHandlers'

const {
	HandleNumpadButtonClick,
	HandleDecimalClick,
	HandleOperatorClick,
	HandleClearButtonClick,
	HandleBackspaceClick,
	HandleNoRulesCharacterClick,
} = EventHandlers()

export default function CalculatorContainer(props) {
	return (
		<div className="calculator-container">
			<Operators
				value={{
					handlers: {
						operatorClick: HandleOperatorClick,
					},
					params: {
						expression: props.value.expression,
						setExpression: props.value.setExpression,
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
						noRulesClick: HandleNoRulesCharacterClick,
					},
					params: {
						expression: props.value.expression,
						setExpression: props.value.setExpression,
						output: props.value.output,
						setOutput: props.value.setOutput,
					},
					classes: ['btn'],
				}}
			/>
		</div>
	)
}
