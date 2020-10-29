import NumpadButton from './NumpadButton'
import ClearOutputButton from './ClearOutputButton'

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
					num: digits[i],
				}}
			/>
		)
	}
	retArr.push(
		<ClearOutputButton
			key="clear"
			value={{
				handlers: {
					clearOutput: props.value.handlers.clearOutput,
				},
			}}
		/>
	)
	return retArr
}

export default function Numpad(props) {
	return <div className="numpad-container">{generateNumpadDigits(props)}</div>
}
