import React from 'react'

export default function ISP(props)
{
	return (
		<>
			<h3 className='section-header'>ISP</h3>
			<div className='section-content'>{props.ipInfo.isp}</div>
		</>
	)
}
