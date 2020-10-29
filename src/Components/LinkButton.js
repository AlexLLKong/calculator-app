import React from 'react'

export default function LinkButton(props) {
	return (
		<a href={props.value.link}>
			<div>GitHub</div>
		</a>
	)
}
