import Link from 'next/link'
import Image from 'next/image'
import ContentContainer from 'components/layout/contentContainer/ContentContainer'

import Deescription from './description/Deescription'
import QuickLinks from './quickLinks/QuickLinks'

import styles from './footer.module.scss'

import MailIcon from 'public/icons/email-footer.svg'

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
				<div className={styles.contacts}>
					<h2>Contacts</h2>
					<Link href="mailto:hi@ratepunk.com" target="_blank" rel="nooopener">
						<MailIcon />
						hi@ratepunk.com
					</Link>
				</div>
			</div>
		</ContentContainer>
		</div>
	)
}

export default Footer