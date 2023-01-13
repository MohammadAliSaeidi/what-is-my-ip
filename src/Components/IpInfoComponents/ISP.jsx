import React from 'react'

export default function ISP(props)
{
	return (
		<>
			<h3 className='section-header'>ISP</h3>
			<div className='section-content'><p>{props.ipInfo.isp}</p></div>
		</>
	)
}
