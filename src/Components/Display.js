import React from 'react'
import Expression from './Expression'
import Output from './Output'
export default function Display(props) {
	return (
		<div className="display">
			<Expression
				value={{
					expression: props.value.expression,
				}}
			/>
			<Output
				value={{
					output: props.value.output,
				}}
			/>
		</div>
	)
}
