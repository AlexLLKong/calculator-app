import React from 'react'
import CalculatorFunctions from '../Components/CalculatorFunctions'
import EventHandlers from '../Util/EventHandlers'
export default function ScientificCalculator(props) {
	const { HandleFunctionClick } = EventHandlers()
	return (
		<CalculatorFunctions
			value={{
				function: HandleFunctionClick,
				functionNames: [
					'sin',
					'cos',
					'tan',
					'asin',
					'acos',
					'atan',
					'log',
					'ln',
				],
				params: { ...props.value },
				classes: ['functions'],
			}}
		/>
	)
}
