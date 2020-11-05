import React from 'react'
import CalculatorButton from './CalculatorSelectButton'

export default function CalculatorSelectMenu(props) {
	return (
		<div className="select-calculator-menu">
			<CalculatorButton
				value={{
					handler: props.value.handlers.selectCalculator,
					name: 'Trig',
					params: {
						isCalculatorOn: props.value.params.isScientificOn,
						setIsCalculatorOn: props.value.params.setIsScientificOn,
					},
				}}
			/>
		</div>
	)
}
