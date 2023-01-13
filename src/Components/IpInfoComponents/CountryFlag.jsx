import React from 'react'
import './CountryFlag.css'

export default function CountryFlag(props)
{
	return (
		<img src={props.flagImg} alt={""} className="country-flag" />
	)
}
