import React from 'react'

export default function SinglePurposeButton(props) {
	return (
		<button
			className={props.value.classes.join(' ')}
			onClick={e => {
				e.preventDefault()
				props.value.function({ ...props.value.params })
			}}
		>
			{props.value.name}
		</button>
	)
}
