import React from 'react'
import Numpad from '../Components/Numpad'
import EventHandlers from '../Util/EventHandlers'

const {
	HandleNumpadButtonClick,
	HandleDecimalClick,
	HandleOperatorClick,
	HandleClearButtonClick,
	HandleBackspaceClick,
	HandleNoRulesCharacterClick,
	HandleEqualsClick,
	HandleCloseBracketClick,
} = EventHandlers()

export default function CalculatorContainer(props) {
	return (
		<div className="calculator-container">
			<Numpad
				value={{
					handlers: {
						numpadClick: HandleNumpadButtonClick,
						clearOutput: HandleClearButtonClick,
						decimalClick: HandleDecimalClick,
						backspaceClick: HandleBackspaceClick,
						noRulesClick: HandleNoRulesCharacterClick,
						operatorClick: HandleOperatorClick,
						equalsClick: HandleEqualsClick,
						closeBracketClick: HandleCloseBracketClick,
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
