import React from 'react'
import CalculatorContainer from '../Containers/CalculatorContainer'

function MainContainer() {
	return (
		<div className="main-container">
			<h1 className="app-title">Calculator App</h1>
			<CalculatorContainer />
		</div>
	)
}

export default function Wrapper() {
	return (
		<div className="wrapper">
			<MainContainer />
		</div>
	)
}
