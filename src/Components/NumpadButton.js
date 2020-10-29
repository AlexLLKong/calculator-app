import React from 'react'

export default function NumpadButton(props) {
	return (
		<button
			onClick={e => {
				e.preventDefault()
				props.value.handlers.numpadClick(props.value.num)
			}}
		>
			{props.value.num}
		</button>
	)
}
