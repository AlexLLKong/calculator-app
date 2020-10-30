import React from 'react'

export default function FunctionButton(props) {
	return (
		<button
			onClick={e => {
				e.preventDefault()
				props.value.function({ ...props.value.params })
			}}
		>
			{props.value.name}
		</button>
	)
}
