import React from 'react'

export default function CountryFlag(props)
{
	return (
		<img src={props.flagImg} alt={props.countryName} />
	)
}
