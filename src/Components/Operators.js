import React from 'react'
import OperatorButton from './OperatorButton'

function generateOperators(props) {
	const ops = ['*', '/', '+', '-']
	const retArr = []
	for (let i = 0; i < 4; i++) {
		retArr.push(
			<OperatorButton
				key={ops[i]}
				value={{
					handlers: {
						operatorClick: props.value.handlers.operatorClick,
					},
					params: { ...props.value.params },
					op: ops[i],
				}}
			/>
		)
	}
	return retArr
}

export default function Operators(props) {
	return <div className="operators">{generateOperators(props)}</div>
}
