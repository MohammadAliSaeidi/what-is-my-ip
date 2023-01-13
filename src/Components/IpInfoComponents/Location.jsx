import React from 'react'
import CountryFlag from './CountryFlag.jsx'

export default function Location(props)
{
	return (
		<>
			<h2 className='section-header'>Location</h2>
			<div className='section-content'>
				<CountryFlag flagImg={props.countryFlag} />
				<div className='country-and-city'>
					<p>{props.city}, {props.country}</p>
				</div>
			</div>
		</>
	)
}
