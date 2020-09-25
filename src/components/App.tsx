import React from 'react'
import AppCss from './App.module.css'
import pizzas from '../data/pizzas.json'

import Pizza from './Pizza'

const App: React.FC = () => {
	return (
		<div className={AppCss.container}>
			<h1>Pizza's App</h1>
			<hr />
			<ul>
				{pizzas.map((pizza) => (
					<Pizza pizza={pizza} key={pizza.id} />
				))}
			</ul>
		</div>
	)
}

export default App
