import React from 'react'
import CountryFlag from './CountryFlag'
import Coordinates from './Coordinates'
import './SectionHeader.css'

export default function LocationInfo(props)
{
	return (
		<>
			<div className='location'>
				<h2 className='section-header'>Location</h2>
				<CountryFlag flagImg={props.ipInfo.country_flag} />
				<div className='country-and-city'>
					<h3>Iran</h3>
					<h4>Tehran</h4>
				</div>
				<h3>isp: Hiweb</h3>
				<Coordinates longtitude={props.ipInfo.longitude} latitude={props.ipInfo.latitude} />
			</div>
		</>
	)
}
