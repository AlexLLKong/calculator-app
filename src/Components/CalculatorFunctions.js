import React from 'react'

import SinglePurposeButton from './SinglePurposeButton'
function createFunctionButtons(func, functionNames, params, classes) {
	let buttons = []
	for (let i = 0; i < functionNames.length; i++) {
		buttons.push(
			<SinglePurposeButton
				key={functionNames[i]}
				value={{
					function: func,
					params: { ...params, functionSyntax: functionNames[i] },
					name: functionNames[i],
					classes: classes,
				}}
			/>
		)
	}
	return buttons
}

export default function CalculatorFunctions(props) {
	return (
		<div className={props.value.classes.join(' ')}>
			{createFunctionButtons(
				props.value.function,
				props.value.functionNames,
				props.value.params,
				['btn']
			)}
		</div>
	)
}
