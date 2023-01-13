import React from 'react'
import './MainPanel.css'
import LocationInfo from './LocationInfo.jsx'
import IpInfo from './IpInfo.jsx'

export default function MainPanel(props)
{
	return (
		<div className='panel main-panel'>
			<IpInfo ip={props.ipInfo.ip} />
			<LocationInfo ipInfo={props.ipInfo} />
		</div>
	)
}
