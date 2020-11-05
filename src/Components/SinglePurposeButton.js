import React, { useEffect } from 'react'

export default function SinglePurposeButton(props) {
	const HandleKeyUp = e => {
		e.preventDefault()
		e.stopPropagation()
		if (e.key === props.value.keymap)
			document.getElementById(`${props.value.id}`).click()
	}
	useEffect(() => {
		window.addEventListener('keyup', HandleKeyUp)
		return () => {
			window.removeEventListener('keyup', HandleKeyUp)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<button
			id={props.value.id}
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
