import React from 'react'
import './App.css'

function Container() {
	return (
		<div className="container">
			<h1 className="app-title">Calculator App</h1>
		</div>
	)
}

export default function Wrapper() {
	return (
		<div className="wrapper">
			<Container />
		</div>
	)
}
