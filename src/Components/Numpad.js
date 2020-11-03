import NumpadButton from './NumpadButton'
import ClearOutputButton from './ClearOutputButton'
import DecimalButton from './DecimalButton'
import BackspaceButton from './BackspaceButton'
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
						classes: ['btn'],
					}}
				/>
			)
		else {
			retArr.push(
				<NumpadButton
					key={digits[i]}
					value={{
						handlers: {
							numpadClick: props.value.handlers.numpadClick,
						},
						params: { ...props.value.params },
						num: digits[i],
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
		<NumpadButton
			key={'0'}
			value={{
				handlers: {
					numpadClick: props.value.handlers.numpadClick,
				},
				params: { ...props.value.params },
				num: '0',
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key="closeBracket"
			value={{
				function: props.value.handlers.noRulesClick,
				params: { ...props.value.params, char: ')' },
				name: ')',
				classes: [...props.value.classes],
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key={'-'}
			value={{
				function: props.value.handlers.operatorClick,
				params: { ...props.value.params, op: '-' },
				name: opDictionary['-'],
				classes: ['btn'],
			}}
		/>
	)
	retArr.push(
		<ClearOutputButton
			key="clear"
			value={{
				handlers: {
					clearOutput: props.value.handlers.clearOutput,
				},
				params: { ...props.value.params },
			}}
		/>
	)
	retArr.push(
		<BackspaceButton
			key="backspace"
			value={{
				handlers: {
					backspaceClick: props.value.handlers.backspaceClick,
				},
				params: { ...props.value.params },
			}}
		/>
	)
	retArr.push(
		<DecimalButton
			key="decimal"
			value={{
				handlers: {
					decimalClick: props.value.handlers.decimalClick,
				},
				params: { ...props.value.params },
			}}
		/>
	)
	retArr.push(
		<SinglePurposeButton
			key={'='}
			value={{
				function: props.value.handlers.equalsClick,
				params: { ...props.value.params },
				name: '=',
				classes: ['btn'],
			}}
		/>
	)
	return retArr
}

export default function Numpad(props) {
	return <div className="numpad-container">{generateNumpadDigits(props)}</div>
}
