import React from 'react'
import SinglePurposeButton from './SinglePurposeButton'
const opDictionary = {
	'*': '\u00D7',
	'/': '\u00F7',
	'+': '+',
	'-': '\u2212',
}
function generateOperators(props) {
	const ops = ['*', '/', '+', '-']
	const retArr = []
	for (let i = 0; i < 4; i++) {
		retArr.push(
			<SinglePurposeButton
				key={ops[i]}
				value={{
					function: props.value.handlers.operatorClick,
					params: { ...props.value.params, op: ops[i] },
					name: opDictionary[ops[i]],
					classes: ['btn'],
				}}
			/>
		)
	}
	return retArr
}

export default function Operators(props) {
	return <div className="operators">{generateOperators(props)}</div>
}
