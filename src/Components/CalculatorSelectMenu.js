import React from 'react'
import CalculatorButton from './CalculatorSelectButton'

export default function CalculatorSelectMenu(props) {
	return (
		<div className="select-calculator-menu">
			<CalculatorButton
				value={{
					handler: props.value.handlers.selectScientific,
					name: 'Scientific',
					params: { ...props.value.params },
				}}
			/>
		</div>
	)
}
