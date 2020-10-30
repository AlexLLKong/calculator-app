import React from 'react'
import MainContainer from '../Containers/MainContainer'
import LinkButton from './LinkButton'

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
