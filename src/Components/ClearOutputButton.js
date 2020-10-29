import React from 'react'

export default function ClearOutputButton(props) {
	return (
		<button
			onClick={e => {
				e.preventDefault()
				props.value.handlers.clearOutput()
			}}
		>
			Clr
		</button>
	)
}
