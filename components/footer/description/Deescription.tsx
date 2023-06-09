import React from 'react'

import Image from 'next/image'

import styles from './description.module.scss'

import logoSvg from 'public/icons/logo.svg'

import CopyRights from 'components/elements/copyRights/CopyRights'



const Deescription = () => {
	return (
		<div className={styles.container}>
			<Image src={logoSvg.src} alt="ratepunk logo" width={125} height={40}/>

			<p>
				Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you're getting the best deal!
			</p>
			
			<div>
				<CopyRights/>
			</div>
		</div>
	)
}

export default Deescription