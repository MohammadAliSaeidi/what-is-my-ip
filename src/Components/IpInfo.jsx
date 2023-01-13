import React from 'react'

export default function IpInfo(props)
{
	return (
		<>
			<h2 className='section-header'>IP Address</h2>
			<div>
				<h3>ip</h3>
				<p>{props.ip}</p>
			</div>
		</>
	)
}
