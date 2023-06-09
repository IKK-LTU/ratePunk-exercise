import React from 'react'

import ContentContainer from 'components/layout/contentContainer/ContentContainer'

import Deescription from './description/Deescription'
import QuickLinks from './quickLinks/QuickLinks'

import styles from './footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.container}>
		<ContentContainer>
			<div className={styles.contentWrapper}>
				<div>
					<Deescription/>
				</div>
				<div>
					<QuickLinks/>
				</div>
				<div>one</div>
			</div>
		</ContentContainer>
		</div>
	)
}

export default Footer