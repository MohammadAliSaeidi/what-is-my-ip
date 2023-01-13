import React from 'react'
import './IpInfo.css'

export default function IpInfo(props)
{
	return (
		<>
			<h2 className='section-header ip-address-header'>IP Address</h2>
			<div className='ip-address'>
				<p>{props.ip}</p>
			</div>
		</>
	)
}
