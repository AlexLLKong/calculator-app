import React from 'react'
import CalculatorFunctions from '../Components/CalculatorFunctions'
import EventHandlers from '../Util/EventHandlers'
export default function ScientificCalculator(props) {
	const { HandleFunctionClick } = EventHandlers()
	console.log(props)
	return (
		<CalculatorFunctions
			value={{
				function: HandleFunctionClick,
				functionNames: ['sin', 'cos', 'tan'],
				params: { ...props.value },
				classes: ['operators'],
			}}
		/>
	)
}