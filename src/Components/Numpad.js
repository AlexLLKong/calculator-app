import NumpadButton from './NumpadButton'
import ClearOutputButton from './ClearOutputButton'
import DecimalButton from './DecimalButton'
import BackspaceButton from './BackspaceButton'
function generateNumpadDigits(props) {
	const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
	const retArr = []
	for (let i = 0; i < 10; i++) {
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
	return retArr
}

export default function Numpad(props) {
	return <div className="numpad-container">{generateNumpadDigits(props)}</div>
}
