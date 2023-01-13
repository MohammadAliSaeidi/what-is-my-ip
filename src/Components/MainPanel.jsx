import React from 'react'
import IpInfo from './IpInfoComponents/IpInfo.jsx'
import Location from './IpInfoComponents/Location.jsx'
import Coordinates from './IpInfoComponents/Coordinates.jsx'

import './MainPanel.css'
import './SectionHeader.css'
import './SectionContent.css'
import ISP from './IpInfoComponents/ISP.jsx'

export default function MainPanel(props)
{
	return (
		<div className='panel main-panel'>
			<IpInfo ip={props.ipInfo.ip} />
			<Location city={props.ipInfo.city} country={props.ipInfo.country} countryFlag={props.ipInfo.country_flag} />
			<Coordinates longtitude={props.ipInfo.longitude} latitude={props.ipInfo.latitude} />
			<ISP ipInfo={props.ipInfo} />
		</div>
	)
}
