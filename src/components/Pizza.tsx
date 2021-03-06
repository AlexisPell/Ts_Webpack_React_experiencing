import React from 'react'
import PizzaCss from './Pizza.module.css'

interface Pizza {
	id: number
	name: string
	description: string
	price: number
}

interface Props {
	pizza: Pizza
}

const Pizza: React.FC<Props> = ({ pizza: { description, name, price } }) => {
	return (
		<li className={PizzaCss.container}>
			<h2>{name}</h2>
			<p>{description}</p>
			<p>{price}</p>
		</li>
	)
}

export default Pizza
