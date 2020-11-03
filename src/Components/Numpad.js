import SinglePurposeButton from './SinglePurposeButton'

function generateNumpadDigits(props) {
	const ops = ['*', '/', '+', '-']
	const opDictionary = {
		'*': '\u00D7',
		'/': '\u00F7',
		'+': '+',
		'-': '\u2212',
	}
	const digits = [7, 8, 9, '*', 4, 5, 6, '/', 1, 2, 3, '+']
	const retArr = []
	for (let i = 0; i < digits.length; i++) {
		if (ops.includes(digits[i]))
			retArr.push(
				<SinglePurposeButton
					key={digits[i]}
					value={{
						function: props.value.handlers.operatorClick,
						params: { ...props.value.params, op: digits[i] },
						name: opDictionary[digits[i]],
						classes: [...props.value.classes],
					}}
				/>
			)
		else {
			retArr.push(
				<SinglePurposeButton
					key={digits[i]}
					value={{
						function: props.value.handlers.numpadClick,
						params: { ...props.value.params, value: digits[i] },
						name: digits[i],
						classes: [...props.value.classes],
					}}
				/>
			)
		}
	}

	retArr.push(
		<SinglePurposeButton
			key="openBracket"
			value={{
				function: props.value.handlers.noRulesClick,
				params: { ...props.value.params, char: '(' },
				name: '(',
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="0"
			value={{
				function: props.value.handlers.numpadClick,
				params: { ...props.value.params, value: '0' },
				name: '0',
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="closeBracket"
			value={{
				function: props.value.handlers.closeBracketClick,
				params: { ...props.value.params, char: ')' },
				name: ')',
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="-"
			value={{
				function: props.value.handlers.operatorClick,
				params: { ...props.value.params, op: '-' },
				name: opDictionary['-'],
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="clear"
			value={{
				function: props.value.handlers.clearOutput,
				params: { ...props.value.params },
				name: 'Clr',
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="backspace"
			value={{
				function: props.value.handlers.backspaceClick,
				params: { ...props.value.params },
				name: <i className="fas fa-backspace"></i>,
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="."
			value={{
				function: props.value.handlers.decimalClick,
				params: { ...props.value.params },
				name: '.',
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="="
			value={{
				function: props.value.handlers.equalsClick,
				params: { ...props.value.params },
				name: '=',
				classes: [...props.value.classes],
			}}
		/>
	)
	return retArr
}

export default function Numpad(props) {
	return <div className="numpad-container">{generateNumpadDigits(props)}</div>
}
