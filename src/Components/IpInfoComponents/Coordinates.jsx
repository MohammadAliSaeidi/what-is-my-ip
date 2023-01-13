import React from 'react'
import './Coordinates.css'

export default function Coordinates(props)
{
	console.log(props)
	return (
		<>
			<div className='coordinates'>
				<h3 className='section-header'>Coordinates</h3>
				<div className='coordinates-container'>
					<div className='coordinate-parameter'>
						<h4>latitude: </h4>
						<p>{props.latitude}</p>
					</div>
					<div className='coordinate-parameter'>
						<h4>longtitude: </h4>
						<p>{props.longtitude}</p>
					</div>
				</div>
			</div>
		</>
	)
}
