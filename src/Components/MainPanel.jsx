import React from 'react'
import './MainPanel.css'
import CountryFlag from './CountryFlag'

export default function MainPanel(props)
{
	return (
		<div className='panel main-panel'>
			<h2>
				IP Address
			</h2>

			<h2>
				IP Information
			</h2>

			<CountryFlag flagImg={props} countryName='Iran flag picture' />
			<h3>Iran</h3>
			<h4>Tehran</h4>
			<h3>isp: Hiweb</h3>
			<div>
				<h3>
					ip
					<p >1.1.1.1</p>
				</h3>


				<h3 className='coordinates'>
					Coordinates
					<h4>
						latitude
						<p>35.261546</p>
					</h4>
					<h4>longitude
						<p>18.656515</p>
					</h4>
				</h3>
			</div>
		</div>
	)
}
