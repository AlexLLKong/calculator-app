import React from 'react'
import CalculatorContainer from '../Containers/CalculatorContainer'
import LinkButton from './LinkButton'
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
			<div className="link-list-container">
				<ul>
					<li>
						<LinkButton
							value={{
								link:
									'https://github.com/AlexLLKong/calculator-app',
								class: 'fa-github',
							}}
						/>
					</li>
				</ul>
			</div>
			<MainContainer />
		</div>
	)
}
